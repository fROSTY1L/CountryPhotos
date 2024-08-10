import styled from "styled-components";

const ImageWrap = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5%;
    object-fit: cover;
    display: block;
`;

const CardWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0 1 calc(30% - 3vh);
    margin: 0 3vh 3vh 3vh; 
    box-sizing: border-box;
    position: relative; 
    height: 37vh;
    border-radius: 30%;
    font-family: Noto Sans SC;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
`;

const CardFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5vh;
    box-sizing: border-box;
`;

const CardTitle = styled.div`
    font-family: Noto Sans SC;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px;
    text-align: left;
`;

const CardDownloadButton = styled.div`

`;

const PhotosWrap = styled.div`
    width: 90%;
    margin-left: 8.5vw;
    display: flex;
    flex-wrap: wrap; 
    justify-content: start;
`;

const PhotosHeaderWrap = styled.div`
    width: 100%;
    height: 18%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PhotosTitle = styled.div`
    overflow: hidden;
    margin-left: 3vw;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

const PhotosPagination = styled.div``;

const PhotosGallery = styled.div`
    display: flex;
    width: 100%;
    height: 90%;
    flex-direction: column;
    align-items: center;
`;

export {
  ImageWrap,
  PhotosWrap,
  CardWrap,
  PhotosGallery,
  PhotosHeaderWrap,
  PhotosTitle,
  PhotosPagination,
  CardTitle,
  CardDownloadButton,
  CardFooter,
};
