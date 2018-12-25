import * as React from 'react';
import { StyledSocketsForm, FormHeader } from './styled';
import FormItem from './FormItem';
import { FormState } from './types';
import { MinMaxValues } from 'common/MinMax/types';
import MinMax from 'common/MinMax';

class SocketsForm extends React.PureComponent<{}, FormState> {
  state: FormState = {
    name: '',
    damage: {
      min: '',
      max: '',
    },
  };

  onNameChange = (name: string) => this.setState({ name });

  onDamageChange = (damage: MinMaxValues) => {
    this.setState({
      damage,
    });
  }

  render() {
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
      </StyledSocketsForm>
    );
  }
}

export default SocketsForm;
