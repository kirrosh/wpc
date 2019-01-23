import styled, { css } from 'styled';
import Button from 'common/Button';

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
  margin-bottom: 20px;
`;

export const AddModeButton = styled(Button)`
  margin: 0 auto;
`;

export const SelectType = styled.div`
  display: grid;
  grid-template-columns: 130px auto;
  grid-column-gap: 30px;
  align-items: center;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  margin-left: -16px;
  padding-right: 46px;
  border-bottom: ${({ theme }) => theme.styles.border};
`;

