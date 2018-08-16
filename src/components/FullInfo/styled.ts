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
  font-family: "Source Sans Pro", sans-serif;
`;

export const HeroTale = styled.div`
  /* background-color: #8fcdaa; */
  background: linear-gradient(15deg, #8fcdaa 0%,rgba(0,0,0,0) 100%);
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
  width: 350px;
  clip-path: polygon(0 0, 100% 0, 300px 100%, 50px 100%);
  background: linear-gradient(45deg, rgba(240,183,161,0) 0%,rgba(68,73,158,1) 50%,rgba(68,73,158,1) 51%,rgba(191,110,78,0) 100%);
  height: 50px;
  display: grid;
  grid-template-columns: 40% 20% 40%;
  grid-template-rows: 100%;
  align-content: center;
  justify-content: space-around;
  /* background-color: #44499e; */
  /* background: linear-gradient(to right, #8fcdaa 25%,#e8708a 75%); */
  margin: 0 -50px;
`;

export const MidContent = styled.div`
  width: calc(100% - 2px);
  /* border: 1px solid #f9f9f9; */
  height: 48px;
  margin-bottom: 5px;
  display: grid;
  grid-template-columns: 40% 20% 40%;
  grid-template-rows: 100%;
  align-content: center;
  justify-content: space-around;
`;

export const MidText = styled.div`
  /* background-color: #8fcdaa; */
  color: #8fcdaa;
  display: flex;
  align-items: center;
  justify-content: center;
`;
