import type { StoryObj } from '@storybook/react';
import { PegaExtensionsUseAfterInitialEffect } from './index';

import type { PegaExtensionsUseAfterInitialEffectProps } from './index';

export default {
  title: 'Hooks/useAfterInitialEffect',
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  },
  component:
    PegaExtensionsUseAfterInitialEffect as React.ComponentType<PegaExtensionsUseAfterInitialEffectProps>
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

type Story = StoryObj<typeof PegaExtensionsUseAfterInitialEffect>;

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
    return <PegaExtensionsUseAfterInitialEffect {...props} />;
  },
  args: {
    label: 'Name'
  }
};
