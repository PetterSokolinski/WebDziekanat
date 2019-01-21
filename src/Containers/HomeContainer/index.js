import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Segment } from 'semantic-ui-react'
import NewsCard from '../../Components/NewsCard/index.js'
import ComponentsHeader from '../../Components/ComponentsHeader/index.js'
import { StyledContainer } from '../../Components/StyledContainer/index.js'

const StyledSegment = {
  border: "0px solid white",
  boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)",
}

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { width } = this.state
    const columnWidth = width < 768 ? null : 1100
    return (
      <StyledContainer>
        <ComponentsHeader place="News" icon="home" />
          <Grid container stackable columns={2}>
          <Grid.Column>
            <Segment style={StyledSegment}>
            <NewsCard width={width < 768 ? null : 500} description="Lorem Ipsum" extra="Important" title="Lorem Ipsum" news="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></NewsCard>
            </Segment>
            </Grid.Column>
            <Grid.Column>
            <Segment style={StyledSegment}>
              <NewsCard width={width < 768 ? null : 600} description="Lorem Ipsum" extra="Important" title="Lorem Ipsum" news="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></NewsCard>
            </Segment>
            </Grid.Column>
            <Grid.Column style={{width: columnWidth}}>
            <Segment style={StyledSegment}>
            <NewsCard width={width < 768 ? null : 1100} description="Lorem Ipsum" extra="Important" title="Lorem Ipsum" news="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></NewsCard>
            </Segment>
            </Grid.Column>
          </Grid> 
         
      </StyledContainer>
    )
  }
}
export default HomeContainer