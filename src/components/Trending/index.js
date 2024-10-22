import {FaFire} from 'react-icons/fa'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {useEffect, useState} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import ContextRoute from '../../context/ContextRoute'
import DesktopSidebar from '../Sidebar'
import Header from '../Header'
import {
  TrendingContainer,
  TrendingBanner,
  ProfileTrending,
  Thumbnail,
  TrendingList,
  TrendingDataList,
} from './Trending'

const Trending = () => {
  const token = Cookies.get('jwt_token')
  const [trendingData, setTrendingData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState(false) // Renamed state variable

  const getVideosData = async () => {
    const url = 'https://apis.ccbp.in/videos/trending'
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
        setTrendingData(data.videos)
        setIsLoading(false)
        setErrorState(false)
      } else {
        console.error('Failed to fetch videos', response.status)
        setIsLoading(false)
        setErrorState(true)
      }
    } catch (fetchError) {
      // Renamed to avoid shadowing
      console.error('Error fetching videos:', fetchError)
      setErrorState(true)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getVideosData()
  }, [])

  return (
    <ContextRoute.Consumer>
      {value => {
        const {darkTheme} = value
        const bgcolor = darkTheme ? '#000' : '#f4f4f4'

        return (
          <>
            <Header />
            <DesktopSidebar />
            <TrendingContainer
              darkTheme={darkTheme}
              style={{backgroundColor: bgcolor}}
            >
              <TrendingBanner>
                <ProfileTrending darkTheme={!darkTheme}>
                  <FaFire color="red" size={25} />
                </ProfileTrending>
                <h1 style={{color: darkTheme ? '#fff' : '#000'}}>Trending</h1>
              </TrendingBanner>
              {isLoading && (
                <div
                  className="loader-container"
                  data-testid="loader"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                  }}
                >
                  <Loader
                    type="ThreeDots"
                    color="#64748b"
                    height="50"
                    width="50"
                  />
                </div>
              )}
              {!isLoading && errorState && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    width: '100vw',
                  }}
                >
                  <img
                    src={
                      darkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
                    }
                    alt="failure view"
                    style={{width: '300px', marginBottom: '20px'}}
                  />
                  <h3>Oops! Something Went Wrong</h3>
                  <p>We are having some trouble completing your request.</p>
                  <p>Please try again.</p>
                  <button
                    onClick={getVideosData}
                    style={{
                      padding: '10px 20px',
                      backgroundColor: '#0b69ff',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                    }}
                    type="button"
                  >
                    Retry
                  </button>
                </div>
              )}
              {!isLoading && !errorState && (
                <TrendingDataList>
                  {trendingData.map(eachTrending => (
                    <Link
                      key={eachTrending.id} // Moved key here for proper usage
                      to={`/videos/${eachTrending.id}`}
                      style={{textDecoration: 'none'}}
                    >
                      <TrendingList>
                        <Thumbnail
                          src={eachTrending.thumbnail_url}
                          alt={eachTrending.title}
                        />
                        <div
                          style={{
                            display: 'flex',
                            gap: '5px',
                            width: '300px',
                            flexDirection: 'column',
                            justifyContent: 'start',
                          }}
                        >
                          <h3 style={{color: darkTheme ? '#fff' : '#000'}}>
                            {eachTrending.title}
                          </h3>
                          <p style={{color: '#64748b'}}>
                            {eachTrending.channel.name}
                          </p>
                          <div
                            style={{
                              display: 'flex',
                              gap: '5px',
                              justifyContent: 'start',
                            }}
                          >
                            <p style={{color: '#64748b'}}>
                              {eachTrending.view_count} views .
                            </p>
                            <p style={{color: '#64748b'}}>
                              {`${formatDistanceToNow(
                                new Date(eachTrending.published_at),
                              ).replace(
                                /\balmost\b|\bover\b|\babout\b/g,
                                '',
                              )} ago`}
                            </p>
                          </div>
                        </div>
                      </TrendingList>
                    </Link>
                  ))}
                </TrendingDataList>
              )}
            </TrendingContainer>
          </>
        )
      }}
    </ContextRoute.Consumer>
  )
}

export default Trending
