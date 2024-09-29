import {
  withConfiguration,
  createSimpleStore,
  useSimpleStore,
  Button
} from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';

import StyledPegaExtensionsUseSimpleStoreWrapper from './styles';
import '../create-nonce';

// interface for props
export interface PegaExtensionsUseSimpleStoreProps extends PConnFieldProps {
  getPConnect: () => any;
}

// Define initial state
const initialState = { count: 0, user: { name: 'John' } };
// Create a single store instance
const store = createSimpleStore(initialState);
const store2 = createSimpleStore(initialState);

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
export const PegaExtensionsUseSimpleStore = (props: PegaExtensionsUseSimpleStoreProps) => {
  const { getPConnect } = props;
  const [state, setStore] = useSimpleStore(store);
  const [state2, setStore2] = useSimpleStore(store2);

  const increment = (id: number) => {
    if (id === 1) {
      setStore(current => {
        // console.log('New State:', newState); // Debugging step
        return { ...current, count: current.count + 1 };
      });
    } else {
      setStore2(current => {
        // console.log('New State 2:', newState); // Debugging step
        return { ...current, count: current.count + 1 };
      });
    }
  };

  // eslint-disable-next-line no-console
  console.log('getPConnect:', getPConnect()); // Debugging step

  return (
    <StyledPegaExtensionsUseSimpleStoreWrapper>
      <div>
        <Button onClick={() => increment(1)}>Increment {state.count}</Button>
        <Button onClick={() => increment(2)}>Increment {state2.count}</Button>
      </div>
    </StyledPegaExtensionsUseSimpleStoreWrapper>
  );
};

export default withConfiguration(PegaExtensionsUseSimpleStore);
