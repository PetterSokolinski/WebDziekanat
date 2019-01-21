import React, { Component } from 'react'
import { Image, Segment, Grid } from 'semantic-ui-react'
import ComponentsHeader from '../../Components/ComponentsHeader/index.js'
import { StyledContainer } from '../../Components/StyledContainer/index.js'
import styled from 'styled-components'

const StyledInfo = styled.span`
    float: right;
    font-size: 22px;
    font-weight: bold;
`

class PersonalDataContainer extends Component {
  render() {
    return (
        <StyledContainer>
        <ComponentsHeader place="Personal Data" icon="user"/>
        <Grid container columns={2} stackable>
      <Grid.Column>
        <Segment>Name:<StyledInfo>Piotr</StyledInfo></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Surname:<StyledInfo>Sokoliński</StyledInfo></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Department:<StyledInfo>IFE</StyledInfo></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Faculty:<StyledInfo>Computer Science</StyledInfo></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Semester:<StyledInfo>5</StyledInfo></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>PESEL:<StyledInfo>97013111115</StyledInfo></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Date of birth:<StyledInfo>31.01.1997</StyledInfo></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Place of birth:<StyledInfo>Lodz</StyledInfo></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
            <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" />
        </Segment>
      </Grid.Column>
    </Grid>
        </StyledContainer>
    )
  }
}
export default PersonalDataContainer