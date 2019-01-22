import * as React from 'react';
import { StyledModsForm, FormHeader } from './styled';
import FilterGroup from 'components/FilterGroup';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { StateProps } from 'types/helpers';

type Props = {}
& StateProps<typeof mapStateToProps>;
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
      </StyledModsForm>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  dynamicModeGroups: state.dynamicModeGroups,
});

export default connect(mapStateToProps)(ModsForm);
