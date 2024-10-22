import {formatDistanceToNow} from 'date-fns'
import {FaFire} from 'react-icons/fa'

import {useState} from 'react'
import ContextRoute from '../../context/ContextRoute'
import DesktopSidebar from '../Sidebar'
import Header from '../Header'
import {
  TrendingDataList,
  Thumbnail,
  TrendingBanner,
  ProfileTrending,
  TrendingList,
  SavedCon,
} from './savedVieos'

const SavedVideos = () => {
  const [savedVideo, setsavedVideo] = useState([])
  console.log(savedVideo)

  return (
    <ContextRoute.Consumer>
      {value => {
        const {darkTheme, savedVideos} = value
        const bgcolor = darkTheme ? '#000' : '#f4f4f4'
        setsavedVideo(savedVideos)
        return (
          <>
            <Header />
            <DesktopSidebar />
            {/* You can use the videoId here if needed */}

            <SavedCon darkTheme={darkTheme} style={{backgroundColor: bgcolor}}>
              <TrendingBanner>
                <ProfileTrending darkTheme={!darkTheme}>
                  <FaFire color="red" size={25} />
                </ProfileTrending>
                <h1>Saved Videos</h1>
              </TrendingBanner>
              {savedVideo.length > 0 ? (
                <TrendingDataList>
                  {savedVideo.map(eachTrending => (
                    <TrendingList key={eachTrending.id}>
                      <Thumbnail
                        src={eachTrending.thumbnail_url}
                        alt="video thumbnail"
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
                        <p style={{color: darkTheme ? '#fff' : '#000'}}>
                          {eachTrending.title}
                        </p>
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
                  ))}
                </TrendingDataList>
              ) : (
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
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                    style={{width: '300px', marginBottom: '20px'}}
                  />
                  <h3 style={{color: darkTheme ? '#fff' : '#000'}}>
                    No saved videos found
                  </h3>
                  <p style={{color: '#64748b'}}>
                    You can save your videos while watching them
                  </p>
                </div>
              )}
            </SavedCon>
          </>
        )
      }}
    </ContextRoute.Consumer>
  )
}

export default SavedVideos
