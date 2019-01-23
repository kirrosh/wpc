import * as React from 'react';
import { StyledModsForm, FormHeader, AddGroupWrapper } from './styled';
import FilterGroup from 'components/FilterGroup';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { StateProps, DispatchProps } from 'types/helpers';
import { addModeGroup } from 'store/dynamicModeGroups/actions';
import Button from 'common/Button';

type Props = {}
& StateProps<typeof mapStateToProps>
& DispatchProps<typeof mapDispatchToProps>;
class ModsForm extends React.PureComponent<Props> {
  renderModes = () => {
    const { dynamicModeGroups } = this.props;
    return Object.keys(dynamicModeGroups).map(key =>
      <FilterGroup
        groupData={dynamicModeGroups[key]}
        groupId={key}
        key={key}
      />,
    );
  }

  render() {
    return (
      <StyledModsForm>
        <FormHeader>
          Mods
        </FormHeader>
        {this.renderModes()}
        <AddGroupWrapper>
          <Button onClick={this.props.addModeGroup} text={'Add group'}/>
        </AddGroupWrapper>
      </StyledModsForm>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  dynamicModeGroups: state.dynamicModeGroups,
});

const mapDispatchToProps = ({
  addModeGroup,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModsForm);
