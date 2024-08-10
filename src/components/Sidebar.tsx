import { useSelector } from 'react-redux'
import { RootState } from '../store'
import { Menu } from 'antd'
import { SidebarWrap }  from '../styles/Sidebar.style'
import AllCountries from './AllCountries'
import CountryInput from './CountryInput'
import SelectedCountries from './SelectedCountries'


const Sidebar = () => {
    const collapse = useSelector((state: RootState) => state.collapse.collapse)
    const country = useSelector((state: RootState) => state.inputCountry.country);
  return (
    <SidebarWrap style={{display: collapse ? 'block' : 'none'}}>
      <CountryInput/>
      {country == '' ? <AllCountries/> : <SelectedCountries/>}
    </SidebarWrap>
  )
}

export default Sidebar
