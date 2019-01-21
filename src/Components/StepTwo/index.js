import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react'
import styled from 'styled-components'

const options = [
    { key: 1, text: 'Not very important', value: 1 },
    { key: 2, text: 'Important', value: 2 },
    { key: 3, text: 'Very important', value: 3 },
]


const StyledLabel = styled.label`
    font-weight: bold;
    left: 8px;
    position: relative;
`

const StyledDropdown = styled.div`
  left: 50px;
  position: relative;
  @media (max-width: 768px) {
    left: 8px;
  }
`

const StepTwo = () => (
  <Form>
    <Form.Group>
      <Form.Input label='Type your topic' placeholder='Topic...' width={16} />
    </Form.Group>
    <Form.Group>
    <StyledLabel htmlFor="drop">
    How important issue do you want to report?
    </StyledLabel>
    <StyledDropdown>
      <Dropdown name="drop" clearable options={options} selection/>
    </StyledDropdown>
    </Form.Group>
  </Form>
)

export default StepTwo