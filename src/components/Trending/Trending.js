import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export const TrendingContainer = styled.div`
  padding-left: 220px;
  padding-top: 80px;
  background-color: ${props => (props.darkTheme ? '#000' : '#f4f4f4')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    margin-top: 0px;

    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0;

    min-height: 100vh;
    margin-bottom: 0px;
  }
  @media (max-width: 768px) {
    margin-top: 0px;

    margin-left: 0px;
    padding-left: 0;
    min-height: 100vh;
    margin-right: 0px;
  }
`
export const TrendingBanner = styled.div`
  padding-left: 4%;
  background-color: #131213;
  height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    padding-left: 10px;

    margin-left: 0px;
  }
`
export const ProfileTrending = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-right: 10px;
  width: 70px;
  border-radius: 50%;
  background-color: ${props => (props.darkTheme ? '#64748b' : '#000')};
`
export const TrendingDataList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  
  }
 
`
export const TrendingList = styled.li`
  display: flex;
  justify-content: center; /* Center content vertically */
  align-items: flex-start; /* Center content horizontally */
  gap: 35px; /* Adjust the gap as needed */
  width: 100%; /* Optional: set the width to 100% for full-width alignment */
  margin-bottom: 20px; /* Optional: add margin for spacing between items */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 35px;
    width: 100%;
    margin-bottom: 20px;
  }
`

export const Thumbnail = styled.img`
  height: 180px;
  width: 330px;
`
