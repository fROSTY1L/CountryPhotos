import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardWrap, ImageWrap, PhotosGallery, PhotosWrap } from '../styles/Photos.style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import PhotosHeader from './PhotosHeader';
import { setNumberOfPages } from '../store/NumberOfPagesReducer';

interface Photo {
    id: number,
    url: string,
    photographer: string,
    src: {
        original: string,
        medium: string
    }
}

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const currentPage = useSelector((state: RootState) => state.page.page);
  const selectedCountry = useSelector((state: RootState) => state.selectedCountry.selectedCountry);
  const numberOfPages = useSelector((state: RootState) => state.page.numberOfPages)
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
        
        // Обновляем состояние с фотографиями
        setPhotos(firstResponse.photos);
        
      } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
      }
    };
    
    fetchPhotos();
  }, [currentPage, selectedCountry, dispatch]);
  return ( 
    <PhotosGallery>
      <PhotosHeader/>
        <PhotosWrap>
          {photos.map((photo: Photo) => (
              <CardWrap>
                  <ImageWrap key={photo.id} src={photo.src.original} alt={photo.photographer} />
              </CardWrap>
          ))}
        </PhotosWrap>
      </PhotosGallery>
  );
};

export default Photos;
