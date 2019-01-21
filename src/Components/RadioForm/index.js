import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

class RadioForm extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          I prefer to get an aswer by: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='e-mail'
            name='radioGroup'
            value='e-mail'
            checked={this.state.value === 'e-mail'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='post'
            name='radioGroup'
            value='post'
            checked={this.state.value === 'post'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}

export default RadioForm