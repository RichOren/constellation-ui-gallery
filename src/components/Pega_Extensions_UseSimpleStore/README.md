# Custom React Hook: `useSimpleStore`

This code defines a custom React hook `useSimpleStore` that allows you to connect local component state to a globally shared state, managed through a "simple store" mechanism. The store allows components to subscribe to updates, and when the state in the store changes, all subscribed components will re-render with the latest state. Let's break it down step by step:

## Key Concepts

### `SimpleStore`:

A `SimpleStore` is an object created with `createSimpleStore`, which provides the following functionality:
- **subscribe**: Allows components to subscribe to state changes in the store.
- **unsubscribe**: Allows components to unsubscribe from state changes.
- **getStore**: Returns the current state of the store.
- **setStore**: Updates the store state and notifies all subscribers (components that have subscribed).

### `createSimpleStore`:

This function creates a simple global store that holds state (`currentStore`) and a set of subscribers (`listeners`). The store's state can be updated using `setStore`, and all components subscribed to the store will receive the new state when it changes.

### `useSimpleStore`:

This is a custom hook that connects your component to the global `SimpleStore`. When the store's state changes, your component will re-render with the new state.

The hook has two overloads:
- One that returns the entire store state and the setter function (`setStore`).
- One that allows you to provide a selector function to extract a part of the store’s state, and an optional equality function to control when the component should re-render.

## The Hook Function

The `useSimpleStore` hook works in two modes:

### 1. Without a selector:

```ts
function useSimpleStore<T extends Record<string, unknown>>(
  store: SimpleStore<T>
): [T, SimpleStore<T>['setStore']];
```
In this case, the hook returns the entire store state and the setStore function. When you call this hook in a component, the component will subscribe to the entire store and re-render whenever any part of the store state changes.

### 2. With a selector and optional equality function:

```ts
function useSimpleStore<T extends Record<string, unknown>, U = T>(
  store: SimpleStore<T>,
  selector: (store: T) => U,
  eqFn?: (prev: U, next: U) => boolean
): [U, SimpleStore<T>['setStore']];
```
You can pass a selector function to extract a specific piece of the state from the store, which is useful when your component only cares about part of the global state. Optionally, you can also pass an equality function (eqFn) to control when the component should re-render. By default, it checks for shallow equality (for arrays, it checks each element; for other types, it compares values directly).

## How It Works Internally:
### State and Effect:

* The component state is initialized by calling selector(store.getStore()), so the initial state is derived from the current store state.
* Inside useEffect, the component subscribes to the store using store.subscribe.
* When the store state changes, the listener function is called, and it updates the component's local state if the new state differs from the previous one (based on the equality function).
* When the component unmounts, the hook cleans up by calling store.unsubscribe to stop receiving updates.
