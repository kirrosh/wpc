import styled from 'styled-components';

// base layout inspired by
// "CSS Grid layout: multiply & conquer — or how to actually design using The Grid."
// https://bit.ly/2N92FVz

export const StyledMainLayout = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 10fr 0.5fr 0.5fr;
`;

export const SimpleContent = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
`;
