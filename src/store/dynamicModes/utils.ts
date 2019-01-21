import * as uuid from 'uuid';

export const createNewModeGroup = () => {
  const groupId = uuid.v4();
  return {
    [groupId]: {
      modes: createNewMode(),
      type: '',
    },
  };
};

export const createNewMode = () => {
  const modeId = uuid.v4();
  return {
    [modeId]: {
      name: '',
      values: {
        min: '',
        max: '',
      },
    },
  };
};
