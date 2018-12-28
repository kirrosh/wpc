import * as React from 'react';
import { StyledMainForm } from './styled';
import Select from 'common/Select';
import FormItem from './FormItem';
import Search from 'common/Search';
import { connect } from 'react-redux';
import { setOptionValue, setStringValue } from 'store/searchFilters/actions';
import { ApplicationState } from 'store';
import { mainFormSelector } from 'store/searchFilters/selectors';
import { DispatchProps, StateProps } from 'types/helpers';
import { OptionType } from 'common/Select/types';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

type MainFormProps = { }
 & DispatchProps<typeof mapDispatchToProps>
 & StateProps<typeof mapStateToProps>;

class MainForm extends React.PureComponent<MainFormProps> {

  onNameChange = (value: string) => this.props.setStringValue('name', value);
  onLeagueChange = (value: OptionType) => this.props.setOptionValue('league', value);
  onTypeChange = (value: OptionType) => this.props.setOptionValue('type', value);
  onBaseChange = (value: OptionType) => this.props.setOptionValue('base', value);

  render() {
    const { league, base, type, name } = this.props;
    return (
      <StyledMainForm>
        <FormItem label={'League'} gridArea={'league'}>
          <Select
            value={league}
            onChange={this.onLeagueChange}
            options={options}
          />
        </FormItem>
        <FormItem label={'Type'} gridArea={'type'}>
          <Select
            value={type}
            onChange={this.onTypeChange}
            options={options}
          />
        </FormItem>
        <FormItem label={'Base'} gridArea={'base'}>
          <Select
            value={base}
            onChange={this.onBaseChange}
            options={options}
          />
        </FormItem>
        <FormItem label={'Name'} gridArea={'name'}>
          <Search
            value={name}
            onChange={this.onNameChange}
            options={options}
          />
        </FormItem>
      </StyledMainForm>
    );
  }
}
const mapStateToProps = (state: ApplicationState) => ({
  ...mainFormSelector(state),
});
const mapDispatchToProps = {
  setOptionValue,
  setStringValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainForm);
