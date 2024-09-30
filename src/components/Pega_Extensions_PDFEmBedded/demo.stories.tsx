import type { StoryObj } from '@storybook/react';
import { PegaExtensionsPdfEmBedded } from './index';

import type { PegaExtensionsPdfEmBeddedProps } from './index';

export default {
  title: 'Templates/PDF Embedded',
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    }
  },
  component: PegaExtensionsPdfEmBedded as React.ComponentType<PegaExtensionsPdfEmBeddedProps>
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

type Story = StoryObj<typeof PegaExtensionsPdfEmBedded>;

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
    return <PegaExtensionsPdfEmBedded {...props} />;
  },
  args: {
    label: 'Name'
  }
};
