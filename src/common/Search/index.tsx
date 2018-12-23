import * as React from 'react';
import Input from 'common/Input';
import { SearchProps, SearchState } from './types';
import SearchOption from './SearchOption';
import { StyledSearch, SearchOptions } from './styled';

// TODO: add async options
class Search extends React.PureComponent<SearchProps, SearchState> {
  state: SearchState = {
    showOptions: false,
  };

  onSearchValueChange = (value: string) => {
    const { onChange } = this.props;
    this.setState({ showOptions: !!value });
    onChange(value);
  }

  onOptionClick = (id: string, name: string) => {
    const { onChange } = this.props;
    this.setState({ showOptions: false });
    onChange(name);
  }

  renderOptions = () => {
    const { options, value } = this.props;
    const optionComponents = options
      .filter(option => option.name.toLowerCase().includes(value.toLowerCase()))
      .map(option => (
        <SearchOption
          value={value}
          key={option.id}
          {...option}
          onClick={this.onOptionClick}
        />));

    return (optionComponents.length ?
      <SearchOptions>
        {optionComponents}
      </SearchOptions>
      :
      null
    );
  }

  render() {
    const { value } = this.props;
    return (
      <StyledSearch>
        <Input onChange={this.onSearchValueChange} value={value}/>
        {this.state.showOptions && this.renderOptions()}
      </StyledSearch>
    );
  }
}

export default Search;
