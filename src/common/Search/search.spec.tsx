import * as React from 'react';
import { shallow } from 'enzyme';
import Search from '.';
import { StyledSearch, StyledSearchOption, MatchedString } from './styled';
import SearchOption from './SearchOption';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const emptyFunc = () => {};

test('Search', () => {
  const search = shallow(<Search options={options} value={options[1].label} onChange={emptyFunc}/>);

  expect(search.find(StyledSearch)).toHaveLength(1);
  expect(search.find(SearchOption)).toHaveLength(0);
});

test('Search with value', () => {
  const search = shallow(<Search options={options} value={options[1].label} onChange={emptyFunc}/>);
  expect(search.find(SearchOption)).toHaveLength(0);

  search.setState({
    showOptions: true,
  });
  expect(search.find(SearchOption)).toHaveLength(1);

  search.setProps({
    value: 'a',
  });
  expect(search.find(SearchOption)).toHaveLength(options.length);
});


test('SearchOption', () => {
  const { label, value } = options[2];
  const inputValue = 'a';
  const searchOption = shallow(<SearchOption onClick={emptyFunc} label={label} value={value} inputValue={inputValue}/>);

  expect(searchOption.find(StyledSearchOption)).toHaveLength(1);
  expect(searchOption.find(MatchedString)).toHaveLength(1);

  searchOption.setProps({
    inputValue: 'XXXX',
  });
  expect(searchOption.find(MatchedString)).toHaveLength(0);
});
