import React, { useEffect } from 'react';
import { PhotosHeaderWrap, PhotosPagination, PhotosTitle } from '../styles/Photos.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Breadcrumb, Pagination } from 'antd';
import { addCountry, setSelectedCountry } from '../store/SelectedCountryReducer';
import { setPage } from '../store/PageReducer';

const PhotosHeader = () => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state: RootState) => state.selectedCountry.selectedCountry);
  const countries = useSelector((state: RootState) => state.selectedCountry.countries);
  const currentPage = useSelector((state: RootState) => state.page.page);
  const numberOfPages = useSelector((state: RootState) => state.numberOfPages.numberOfPages);
  
  useEffect(() => {
    if (selectedCountry && !countries.includes(selectedCountry)) {
      dispatch(addCountry(selectedCountry));
    }
  }, [selectedCountry, dispatch, countries]);
  
  useEffect(() => {
    dispatch(setPage(1))
  }, [selectedCountry])

  const handleClick = (item: string): void => {
    dispatch(setSelectedCountry(item));
  };

  const handlePageChange = (page: number): void => {
    console.log("Selected Page:", page);
    dispatch(setPage(page)); 
    console.log("Updated Current Page (after dispatch):", page);
  };
  
 
  let displayedCountries = countries.slice(-3);
  
  
  if (countries.length > 3) {
    displayedCountries = ["..."].concat(displayedCountries.slice(1));
  }

  return (
    <PhotosHeaderWrap>
      <PhotosTitle>
        <h1>{selectedCountry}</h1>
        <Breadcrumb
          separator='>'
          style={{ marginTop: '-15px', paddingBottom: '10px', cursor: 'pointer', color: 'rgba(0, 0, 0, 0.45)' }}
        >
          {displayedCountries.map((country: string, index: number) => (
            <Breadcrumb.Item
              key={index}
              onClick={() => country !== "..." && handleClick(country)}
            >
              {country}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </PhotosTitle>
      <PhotosPagination>
        <Pagination
          total={numberOfPages * 10} 
          current={currentPage} 
          onChange={handlePageChange} 
        />
      </PhotosPagination>
    </PhotosHeaderWrap>
  );
};

export default PhotosHeader;
