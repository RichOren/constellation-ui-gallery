import type { StoryObj } from '@storybook/react';
import { PegaExtensionsUseSimpleStore } from './index';

import type { PegaExtensionsUseSimpleStoreProps } from './index';

export default {
  title: 'Hooks/useSimpleStore',
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  },
  component: PegaExtensionsUseSimpleStore as React.ComponentType<PegaExtensionsUseSimpleStoreProps>
};

const setPCore = (): void => {
  (window as any).PCore = {
    getComponentsRegistry: () => {
      return {
        getLazyComponent: (f: string) => f
      };
    },
    getEnvironmentInfo: () => {
      return {
        getTimeZone: () => 'local'
      };
    }
  };
};

type Story = StoryObj<typeof PegaExtensionsUseSimpleStore>;

export const Default: Story = {
  render: (args: any) => {
    setPCore();
    const props = {
      ...args,
      getPConnect: () => {
        return {
          getStateProps: () => {
            return {
              value: 'C-123'
            };
          },
          getActionsApi: () => {
            return {
              openWorkByHandle: () => {
                /* nothing */
              },
              createWork: () => {
                /* nothing */
              },
              updateFieldValue: () => {
                /* nothing */
              },
              triggerFieldChange: () => {
                /* nothing */
              },
              showCasePreview: () => {
                /* nothing */
              }
            };
          },
          ignoreSuggestion: () => {
            /* nothing */
          },
          acceptSuggestion: () => {
            /* nothing */
          },
          setInheritedProps: () => {
            /* nothing */
          },
          resolveConfigProps: () => {
            /* nothing */
          }
        };
      }
    };
    return <PegaExtensionsUseSimpleStore {...props} />;
  },
  args: {
    label: 'Name'
  }
};
