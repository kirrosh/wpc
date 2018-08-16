import React from 'react';
import styled  from 'styled-components';
import { HeroTale, StyledWow, Header, HeroIndent, MidContent, MidText } from './styled';


export default class FullInfo extends React.PureComponent {
  render() {
    return (
      <>
      <StyledWow>
        <div>
          <HeroTale/>
          <HeroTale/>
          <HeroTale/>
          <HeroTale/>
          <HeroTale/>
          <HeroIndent/>
          <HeroTale/>
          <HeroTale/>
          <HeroTale/>
          <HeroTale/>
          <HeroTale noMargin={true}/>
        </div>
        <div>
          <Header>
            <MidText>LGD</MidText>
            <MidText>-</MidText>
            <MidText>VP</MidText>
          </Header>
          <MidContent>
            <MidText>32</MidText>
            <MidText>-</MidText>
            <MidText>12</MidText>
          </MidContent>
        </div>
        <div>
          <HeroTale right={true}/>
          <HeroTale right={true}/>
          <HeroTale right={true}/>
          <HeroTale right={true}/>
          <HeroTale right={true}/>
          <HeroIndent/>
          <HeroTale right={true}/>
          <HeroTale right={true}/>
          <HeroTale right={true}/>
          <HeroTale right={true}/>
          <HeroTale right={true} noMargin={true}/>
        </div>
      </StyledWow>
      </>
    );
  }
}
