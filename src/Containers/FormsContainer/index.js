import React, { Component } from 'react'
import ComponentsHeader from '../../Components/ComponentsHeader/index.js'
import { StyledContainer } from '../../Components/StyledContainer/index.js'
import MultiStep from '../../Components/MultiStep/index.js'
import StepOne from '../../Components/StepOne/index.js'
import StepTwo from '../../Components/StepTwo/index.js'
import StepThree from '../../Components/StepThree/index.js'
import StepFour from '../../Components/StepFour/index.js'
const steps = [
    {name: 'StepOne', component: <StepOne/>},
    {name: 'StepTwo', component: <StepTwo/>},
    {name: 'StepThree', component: <StepThree/>},
    {name: 'StepFour', component: <StepFour/>}
  ];


class FormsContainer extends Component {
  render() {
    return (
        <StyledContainer>
        <ComponentsHeader place="Forms" icon="wpforms"/>
        <MultiStep showNavigation={true} steps={steps}/>
        </StyledContainer>
    )
  }
}
export default FormsContainer