import React, { Component } from 'react'
import { Icon, Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import FlagsDropdown from '../FlagsDropdown/index.js'

class HeaderMenu extends Component {
  render() {
    const { location } = this.props
    return (
      <React.Fragment>
        { location.pathname !== '/' &&
      <Menu stackable>
        <a href="https://virtul.p.lodz.pl/">
          <Menu.Item
            name='Virtul' 
          >
            <Icon name='student' />
            Virtul
          </Menu.Item>
        </a>
        <a href="https://virtul.p.lodz.pl/">
          <Menu.Item
            name='Wikamp'
          >
            <Icon name='users' />
            Wikamp
          </Menu.Item>
        </a>
        <a href="https://cas.p.lodz.pl/cas/login?service=https://virtul.p.lodz.pl/spe">
          <Menu.Item
            name='Zimbra'
          >
            <Icon name='mail' />
            Zimbra
          </Menu.Item>
        </a>
        <Menu.Menu position='right'>
        <Menu.Item>
            <FlagsDropdown />
        </Menu.Item>
        <Link to='/'>
          <Menu.Item 
            name='Logout'
          />
        </Link>
        </Menu.Menu>
        </Menu> }
      </React.Fragment>
    )
  }
}

export default HeaderMenu