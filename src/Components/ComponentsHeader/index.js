import React, { Component } from 'react'
import { Header, Icon, Image, Segment, Grid as SemanticGrid } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledSegment = styled.span`
  border: 0px solid white;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  @media (max-width: 768px) {
    text-align: center;
  }
`

const StyledSegment2 = styled.span`
  float: right;
  border: 0px solid white;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  @media (max-width: 768px) {
    text-align: center;
    float: none;
  }
`
const HeaderStyles = {
    border: "inherit",
    boxShadow: "inherit",
    float: "inherit"
  }
  

class ComponentsHeader extends Component {
    render() {
        const { place, icon } = this.props
        return (
            <SemanticGrid container columns={2} stackable>
          <SemanticGrid.Column>
            <StyledSegment>
            <Segment style={HeaderStyles}>
              <Header size='huge'>
              {place}
              <Icon name={icon}/>
              </Header>
            </Segment>
            </StyledSegment>
          </SemanticGrid.Column>
          <SemanticGrid.Column>
            <StyledSegment2>
            <Segment style={HeaderStyles}>
            <Header as='h4'>
                  <Image circular src='https://react.semantic-ui.com/images/avatar/large/patrick.png' />
                  Jesteś zalogowany jako: Piotr Sokoliński 
              </Header>
            </Segment>
            </StyledSegment2>
          </SemanticGrid.Column>
        </SemanticGrid>
        )
    }

}

export default ComponentsHeader