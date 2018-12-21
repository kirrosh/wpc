import * as React from 'react';
import { StyledForm } from './styled';
import Select from 'common/Select';
import FormItem from './FormItem';
import Input from 'common/Input';
import Search from 'common/Search';
import { FormState } from './types';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];
const searchOptions = [
  { id: 'chocolate', name: 'Chocolate' },
  { id: 'strawberry', name: 'Strawberry' },
  { id: 'vanilla', name: 'Vanilla' },
];

class Form extends React.PureComponent<{}, FormState> {
  state = {
    name: '',
  };

  onNameChange = (name: string) => this.setState({ name });

  render() {
    return (
      <StyledForm>
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
            options={searchOptions}
          />
        </FormItem>
      </StyledForm>
    );
  }
}

export default Form;
