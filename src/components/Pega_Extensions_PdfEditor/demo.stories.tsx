import type { StoryObj } from '@storybook/react';
import PegaExtensionsPdfEditor from './index';

import type { PegaExtensionsPdfEditorProps } from './index';

export default {
  title: 'Templates/PDF Editor',
  argTypes: {
    author: {
      control: {
        type: 'text'
      }
    },
    keywords: {
      control: {
        type: 'text'
      }
    },
    subject: {
      control: {
        type: 'text'
      }
    },
    documentTitle: {
      control: {
        type: 'text'
      }
    },
    skills: {
      control: {
        type: 'array'
      }
    },
    name: {
      control: {
        type: 'text'
      }
    },
    skillTitle: {
      control: {
        type: 'text'
      }
    },
    schoollDesc: {
      control: {
        type: 'text'
      }
    },
    degree: {
      control: {
        type: 'text'
      }
    },
    school: {
      control: {
        type: 'text'
      }
    },
    sectionTitle: {
      control: {
        type: 'text'
      }
    }
  },
  component: PegaExtensionsPdfEditor as React.ComponentType<PegaExtensionsPdfEditorProps>
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

type Story = StoryObj<typeof PegaExtensionsPdfEditor>;

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
    return <PegaExtensionsPdfEditor {...props} />;
  },
  args: {
    author: 'Author Name',
    keywords: 'keyword1, keyword2',
    subject: 'Subject',
    documentTitle: 'Document Title',
    skills: ['Skill1', 'Skill2'],
    name: 'Name',
    skillTitle: 'Skill Title',
    children: null,
    schoollDesc: 'School Description',
    degree: 'Degree',
    school: 'School Name',
    sectionTitle: 'Section Title'
  }
};
