import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { SearchOutlined } from '@ant-design/icons';
import { RootState } from '../store';
import { setSelectedCountry } from '../store/SelectedCountryReducer';
import { InputWrap } from '../styles/Sidebar.style';

const CountryInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const country = useSelector((state: RootState) => state.selectedCountry.country);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSearch = () => {
    dispatch(setSelectedCountry(inputValue));
    console.log('Search:', country);
  };

  return (
    <InputWrap>
      <Input
        placeholder="Filter by name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button 
        type="primary" 
        onClick={onSearch}
        style={{padding: '10px', marginLeft: '7px'}}
        >
            <SearchOutlined />
        </Button>
    </InputWrap>
  );
};

export default CountryInput;
