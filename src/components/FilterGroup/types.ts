import { DynamicMode } from 'store/dynamicModeGroups/types';

export type FilterGroupModeProps = {
  modeValues: DynamicMode;
  modeId: string;
  onModeRemove: (modeId: string) => void;
  onModeValuesChange: (modeId: string, value: DynamicMode) => void;
};
