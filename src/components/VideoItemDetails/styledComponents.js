// styledComponents.js
import styled from 'styled-components'

export const VideoContainer = styled.div`
  margin-bottom: 10px;
  height: 100vh;
  padding-top: 80px;
  padding-left: 220px;
  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    width: calc(100% - 40px);
    padding-left: 0;
    padding-top: 80px;

    height: 30vh;
  }

  @media (max-width: 480px) {
    margin-left: 10px;
    margin-right: 10px;
    width: calc(100% - 20px);
    padding-left: 0;
    padding-top: 80px;

    height: 30vh;
    margin-bottom: 10px;
  }
`
export const ParentContainer = styled.div`
  padding-left: 220px;
  background-color: ${props => (props.darkTheme ? '#000' : '#f4f4f4')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: 480px) {
    margin-top: 0px;

    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0;

    height: 100vh;
    margin-bottom: 0px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;

    margin-left: 0px;
    padding-left: 0;

    margin-right: 0px;
    height: 100vh;
  }
`
export const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;

  display: flex;
  justifycontent: center;
  alignitems: flex-end;
`
export const AboutVideoCon = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  padding-left: 220px;
  justifycontent: space-between;
  gap: 5px;
  @media (max-width: 768px) {
    display: flex;
    padding-left: 10px;
    flex-direction: column;
    justifycontent: start;
    align-items: flex-start;
    gap: 20px;
  }
`
export const Profile = styled.img`
  height: 40px;
`
export const VideoItemData = styled.div`
  margin-top: 20px;
  display: flex;
  padding-left: 220px;
  justify-content: start;
  align-items: flex-start;
  gap: 15px;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`
export const VideoTitle = styled.p`
  color: ${({darkTheme}) => (darkTheme ? '#fff' : '#000')};
  margin-left: 220px;
  margin-top: 10px;
  font-weight: 500;
  @media (max-width: 480px) {
    margin-left: 10px;
    margin-top: 10px;
  }
`
export const VideoDescription = styled.p`
  color: ${({darkTheme}) => (darkTheme ? '#fff' : '#000')};
  margin-left: 220px;
  margin-top: 10px;
  @media (max-width: 768px) {
    margin-left: 10px;
    margin-top: 10px;
  }
`
export const RetryBtn = styled.button`
  padding: 10px;
  background-color: #3b82f6;
  border: none;
  color: #fff;
`
export const Errorimg = styled.img`
  height: 300px;
`
