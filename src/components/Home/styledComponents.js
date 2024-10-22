import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

export const HomeContainer = styled.div`
  min-height: 90vh;
  min-width: 80vw;
  margin-left: 220px;
  padding-top: 80px;

  background-color: ${props => (props.darkTheme ? '#000' : '#gray')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  color: #fff;

  @media (max-width: 767px) {
    padding-top: 0px;
    margin-left: 0;
    /* Keeping min-height and min-width same as in original */
  }
`
export const BannerImage = styled.div`

height:200px;
width:100%;
font-size:20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
`
export const BannerImageContainer = styled.div`
  height: 200px;
  width: 100%;
  background: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #475569;
  font-weight: 500;

  font-family: 'roboto';
  padding-left: 30px;
  padding-right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const WebsiteLogo = styled.img`
  height: 30px;

  @media (max-width: 767px) {
    height: 30px;
    margin-left: 0;
  }
`
export const GetItNow = styled.button`
  padding: 10px;
  font-weight: 600;
  background-color: transparent;

  border: 2px solid balck;
`
export const HomeDataContainer = styled.div`
  padding: 20px;
`
export const SearchCon = styled.div`
  border: 2px solid gray;
  width: 40%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  @media (max-width: 767px) {
    width: 90%;
  }
`

export const SearchInput = styled.input`
  width: 90%;
  height: 30px;
  border: none;
  outline: none;
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
`
export const VideosData = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
`
export const Thumbnail = styled.img`
  height: 150px;
  width: 280px;
  margin: 10px;
`
export const Profile = styled.img`
  height: 30px;
`
export const EachVideoItem = styled.li`
  width: 280px;
  margin: 10px;
  list-style-type: none;
`
export const VideoItemData = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`
export const Errorimage = styled.img`
  height: 300px;
`
export const RetryBtn = styled.button`
  padding: 10px;
  background-color: #3b82f6;
  color: #fff;
`
export const BannerRemove = styled.button`
  background-color: transparent;
  border: none;
`
