import React, { Component } from 'react'
import { Table, Header } from 'semantic-ui-react'

const HeaderStyles = {
    color: "white"
}

class TableInformation extends Component {
  render() {
      const { information, header } = this.props
    return (
        <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><Header as='h3' style={HeaderStyles}>{header}</Header></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {information.map(function(info){
                    return <Table.Row>
                    <Table.Cell>{info}</Table.Cell>
      </Table.Row>
                  })}
    </Table.Body>
  </Table>
    )
  }
}
export default TableInformation