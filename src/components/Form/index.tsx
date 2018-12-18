import * as React from 'react';
import { StyledForm } from './styled';
import Select from 'common/Select';


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class Form extends React.PureComponent {
  render() {
    return (
      <StyledForm>
        <Select
          value={options[0]}
          // onChange={console.log}
          options={options}
        />
      </StyledForm>
    );
  }
}

export default Form;
