import styled from 'styled';

export const FormHeader = styled.div`
  font-size: 1.125em;
  padding: 0 8px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const StyledMainForm = styled.div`
  display: grid;
  padding: 20px 30px 0 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 14px;
  grid-template-areas:
    "league type base"
    "name name name"
  ;
`;

export const StyledOffenseForm = styled.div`
  display: grid;
  padding: 20px 30px 0 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 14px;
  grid-template-areas:
    ". . ."
    "damage aps critStrike"
    "dps eDps pDps"
  ;
`;

export const StyledDefenseForm = styled.div`
  display: grid;
  padding: 20px 30px 0 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 14px;
  grid-template-areas:
    ". . ."
    "armour evasion shield"
    "block . ."
  ;
`;

export const StyledSocketsForm = styled.div`
  display: grid;
  padding: 20px 30px 0 16px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 14px;
  grid-template-areas:
    ". . ."
    "sockets links ."
    "colors linked ."
  ;
`;
export const StyledRequirementsForm = styled.div`
  display: grid;
  padding: 20px 30px 0 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-row-gap: 14px;
  grid-template-areas:
    ". . . ."
    "level strength dexterity intelligence"
  ;
`;

