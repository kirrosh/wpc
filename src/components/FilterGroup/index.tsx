import * as React from 'react';
import FilterGroupMode from './FilterGroupMode';
import { StyledFilterGroup, AddModeButton, StyledFilterGroupMode, SelectType, Separator } from './styled';
import { connect } from 'react-redux';
import { addMode, removeMode, setModeValues, removeModeGroup } from 'store/dynamicModeGroups/actions';
import { DynamicModeGroup, DynamicMode } from 'store/dynamicModeGroups/types';
import Select from 'common/Select';
import Button from 'common/Button';

type Props = {
  groupId: string;
  groupData: DynamicModeGroup;
} & typeof mapDispatchToProps;

class FilterGroup extends React.PureComponent<Props> {
  addMode = (e: any) => {
    const { addMode, groupId } = this.props;
    addMode(groupId);
  }
  removeModeGroup = (e: any) => {
    const { removeModeGroup, groupId } = this.props;
    removeModeGroup(groupId);
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
        <AddModeButton text={'Add mode'} onClick={this.addMode}/>
        <StyledFilterGroupMode>
          <SelectType>
            <Select/>
            <div>All specified mods must exist and match their values.</div>
          </SelectType>
          <div/>
          <Button text={'X'} onClick={this.removeModeGroup}/>
        </StyledFilterGroupMode>
        <Separator/>
      </StyledFilterGroup>
    );
  }
}

const mapDispatchToProps = {
  addMode,
  removeMode,
  setModeValues,
  removeModeGroup,
};

export default connect(
  null,
  mapDispatchToProps,
)(FilterGroup);
