import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardWrap, ImageWrap, PhotosGallery, PhotosWrap } from '../styles/Photos.style';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import PhotosHeader from './PhotosHeader';

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

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://api.pexels.com/v1/curated?page=' + currentPage + '&per_page=6', {
          headers: {
            Authorization: 'UONEHDhDhOqxKVgffYN1OfDr5YndUXyN0pFPNdpI91CjFMKV6VJxAdbk'
          }
        });
        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Ошибка при загрузке фотографий:', error);
      }
    };

    fetchPhotos();
  }, [currentPage]);

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
