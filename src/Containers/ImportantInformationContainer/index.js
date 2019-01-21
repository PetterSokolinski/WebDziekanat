import React, { Component } from 'react'
import ComponentsHeader from '../../Components/ComponentsHeader/index.js'
import { StyledContainer } from '../../Components/StyledContainer/index.js'
import TableInformation from '../../Components/TableInformation/index.js';

const info1 = ['Status of Lodz University of Technology']
const info2 = ['Regulaminy Studiów w Politechnice Łódzkiej dla Studentów', 'Regulaminy Studiów w Politechnice Łódzkiej dla Doktorantów']
const info3 = ['Zarządzenia Rektora Nr 15/2010 w sprawie zasad organizacji i korzystania z poczty elektronicznej']
const info4 = ['Pomoc materialna dla studentów', 'Pomoc materialna dla doktorantów']
const info5 = ['Studenci- opłaty za usługi edukacyjne']
const info6 = ['Urlop okolicznościowy', 'Rejestracja po urlopie', 'Egzamin komisyjny', 'Powtarzanie semestru', 'Indywidualna organizacja studiów', 'Indywidualny plan studiów', 'Awans']


class ImportantInformationContainer extends Component {
  render() {
    return (
        <StyledContainer>
        <ComponentsHeader place="Important Infromation" icon="info"/>
        <TableInformation header="State of Uniersity" information={info1}/>
        <TableInformation header="Regulations" information={info2}/>    
        <TableInformation header="Ordinance" information={info3}/>    
        <TableInformation header="Material support" information={info4}/>
        <TableInformation header="Tuition fees" information={info5}/>    
        <TableInformation header="Application forms" information={info6}/> 
      
        </StyledContainer>
    )
  }
}
export default ImportantInformationContainer