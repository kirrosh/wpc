import * as React from 'react';
import { StyledDefenseForm, FormHeader, StyledRequirementsForm } from './styled';
import FormItem from './FormItem';
import { FormState } from './types';
import { MinMaxValues } from 'common/MinMax/types';
import MinMax from 'common/MinMax';

class RequirementsForm extends React.PureComponent<{}, FormState> {
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
      <StyledRequirementsForm>
        <FormHeader>
          Requirements
        </FormHeader>
        <FormItem label={'Level'} gridArea={'level'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'Strength'} gridArea={'strength'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'Dexterity'} gridArea={'dexterity'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
        <FormItem label={'Intelligence'} gridArea={'intelligence'}>
          <MinMax value={this.state.damage} onChange={this.onDamageChange}/>
        </FormItem>
      </StyledRequirementsForm>
    );
  }
}

export default RequirementsForm;
