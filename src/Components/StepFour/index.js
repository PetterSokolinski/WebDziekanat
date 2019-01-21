import React from 'react'
import { Form, Checkbox, Button, TransitionablePortal, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import RadioForm from '../RadioForm/index.js'

const ButtonCloseStyles = {
    position: "relative",
    top: "100px",
    left: "50%",
    transform: "translateX(-50%)"
}

const ButtonStyles = {
    float: "right",
    position: "relative",
    right: "100px",
    top: "10px"
}
class StepFour extends React.Component {
    state = { open: false, buttonONorOF: false }

    handleClick = () => this.setState({ open: !this.state.open })
  
    handleClose = () => this.setState({ open: false })

    refreshPage = () => { 
        window.location.reload(); 
    }
    render() {
        const { open, buttonONorOF } = this.state
        return(
            <React.Fragment>
            <Form style={{marginBottom: 10}}>
            <Form.Field
            onChange={() => {
                this.setState({ buttonONorOF: !buttonONorOF })  
            }} 
            
            control={Checkbox} label={{ children: 'I agree to the Terms and Conditions of Lodz University of Technology' }} />
            <RadioForm />
            {buttonONorOF ?
            <Button
                content={'Submit clamor'}
                positive={true}
                onClick={this.handleClick}
                style={ButtonStyles}
                /> :
                <Button content={'Submit clamor'} disabled style={ButtonStyles} positive={true}/>
            }
            </Form>
             <TransitionablePortal onClose={this.handleClose} open={open}>
             <Segment style={{ left: '40%', position: 'fixed', top: '25%', zIndex: 1000, height: 250, width: 250 }}>
             <p>Your clamor will be investigated!</p> <p>Thank you for reporting your problems.</p>
             <Link to="/home" refresh="true">
             <Button
                content={'Close and quit'}
                onClick={this.handleClose && this.refreshPage}
                style={ButtonCloseStyles}
            />
            </Link>
             </Segment>
           </TransitionablePortal>
           </React.Fragment>
        )
    }

}

export default StepFour