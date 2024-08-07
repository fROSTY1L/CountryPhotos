import React, { useState } from 'react'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { HeaderTitle, HeaderWrap, MenuButton } from '../styles/Header.style'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setCollapse } from '../store/CollapseReducer';

export default function Header() {
    const dispatch = useDispatch()
    const collapse = useSelector((state: RootState) => state.collapse.collapse)

  const toggleCollapsed = () => {
    dispatch(setCollapse(!collapse));
  };
  
  return (
    <>
    <MenuButton className="unselectable" onClick={toggleCollapsed}>
        {collapse ? <CloseOutlined /> : <MenuOutlined /> }
    </MenuButton>
    <HeaderWrap>
        <HeaderTitle className="unselectable">Country Photos</HeaderTitle> 
    </HeaderWrap>
    </>
  )
}
