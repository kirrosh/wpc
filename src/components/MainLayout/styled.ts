import styled from 'styled-components';
import { createDefaultGrid } from 'styled/grid/mixins';

// base layout inspired by
// CSS Grid layout: multiply & conquer — or how to actually design using The Grid.
// https://bit.ly/2N92FVz

export const StyledMainLayout = styled.div`
  ${createDefaultGrid('5fr')}
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 5fr 0.5fr 0.5fr;
`;
