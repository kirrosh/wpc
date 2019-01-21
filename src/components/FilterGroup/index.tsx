import * as React from 'react';
import FilterGroupMode from './FilterGroupMode';
import { StyledFilterGroup } from './styled';
import Button from 'common/Button';
import { connect } from 'react-redux';
import { ApplicationState } from 'store';
import { addMode, removeMode, setModeValues } from 'store/dynamicModes/actions';
import { DynamicModeGroup, DynamicMode } from 'store/dynamicModes/types';

type Props = {
  groupId: string;
  groupData: DynamicModeGroup;
} & typeof mapDispatchToProps;

class FilterGroup extends React.PureComponent<Props> {
  addMode = (e: any) => {
    const { addMode, groupId } = this.props;
    addMode(groupId);
  }
  onModeRemove = (modeId: string) => {
    const { removeMode, groupId } = this.props;
    removeMode({ groupId, modeId });
  }
  onModeValuesChange = (modeId: string, value: DynamicMode) => {
    const { groupId, setModeValues } = this.props;
    setModeValues({ groupId, modeId, value });
  }
  renderModes = () => {
    const { modes } = this.props.groupData;
    return Object.keys(modes).map(key =>
      <FilterGroupMode
        key={key}
        modeId={key}
        modeValues={modes[key]}
        onModeRemove={this.onModeRemove}
        onModeValuesChange={this.onModeValuesChange}
      />,
    );
  }
  render() {
    return(
      <StyledFilterGroup>
        {this.renderModes()}
        <Button text={'Add'} onClick={this.addMode}/>
      </StyledFilterGroup>
    );
  }
}

const mapDispatchToProps = {
  addMode,
  removeMode,
  setModeValues,
};

export default connect(
  null,
  mapDispatchToProps,
)(FilterGroup);
