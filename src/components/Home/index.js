import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import {useHistory, Link} from 'react-router-dom'
import {BsBackspaceReverse} from 'react-icons/bs'
import {IoIosSearch} from 'react-icons/io'
import Loader from 'react-loader-spinner'

import {useState, useEffect} from 'react'
import Header from '../Header'
import ContextRoute from '../../context/ContextRoute'
import DesktopSidebar from '../Sidebar'
import {
  HomeContainer,
  HomeDataContainer,
  Errorimage,
  BannerRemove,
  RetryBtn,
  EachVideoItem,
  Profile,
  BannerImage,
  BannerImageContainer,
  WebsiteLogo,
  VideoItemData,
  VideosData,
  Thumbnail,
  SearchCon,
  SearchInput,
  GetItNow,
} from './styledComponents'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('')
  const [nxtVideos, setNxtVideos] = useState([])
  const [filteredVideos, setFilteredVideos] = useState([])
  const [banner, setBanner] = useState(true)
  const history = useHistory()
  const token = Cookies.get('jwt_token')

  if (token === undefined) {
    history.replace('/login')
  }

  const manageBanner = () => {
    setBanner(prevState => !prevState)
  }

  const getVideosData = async () => {
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
          setNxtVideos(data.videos)
          setFilteredVideos(data.videos)
          setIsLoading(false)
        } else {
          console.error('Expected videos to be an array:', data)
        }
      } else {
        console.error('Failed to fetch videos', response.status)
      }
    } catch (fetchError) {
      // Renamed the variable in catch
      console.error('Error fetching videos:', fetchError)
    }
  }

  useEffect(() => {
    getVideosData()
  }, [])

  const onHandleInput = event => {
    setSearchInput(event.target.value)
  }

  const onSearchClick = () => {
    const filterVideos = nxtVideos.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    setFilteredVideos(filterVideos)
  }

  return (
    <ContextRoute.Consumer>
      {value => {
        const {darkTheme} = value
        const color = darkTheme ? '#fff' : '#000'
        const bgcolor = darkTheme ? '#000' : '#f4f4f4'

        return (
          <>
            <Header />
            <DesktopSidebar />
            <HomeContainer
              darkTheme={darkTheme}
              style={{backgroundColor: bgcolor}}
            >
              {banner && (
                <BannerImageContainer data-testid="banner" banner={banner}>
                  <BannerImage>
                    <WebsiteLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
                    <GetItNow style={{border: '2px solid black'}}>
                      GET IT NOW
                    </GetItNow>
                  </BannerImage>
                  <BannerRemove data-testid="close">
                    <BsBackspaceReverse
                      style={{marginTop: '10px'}}
                      onClick={manageBanner}
                    />
                  </BannerRemove>
                </BannerImageContainer>
              )}
              <HomeDataContainer>
                <SearchCon>
                  <SearchInput
                    type="Search"
                    color={color}
                    value={searchInput}
                    onChange={onHandleInput}
                    placeholder="Search"
                    darkTheme={darkTheme}
                  />
                  <button
                    data-testid="searchButton"
                    type="button"
                    style={{backgroundColor: bgcolor, border: '1px solid #000'}}
                    onClick={onSearchClick} // Fixed missing onClick for search button
                  >
                    <IoIosSearch color={color} />
                  </button>
                </SearchCon>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {isLoading ? (
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
                      <Loader
                        type="ThreeDots"
                        color="#64748b"
                        height="50"
                        width="50"
                      />
                    </div>
                  ) : (
                    <VideosData>
                      {filteredVideos.length > 0 ? (
                        filteredVideos.map(eachVideo => (
                          <Link
                            to={`/videos/${eachVideo.id}`}
                            style={{textDecoration: 'none'}}
                          >
                            <EachVideoItem key={eachVideo.id}>
                              <Thumbnail
                                src={eachVideo.thumbnail_url}
                                alt="video thumbnail"
                              />
                              <VideoItemData>
                                <Profile
                                  src={eachVideo.channel.profile_image_url}
                                  alt="channel logo"
                                />
                                <div
                                  style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '7px',
                                  }}
                                >
                                  <p
                                    style={{color: darkTheme ? '#fff' : '#000'}}
                                  >
                                    {eachVideo.title}
                                  </p>
                                  <p style={{color: '#64748b'}}>
                                    {eachVideo.channel.name}
                                  </p>
                                  <div style={{display: 'flex', gap: '5px'}}>
                                    <p style={{color: '#64748b'}}>
                                      {eachVideo.view_count} views .
                                    </p>
                                    <p style={{color: '#64748b'}}>
                                      {`${formatDistanceToNow(
                                        new Date(eachVideo.published_at),
                                      ).replace('over', '')} ago`}
                                    </p>
                                  </div>
                                </div>
                              </VideoItemData>
                            </EachVideoItem>
                          </Link>
                        ))
                      ) : (
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '7px',
                          }}
                        >
                          <Errorimage
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                            alt="no videos "
                          />
                          <h1 style={{color: darkTheme ? '#fff' : '#000'}}>
                            No Search results found
                          </h1>
                          <p style={{color: darkTheme ? '#fff' : '#000'}}>
                            Try different key words or remove search filter
                          </p>
                          <RetryBtn
                            onClick={getVideosData}
                            data-testid="retryButton"
                          >
                            Retry
                          </RetryBtn>
                        </div>
                      )}
                    </VideosData>
                  )}
                </div>
              </HomeDataContainer>
            </HomeContainer>
          </>
        )
      }}
    </ContextRoute.Consumer>
  )
}

export default Home
