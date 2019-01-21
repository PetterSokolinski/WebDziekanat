import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Icon } from 'semantic-ui-react'
import styled from 'styled-components'
var SidebarStyles = {
    top: '50px',
    height: "180%"
}

const StyledSidebar = styled.div`
    @media (max-width: 768px) {
        top: 160px;
        position: absolute;
        height: "auto";
    }
`

const StyledBack = {
    background: "#db3d44"
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0,  expanded: false };
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
        const { location, history } = this.props
        const { expanded, width } = this.state
        return(
            <StyledSidebar>
            { location.pathname !== '/' &&
            <SideNav expanded={expanded}
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                    this.setState({ expanded: false })  
                }}
                style={SidebarStyles}
            >   { width < 768 ? null :
                <SideNav.Toggle onClick={() => {
                    this.setState({ expanded: !expanded })  
                }} />
                }
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home" style={StyledBack}>
                        <NavIcon>
                            <Icon name="home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="timetables" style={StyledBack}>
                        <NavIcon>
                            <Icon className="calendar alternate" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Timetables
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="grades" style={StyledBack}>
                        <NavIcon>
                            <Icon className="pencil alternate" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Grades
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="forms" style={StyledBack}>
                        <NavIcon>
                            <Icon className="wpforms" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Forms
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="importantinfo" style={StyledBack}>
                        <NavIcon>
                            <Icon className="info" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Important Information
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="personaldata" style={StyledBack}>
                        <NavIcon>
                            <Icon className="user" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Personal Data
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            }
            </StyledSidebar>
        )
    }
}

export default Sidebar