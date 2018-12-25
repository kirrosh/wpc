import * as React from 'react';
import { StyledOffenseForm, FormHeader } from './styled';
import FormItem from './FormItem';
import { FormState } from './types';
import { MinMaxValues } from 'common/MinMax/types';
import MinMax from 'common/MinMax';

class OffenseForm extends React.PureComponent<{}, FormState> {
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
      <StyledOffenseForm>
        <FormHeader>
          Offense
        </FormHeader>
        <FormItem label={'Damage'} gridArea={'damage'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'APS'} gridArea={'aps'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'Crit. Strike'} gridArea={'critStrike'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'DPS'} gridArea={'dps'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'eDPS'} gridArea={'eDps'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'pDPS'} gridArea={'pDps'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
      </StyledOffenseForm>
    );
  }
}

export default OffenseForm;
