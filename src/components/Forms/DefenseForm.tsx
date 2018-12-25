import * as React from 'react';
import { StyledDefenseForm, FormHeader } from './styled';
import FormItem from './FormItem';
import { FormState } from './types';
import { MinMaxValues } from 'common/MinMax/types';
import MinMax from 'common/MinMax';

class DefenseForm extends React.PureComponent<{}, FormState> {
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
      <StyledDefenseForm>
        <FormHeader>
          Defense
        </FormHeader>
        <FormItem label={'Armour'} gridArea={'armour'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'Evasion'} gridArea={'evasion'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'Shield'} gridArea={'shield'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'Block'} gridArea={'block'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
      </StyledDefenseForm>
    );
  }
}

export default DefenseForm;
