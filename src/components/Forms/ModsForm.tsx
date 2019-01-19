import * as React from 'react';
import { StyledModsForm, FormHeader } from './styled';
import { FormState } from './types';
import { MinMaxValues } from 'common/MinMax/types';
import FilterGroup from 'components/FilterGroup';

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
        <FilterGroup/>
      </StyledModsForm>
    );
  }
}

export default ModsForm;
