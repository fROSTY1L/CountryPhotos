import { Menu } from 'antd'
import React from 'react'

const CountrySelectMenu = () => {
  return (
    <Menu
        className='unselectable'
        mode="inline"
        theme="light"
        style={{border: 'none'}}
        items={[{ key: '1', label: 'Option 1' },
            { key: '2', label: 'Option 2' }]}
        
      />
  )
}

export default CountrySelectMenu
