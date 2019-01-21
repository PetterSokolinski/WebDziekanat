import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledLabel = styled.label`
    font-weight: bold;
    left: 8px;
    position: relative;
`

const StepThree = () => (
    <Form>
        <StyledLabel htmlFor="area">
        Describe your problem
        </StyledLabel>
        <TextArea name="area" style={{ minHeight: 200 }} />
    </Form>
)

export default StepThree