import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Menu } from 'antd'
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons'

const Sidebar = () => {
    const collapse = useSelector((state: RootState) => state.collapse.collapse)
  return (
    <div style={{width: '250px'}}>
      <Menu
        mode="inline"
        theme="light"
        inlineCollapsed={collapse}
        items={[{ key: '1', label: 'Option 1' },
            { key: '2', label: 'Option 2' }]}
        
      />
    </div>
  )
}

export default Sidebar
