import React from 'react'
import { Header, Table } from 'semantic-ui-react'

class GradesTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { width } = this.state
    return (
      <Table celled padded>
    <Table.Header>
      <Table.Row textAlign={width < 768 ? 'center' : 'left'}>
        <Table.HeaderCell singleLine>Grade</Table.HeaderCell>
        <Table.HeaderCell>Subject</Table.HeaderCell>
        <Table.HeaderCell>Lecturer</Table.HeaderCell>
        <Table.HeaderCell>Semester</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row positive>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            5
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Math</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Krzysztof Kowalski
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            2
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Programming</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Radek Nowak
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            5
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Math</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Krzysztof Kowalski
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            2
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Programming</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Radek Nowak
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            5
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Math</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Krzysztof Kowalski
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            2
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Programming</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Radek Nowak
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            5
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Math</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Krzysztof Kowalski
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            2
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Programming</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Radek Nowak
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            5
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Math</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Krzysztof Kowalski
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell>
          <Header as='h2' textAlign='center'>
            2
          </Header>
        </Table.Cell>
        <Table.Cell singleLine textAlign={width < 768 ? 'center' : 'left'}>Programming</Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
          Radek Nowak
        </Table.Cell>
        <Table.Cell textAlign='center'>
          5
        </Table.Cell>
        <Table.Cell textAlign={width < 768 ? 'center' : 'left'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
    )
  }
}

export default GradesTable
