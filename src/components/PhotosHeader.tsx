import React, { useEffect } from 'react'
import { PhotosHeaderWrap, PhotosPagination, PhotosTitle } from '../styles/Photos.style'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { Breadcrumb, BreadcrumbItemProps, Pagination } from 'antd';
import { addCountry, setSelectedCountry } from '../store/SelectedCountryReducer';
import { setPage } from '../store/PageReducer';


const PhotosHeader = () => {
    const dispatch = useDispatch();
    const selectedCountry = useSelector((state: RootState) => state.selectedCountry.selectedCountry);
    const countries = useSelector((state: RootState) => state.selectedCountry.countries);
    const currentPage = useSelector((state: RootState) => state.page.page);
    
    
    useEffect(() => {
        if (selectedCountry && !countries.includes(selectedCountry)) {
          dispatch(addCountry(selectedCountry));
        }
      }, [selectedCountry, dispatch, countries]);
    
      const handleClick = (item: string): void => {
        dispatch(setSelectedCountry(item));
      };
      const handlePageChange = (page: number): void => {
        dispatch(setPage(page));
      };

  return (
    <PhotosHeaderWrap>
      <PhotosTitle>
        <h1>{selectedCountry}</h1>
        <Breadcrumb
            separator='>'
            style={{marginTop: '-15px', paddingBottom: '10px', cursor: 'pointer', color: 'rgba(0, 0, 0, 0.45)'}}
            
        >
            { countries.map((country: string) => (
                <Breadcrumb.Item onClick={() => handleClick(country)}>{country}</Breadcrumb.Item>
            ))}
        </Breadcrumb>
      </PhotosTitle>
      <PhotosPagination>
            <Pagination 
            defaultCurrent={1} 
            total={50} 
            current={currentPage} 
            onChange={handlePageChange}/>
      </PhotosPagination>
    </PhotosHeaderWrap>
  )
}

export default PhotosHeader
