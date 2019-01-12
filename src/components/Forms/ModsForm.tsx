import * as React from 'react';
import { StyledModsForm, FormHeader } from './styled';
import FormItem from './FormItem';
import { FormState } from './types';
import { MinMaxValues } from 'common/MinMax/types';
import MinMax from 'common/MinMax';
import FilterGroupMode from 'components/FilterGroup/FilterGroupMode';

class ModsForm extends React.PureComponent<{}, FormState> {
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
      <StyledModsForm>
        <FormHeader>
          Mods
        </FormHeader>
        <FilterGroupMode/>
      </StyledModsForm>
    );
  }
}

export default ModsForm;
