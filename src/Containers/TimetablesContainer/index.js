import React, { Component } from 'react'
import ComponentsHeader from '../../Components/ComponentsHeader/index.js'
import { StyledContainer } from '../../Components/StyledContainer/index.js'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class TimetablesContainer extends Component {
  render() {
    return (
        <StyledContainer>
        <ComponentsHeader place="Timetables" icon="calendar alternate"/>
        <Carousel dynamicHeight={true}>
                <div>
                    <img src={require('../../Assets/Plan.png')} />
                    <p className="legend">Computer Science Timetable</p>
                </div>
                <div>
                    <img src={require('../../Assets/Plan.png')} />
                    <p className="legend">Computer Science Timetable</p>
                </div>
                <div>
                    <img src={require('../../Assets/Plan.png')} />
                    <p className="legend">Computer Science Timetable</p>
                </div>
            </Carousel>
        </StyledContainer>
    )
  }
}
export default TimetablesContainer