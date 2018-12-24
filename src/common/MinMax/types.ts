export type MinMaxValues = {
  min: string;
  max: string;
};

export type MinMaxProps = {
  value: MinMaxValues;
  onChange: (value: MinMaxValues) => void;
};
