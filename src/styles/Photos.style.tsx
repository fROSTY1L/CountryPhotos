import styled from "styled-components";

const ImageWrap = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10%;
    object-fit: cover;
`

const CardWrap = styled.div`
    height: 43vh;
    border-radius: 30%;
`

const PhotosWrap = styled.div`
    width: 100%;
    padding-left: 5vw; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1vw;
    grid-row-gap: 3vh;
`
const PhotosHeaderWrap = styled.div`
    width: 100%;
    hight: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const PhotosTitle = styled.div`
    margin-left: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
`

const PhotosPagination = styled.div`

`

const PhotosGallery = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export { ImageWrap, PhotosWrap, CardWrap, PhotosGallery, PhotosHeaderWrap, PhotosTitle, PhotosPagination };
