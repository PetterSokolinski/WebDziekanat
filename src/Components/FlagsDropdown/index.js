import React from 'react'
import { Dropdown } from 'semantic-ui-react'
const languageOptions = [ { key: 'Polish', text: 'Polish', value: 'Polish', flag: 'pl' }, { key: 'English', text: 'English', value: 'English', flag: 'gb' } ]

const DropdownStyles = {
  zIndex: "100" 
}
const FlagsDropdown = () => (
  <Dropdown
    style={DropdownStyles}
    button
    className='icon'
    floating
    labeled
    icon='world'
    options={languageOptions}
    selection
    placeholder="Polish"
  />
)

export default FlagsDropdown