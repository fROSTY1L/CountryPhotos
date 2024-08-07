import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Menu } from 'antd'
import { SidebarWrap }  from '../styles/Sidebar.style'
import CountrySelectMenu from './CountrySelectMenu'
import CountryInput from './CountryInput'


const Sidebar = () => {
    const collapse = useSelector((state: RootState) => state.collapse.collapse)
  return (
    <SidebarWrap style={{display: collapse ? 'block' : 'none'}}>
      <CountryInput/>
      <CountrySelectMenu/>
    </SidebarWrap>
  )
}

export default Sidebar
