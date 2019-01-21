import { MinMaxValues } from 'common/MinMax/types';
import { DynamicMode } from 'store/dynamicModes/types';

export type FilterGroupModeProps = {
  modeValues: DynamicMode;
  modeId: string;
  onModeRemove: (modeId: string) => void;
  onModeValuesChange: (modeId: string, value: DynamicMode) => void;
};
