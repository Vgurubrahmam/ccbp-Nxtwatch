import Cookies from 'js-cookie'
import {useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import {FaFire} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import ContextRoute from '../../context/ContextRoute'
import DesktopSidebar from '../Sidebar'
import Header from '../Header'
import {
  GameContainer,
  GamingBanner,
  ProfileGaming,
  GameDataContainer,
  GamesData,
  GameVideoItem,
  GameThumbnail,
  GameItemData,
  Errorimg,
  RetryBtn,
} from './Gaming'

const Gaming = () => {
  const token = Cookies.get('jwt_token')
  const [isLoading, setIsLoading] = useState(true)
  const [gamingData, setGamingData] = useState([])
  const [fetchError, setFetchError] = useState(false)

  const getVideosData = async () => {
    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()

      if (response.ok) {
        if (Array.isArray(data.videos)) {
          setGamingData(data.videos)
          setIsLoading(false)
        } else {
          console.error('Expected videos to be an array:', data)
          setFetchError(true)
        }
      } else {
        console.error('Failed to fetch videos', response.status)
        setFetchError(true)
      }
    } catch (err) {
      console.error('Error fetching videos:', err)
      setFetchError(true)
    }
  }

  useEffect(() => {
    getVideosData()
  }, [])

  const renderContent = darkTheme => {
    if (isLoading) {
      return (
        <div
          className="loader-container"
          data-testid="loader"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100vh',
          }}
        >
          <Loader type="ThreeDots" color="#64748b" height="50" width="50" />
        </div>
      )
    }
    if (fetchError) {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Errorimg
            src={
              darkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            }
          />
          <h3>Oops! Something Went Wrong</h3>
          <p>We are having some trouble to complete your request.</p>
          <p>Please try again.</p>
          <RetryBtn onClick={getVideosData}>Retry</RetryBtn>
        </div>
      )
    }
    return (
      <GamesData>
        {gamingData.map(eachVideo => (
          <Link
            to={`/videos/${eachVideo.id}`}
            style={{textDecoration: 'none'}}
            key={eachVideo.id}
          >
            <GameVideoItem>
              <GameThumbnail
                src={eachVideo.thumbnail_url}
                alt="video thumbnail"
              />
              <GameItemData>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '7px',
                  }}
                >
                  <p style={{color: darkTheme ? '#fff' : '#000'}}>
                    {eachVideo.title}
                  </p>
                  <p style={{color: '#64748b'}}>
                    {eachVideo.view_count} Watching Worldwide
                  </p>
                </div>
              </GameItemData>
            </GameVideoItem>
          </Link>
        ))}
      </GamesData>
    )
  }

  return (
    <ContextRoute.Consumer>
      {value => {
        const {darkTheme} = value
        const bgcolor = darkTheme ? '#000' : '#f4f4f4'

        return (
          <>
            <Header />
            <DesktopSidebar />
            <GameContainer
              darkTheme={darkTheme}
              style={{backgroundColor: bgcolor}}
            >
              <GamingBanner>
                <ProfileGaming darkTheme={!darkTheme}>
                  <FaFire color="red" size={25} />
                </ProfileGaming>
                <h1>Gaming</h1>
              </GamingBanner>
              <GameDataContainer>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {renderContent(darkTheme)}
                </div>
              </GameDataContainer>
            </GameContainer>
          </>
        )
      }}
    </ContextRoute.Consumer>
  )
}

export default Gaming
