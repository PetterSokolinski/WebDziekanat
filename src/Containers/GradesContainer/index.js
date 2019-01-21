import React, { Component } from 'react'
import ComponentsHeader from '../../Components/ComponentsHeader/index.js'
import { StyledContainer } from '../../Components/StyledContainer/index.js'
import GradesTable from '../../Components/GradesTable/index.js'
import OptionsGrades from '../../Components/OptionsGrades/index.js'

class GradesContainer extends Component {
  render() {
    return (
        <StyledContainer>
        <ComponentsHeader place="Grades" icon="pencil alternate"/>
        <OptionsGrades />
        <GradesTable />
        </StyledContainer>
    )
  }
}
export default GradesContainer