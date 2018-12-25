import * as React from 'react';
import { StyledMainForm } from './styled';
import Select from 'common/Select';
import FormItem from './FormItem';
import Search from 'common/Search';
import { FormState } from './types';
import { MinMaxValues } from 'common/MinMax/types';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class MainForm extends React.PureComponent<{}, FormState> {
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
      <StyledMainForm>
        <FormItem label={'League'} gridArea={'league'}>
          <Select
            value={options[0]}
            // onChange={console.log}
            options={options}
          />
        </FormItem>
        <FormItem label={'Type'} gridArea={'type'}>
          <Select
            value={options[0]}
            // onChange={console.log}
            options={options}
          />
        </FormItem>
        <FormItem label={'Base'} gridArea={'base'}>
          <Select
            value={options[0]}
            // onChange={console.log}
            options={options}
          />
        </FormItem>
        <FormItem label={'Name'} gridArea={'name'}>
          <Search
            value={this.state.name}
            onChange={this.onNameChange}
            options={options}
          />
        </FormItem>
      </StyledMainForm>
    );
  }
}

export default MainForm;
