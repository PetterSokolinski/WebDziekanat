import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'

const tags = [{  key: '1', value: '1', text: 'Grades' }, {  key: '2', value: '2', text: 'Tutions fee' }, {  key: '3', value: '3', text: 'Scholarship' }]

const StyledLabel = styled.label`
    font-weight: bold;
    left: 8px;
    position: relative;
    
`


const StepOne = () => (
  <Form>
    <Form.Group>
      <Form.Input label='First name' placeholder='Piotr' width={6} />
      <Form.Input label='Middle Name' placeholder='Mikołaj' width={4} />
      <Form.Input label='Last Name' placeholder='Sokoliński' width={6} />
    </Form.Group>
    <Form.Group>
    <StyledLabel htmlFor="drop">
        Choose your tags
    </StyledLabel>
    <Dropdown name="drop" placeholder='Tags...' fluid multiple selection options={tags} style={{margin: 8}}/>
    </Form.Group>
  </Form>
)

export default StepOne