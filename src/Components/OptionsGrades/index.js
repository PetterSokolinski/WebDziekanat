import React from 'react'
import { Dropdown, Label } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Semester 1', value: 1 },
  { key: 2, text: 'Semester 2', value: 2 },
  { key: 3, text: 'Semester 3', value: 3 },
  { key: 4, text: 'Semester 4', value: 4 },
  { key: 5, text: 'Semester 5', value: 5 }
]

const DropdownSemester = () => <Dropdown options={options} selection placeholder="Semester 5"/>

const LabelAverage = (props) => (
  <Label size="big" color={props.color}>
    {props.message} 
    <Label.Detail>{props.value}</Label.Detail>
  </Label>
)
class OptionsGrades extends React.Component {

    render() {
        return (
            <React.Fragment>
            <DropdownSemester />
            <LabelAverage message="Average:" value={4.14} color="green" />
            <LabelAverage message="ETCS points:" value="30/30" color="green" />
            <LabelAverage message="Card is passed:" value="No" color="red" />
            <LabelAverage message="Index on time:" value="No" color="red" />
            </React.Fragment>
        )
    }


}


export default OptionsGrades