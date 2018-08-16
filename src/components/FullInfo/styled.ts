import styled, { css } from 'styled-components';

export type HeroTaleProps = {
  right?: boolean;
  noMargin?: boolean;
};

export const leftPolygon = css`
  clip-path: polygon(100% 50%, 100% 100%, 0 50%, 0 0);
`;
export const rightPolygon = css`
  clip-path: polygon(100% 0, 100% 50%, 0 100%, 0 50%);
`;

export const StyledWow = styled.div`
  background-color: #140e2a;
  width: 350px;
  display: grid;
  grid-template-columns: auto 1fr auto;
`;

export const HeroTale = styled.div`
  background-color: #8fcdaa;
  width: 50px;
  height: 100px;
  ${({ right }: HeroTaleProps) => right ? rightPolygon : leftPolygon}
  margin-bottom: ${({ noMargin }: HeroTaleProps) => noMargin ? 0 : '-45px'};
  background-size: cover;
  background-position: center center;
`;

export const HeroIndent = styled.div`
  height: 50px;
`;

export const Header = styled.div`
  width: calc(100% + 100px);
  height: 50px;
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
  justify-content: space-around;
  background-color: #44499e;
  /* background: linear-gradient(to right, #8fcdaa 25%,#e8708a 75%); */
  margin: 0 -50px;
`;
