import React from 'react'
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const StyledHeader = styled.header`
    text-align: center;
    color: black;
    font-size: 60px;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
`

const LoginStyles = {
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  width: "500px"
}

const LoginForm = () => (
  <React.Fragment>
  <StyledHeader textAlign='center'>WebDziekanat</StyledHeader>
  <div className='login-form' style={LoginStyles}>
    {}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 600 }}>
        <Header as='h2' color='teal' textAlign='center'>
          <Image src={require('../../Assets/webdziekanat.png')} style={{ width: 100 }}/> Login to your account
        </Header>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Link to="/home">
                <Button color='teal' fluid size='large'>
                Login
                </Button>
            </Link>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  </div>
  </React.Fragment>
)

export default LoginForm