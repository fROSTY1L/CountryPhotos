import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardDownloadButton, CardFooter, CardTitle, CardWrap, ImageWrap, PhotosGallery, PhotosWrap } from '../styles/Photos.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import PhotosHeader from './PhotosHeader';
import { setNumberOfPages } from '../store/NumberOfPagesReducer';
import ModalDownload from './ModalDownload';
import { setSelectedPhoto } from '../store/SelectedPhotoReducer';
import { Photo } from '../types/types';


const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const currentPage = useSelector((state: RootState) => state.page.page);
  const selectedCountry = useSelector((state: RootState) => state.selectedCountry.selectedCountry);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        
        const { data: secondResponse } = await axios.get(
          `https://api.pexels.com/v1/search?query=${selectedCountry}`, {
          headers: {
            Authorization: 'UONEHDhDhOqxKVgffYN1OfDr5YndUXyN0pFPNdpI91CjFMKV6VJxAdbk'
          }
        });
        
        dispatch(setNumberOfPages(Math.ceil(secondResponse.total_results / 6)));
        
        
        const { data: firstResponse } = await axios.get(
          `https://api.pexels.com/v1/search?query=${selectedCountry}&page=${currentPage}&per_page=6`, {
          headers: {
            Authorization: 'UONEHDhDhOqxKVgffYN1OfDr5YndUXyN0pFPNdpI91CjFMKV6VJxAdbk'
          }
        });
        
        
        setPhotos(firstResponse.photos);
        
      } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
      }
    };
    
    fetchPhotos();
  }, [currentPage, selectedCountry, dispatch]);

  const handleClick = (id: string) => (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    dispatch(setSelectedPhoto(id));
  };
  
  return ( 
    <PhotosGallery>
      <PhotosHeader/>
        <PhotosWrap>
          {photos.map((photo: Photo) => (
              <CardWrap>
                  <ImageWrap key={photo.id} src={photo.src.medium} alt={photo.photographer}/>
                  <CardFooter>
                    <CardTitle>{photo.photographer}</CardTitle>
                    <CardDownloadButton onClick={handleClick(String(photo.id))}>
                      <ModalDownload/>
                      </CardDownloadButton>
                  </CardFooter>
                  
              </CardWrap>
          ))}
        </PhotosWrap>
      </PhotosGallery>
  );
};

export default Photos;
