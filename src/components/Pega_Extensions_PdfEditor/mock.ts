// @ts-nocheck
export const pyReviewRaw = {
  name: 'CollectInformation',
  type: 'View',
  config: {
    template: 'DefaultForm',
    ruleClass: 'OM5W9U-SampleApp-Work-Test',
    localeReference: '@LR OM5W9U-SAMPLEAPP-WORK-TEST!VIEW!COLLECTINFORMATION',
    context: '@P .pyViewContext'
  },
  children: [
    {
      name: 'A',
      type: 'Region',
      children: [
        {
          type: 'TextInput',
          config: {
            value: '@P .FirstName',
            label: '@L First Name',
            key: 'FirstName'
          }
        },
        {
          type: 'TextInput',
          config: {
            value: '@P .MiddleName',
            label: '@L Middle Name',
            key: 'MiddleName'
          }
        },
        {
          type: 'TextInput',
          config: {
            value: '@P .LastName',
            label: '@L Last Name',
            key: 'LastName'
          }
        }
      ]
    },
    {
      name: 'B',
      type: 'Region',
      children: [
        {
          type: 'Email',
          config: {
            value: '@P .Email',
            label: '@L Email',
            key: 'Email'
          }
        },
        {
          type: 'Phone',
          config: {
            value: '@P .PhoneNumber',
            label: '@L Phone Number',
            datasource: {
              source: '@DATASOURCE D_pyCountryCallingCodeList.pxResults',
              fields: {
                value: '@P .pyCallingCode'
              }
            },
            key: 'PhoneNumber'
          }
        },
        {
          type: 'Date',
          config: {
            value: '@P .ServiceDate',
            label: '@L Service Date',
            key: 'ServiceDate'
          }
        }
      ]
    },
    {
      name: 'C',
      type: 'Region',
      children: [
        {
          type: 'Email',
          config: {
            value: '@P .Email',
            label: '@L Email',
            key: 'Email'
          }
        }
      ]
    }
  ],
  classID: 'OM5W9U-SampleApp-Work-Test'
};

export const regionChildrenResolved = [
  {
    readOnly: undefined,
    value: 'John',
    label: 'First Name',
    hasSuggestions: false,
    key: 'First Name'
  },
  {
    readOnly: undefined,
    value: '',
    label: 'Middle Name',
    hasSuggestions: false,
    key: 'Middle Name'
  },
  {
    readOnly: undefined,
    value: 'Doe',
    label: 'Last Name',
    hasSuggestions: false,
    key: 'Last Name'
  },
  {
    readOnly: undefined,
    value: 'John@doe.com',
    label: 'Email',
    hasSuggestions: false,
    key: 'Email'
  },
  {
    readOnly: undefined,
    value: '+16397975093',
    label: 'Phone Number',
    datasource: {
      fields: {
        value: undefined
      },
      source: [
        {
          value: '+1'
        },
        {
          value: '+91'
        },
        {
          value: '+48'
        },
        {
          value: '+44'
        }
      ]
    },
    hasSuggestions: false,
    key: 'Phone Number'
  },
  {
    readOnly: undefined,
    value: '2023-01-25',
    label: 'Service Date',
    hasSuggestions: false,
    key: 'Service Date'
  }
];
