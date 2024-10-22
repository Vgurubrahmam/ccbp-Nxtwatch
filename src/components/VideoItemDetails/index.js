import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Header from '../Header'
import DesktopSidebar from '../Sidebar'
import {
  VideoContainer,
  ParentContainer,
  Errorimg,
  VideoDescription,
  RetryBtn,
  ActionButton,
  VideoTitle,
  AboutVideoCon,
  VideoItemData,
  Profile,
} from './styledComponents'
import ContextRoute from '../../context/ContextRoute'

const VideoItemDetails = () => {
  const token = Cookies.get('jwt_token')
  const [eachVideo, setEachVideo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setError] = useState(false)
  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)
  const [save, setSave] = useState(false)
  const [saveText, setSavedText] = useState('Save')
  const {id} = useParams()

  const onHandleLike = () => {
    if (like) {
      setLike(false)
    } else {
      setLike(true)
      setDislike(false)
    }
  }

  const onHandleDislike = () => {
    if (dislike) {
      setDislike(false)
    } else {
      setDislike(true)
      setLike(false)
    }
  }

  const onHandleSave = () => {
    setSavedText('Saved')
    setSave(true)
  }

  const getVideosData = async () => {
    const url = `https://apis.ccbp.in/videos/${id}`
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
        setEachVideo(data.video_details)
        setIsLoading(false)
      } else {
        console.error('Failed to fetch videos', response.status)
        setError(true)
      }
    } catch (error) {
      console.error('Error fetching videos:', error)
      setError(true)
    }
  }

  const getPublishedTime = () => {
    if (
      eachVideo.published_at &&
      !Number.isNaN(new Date(eachVideo.published_at))
    ) {
      return `${formatDistanceToNow(new Date(eachVideo.published_at)).replace(
        /\balmost\b|\bover\b|\babout\b/g,
        '',
      )} ago`
    }
    return 'unknown year'
  }

  useEffect(() => {
    getVideosData()
  }, [])

  return (
    <>
      <Header />
      <DesktopSidebar />
      <ContextRoute.Consumer>
        {value => {
          const {darkTheme, addVideo} = value
          const bgcolor = darkTheme ? '#000' : '#f4f4f4'

          if (isLoading) {
            return (
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
            )
          }

          if (hasError) {
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
            <ParentContainer
              darkTheme={darkTheme}
              style={{backgroundColor: bgcolor}}
            >
              <VideoContainer
                darkTheme={darkTheme}
                style={{backgroundColor: bgcolor}}
              >
                {eachVideo.video_url ? (
                  <ReactPlayer
                    url={eachVideo.video_url}
                    controls
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <p style={{color: darkTheme ? '#fff' : '#000'}}>
                    Loading video...
                  </p>
                )}
              </VideoContainer>
              <VideoTitle style={{color: darkTheme ? '#fff' : '#000'}}>
                {eachVideo.title}
              </VideoTitle>
              <AboutVideoCon
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '15px',
                }}
              >
                <div style={{display: 'flex', gap: '5px'}}>
                  <p style={{color: '#64748b'}}>
                    {eachVideo.view_count} views .
                  </p>
                  <p style={{color: '#64748b'}}>{getPublishedTime()}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <ActionButton
                    style={{color: like ? '#2563eb' : '#64748b'}}
                    onClick={onHandleLike}
                  >
                    <AiOutlineLike size={25} />
                    Like
                  </ActionButton>
                  <ActionButton
                    style={{color: dislike ? '#2563eb' : '#64748b'}}
                    onClick={onHandleDislike}
                  >
                    <AiOutlineDislike size={25} />
                    <span>Dislike</span>
                  </ActionButton>
                  <ActionButton
                    style={{color: save ? '#2563eb' : '#64748b'}}
                    onClick={() => {
                      onHandleSave(eachVideo)
                      addVideo(eachVideo)
                    }}
                  >
                    <MdPlaylistAdd size={25} />
                    <span>{saveText}</span>
                  </ActionButton>
                </div>
              </AboutVideoCon>
              <hr
                style={{color: '#64748b', marginTop: '15px', height: '2px'}}
              />
              <VideoItemData>
                {eachVideo.channel ? (
                  <>
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
                      <p style={{color: darkTheme ? '#fff' : '#000'}}>
                        {eachVideo.channel.name}
                      </p>
                      <p style={{color: '#64748b'}}>
                        {eachVideo.channel.subscriber_count} subscribers
                      </p>
                    </div>
                  </>
                ) : (
                  <p style={{color: darkTheme ? '#fff' : '#000'}}>
                    Channel information not available
                  </p>
                )}
              </VideoItemData>
              <VideoDescription
                style={{
                  color: darkTheme ? '#fff' : '#000',
                  fontSize: '15px',
                  marginTop: '15px',
                }}
              >
                {eachVideo.description}
              </VideoDescription>
            </ParentContainer>
          )
        }}
      </ContextRoute.Consumer>
    </>
  )
}

export default VideoItemDetails
