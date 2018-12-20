import * as React from 'react';
import { StyledForm } from './styled';
import Select from 'common/Select';
import FormItem from './FormItem';
import Input from 'common/Input';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class Form extends React.PureComponent {
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
          <Input
            // value={options[0]}
            // onChange={console.log}
            // options={options}
          />
        </FormItem>
      </StyledForm>
    );
  }
}

export default Form;
