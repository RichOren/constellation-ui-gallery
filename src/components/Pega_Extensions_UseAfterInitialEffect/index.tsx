import {
  registerIcon,
  withConfiguration,
  useAfterInitialEffect,
  Input,
  Text
} from '@pega/cosmos-react-core';

import type { PConnFieldProps } from './PConnProps';

import StyledPegaExtensionsUseAfterInitialEffectWrapper from './styles';
import * as boxLinesIcon from '@pega/cosmos-react-core/lib/components/Icon/icons/box-lines-2.icon';
import { useState } from 'react';
import type { SetStateAction } from 'react';
import '../create-nonce';

registerIcon(boxLinesIcon);
// interface for props
export interface PegaExtensionsUseAfterInitialEffectProps extends PConnFieldProps {
  label: string;
  placeholder: string;
}

// props passed in combination of props from property panel (config.json) and run time props from Constellation
// any default values in config.pros should be set in defaultProps at bottom of this file
export const PegaExtensionsUseAfterInitialEffect = (
  props: PegaExtensionsUseAfterInitialEffectProps
) => {
  const { label, placeholder } = props;
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // This effect will run only when `name` changes after the initial render
  useAfterInitialEffect(() => {
    setMessage(`You updated the name to: ${name}`);
  }, [name]);

  // console.log('getPConnect:', getPConnect()); // Debugging step

  return (
    <StyledPegaExtensionsUseAfterInitialEffectWrapper>
      <Input
        type='text'
        label={label}
        value={name}
        onChange={(e: { target: { value: SetStateAction<string> } }) => setName(e.target.value)}
        placeholder={placeholder}
      />
      <Text>{message}</Text>
    </StyledPegaExtensionsUseAfterInitialEffectWrapper>
  );
};

export default withConfiguration(PegaExtensionsUseAfterInitialEffect);
