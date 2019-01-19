import styled, { css } from 'styled';

export const StyledFilterGroupMode = styled.div`
  display: grid;
  grid-column-gap: 32px;
  grid-template-columns: 1fr 128px 50px;
  padding: 16px 0 0 16px;
  width: calc(100% - 16px);
  /* grid-template-rows: 32px; */
`;

export const StyledFilterGroup = styled.div`
  display: grid;
  grid-row-gap: 14px;
  grid-template-areas:
    "mode mode mode"
    ". addBtn ."
    " ."
  ;
`;

// export const StyledFilterGroupMode = styled.div`
//   ${gridMixin}
// `;
