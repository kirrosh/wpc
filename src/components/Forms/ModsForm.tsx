import * as React from 'react';
import { StyledModsForm, FormHeader } from './styled';
import { FormState } from './types';
import { MinMaxValues } from 'common/MinMax/types';
import FilterGroup from 'components/FilterGroup';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { StateProps } from 'types/helpers';

type Props = {}
& StateProps<typeof mapStateToProps>;
class ModsForm extends React.PureComponent<Props, FormState> {
  state: FormState = {
    name: '',
    damage: {
      min: '',
      max: '',
    },
  };

  renderModes = () => {
    const { dynamicModes } = this.props;
    return Object.keys(dynamicModes).map(key =>
      <FilterGroup
        groupData={dynamicModes[key]}
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
  dynamicModes: state.dynamicModes,
});

export default connect(mapStateToProps)(ModsForm);
