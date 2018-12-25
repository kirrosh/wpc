import * as React from 'react';
import { StyledSocketsForm, FormHeader } from './styled';
import FormItem from './FormItem';
import { FormState } from './types';
import { MinMaxValues } from 'common/MinMax/types';
import MinMax from 'common/MinMax';
import SocketColors from 'common/SocketColors';
import { SocketColorsValues } from 'common/SocketColors/types';

class SocketsForm extends React.PureComponent<{}, FormState> {
  state: FormState = {
    name: '',
    damage: {
      min: '',
      max: '',
    },
    sockets: {
      blue: '',
      green: '',
      red: '',
      white: '',
    },
  };

  onNameChange = (name: string) => this.setState({ name });

  onDamageChange = (damage: MinMaxValues) => {
    this.setState({
      damage,
    });
  }

  onSocketsChange = (sockets: SocketColorsValues) => {
    this.setState({
      sockets,
    });
  }

  render() {
    const sockets = {
      blue: '',
      green: '',
      red: '',
      white: '',
    };
    return (
      <StyledSocketsForm>
        <FormHeader>
          Sockets
        </FormHeader>
        <FormItem label={'Sockets'} gridArea={'sockets'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'Links'} gridArea={'links'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'Colors'} gridArea={'colors'}>
          <SocketColors value={sockets} onChange={this.onSocketsChange}/>
        </FormItem>
        <FormItem label={'Linked'} gridArea={'linked'}>
          <SocketColors value={sockets} onChange={this.onSocketsChange}/>
        </FormItem>
      </StyledSocketsForm>
    );
  }
}

export default SocketsForm;
