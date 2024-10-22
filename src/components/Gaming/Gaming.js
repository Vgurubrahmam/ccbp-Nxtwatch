import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export const GameContainer = styled.div`
  padding-top: 80px;
  min-height: 90vh;
  min-width: 80vw;
  margin-left: 220px;

  background-color: ${props => (props.darkTheme ? '#000' : '#gray')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  color: #fff;

  @media (max-width: 767px) {
    margin-top: 0px;

    margin-left: 0;
    /* Keeping min-height and min-width same as in original */
  }
`

export const GamingBanner = styled.div`
  padding-left: 4%;
  background-color: #909090;
  height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  @media (max-width: 768px) {
    padding-left: 10px;

    margin-left: 0px;
  }
`
export const ProfileGaming = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  margin-right: 10px;
  width: 70px;
  border-radius: 50%;
  background-color: ${props => (props.darkTheme ? '#64748b' : '#000')};
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
export const GamesData = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
`
export const GameThumbnail = styled.img`
  height: 220px;
  width: 180px;
  margin: 10px;
`
export const Profile = styled.img`
  height: 30px;
`
export const GameVideoItem = styled.li`
  width: 280px;
  margin: 10px;
  list-style-type: none;
`
export const GameItemData = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`

export const GameDataContainer = styled.div`
  padding: 20px;
`
