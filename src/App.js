import {Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute/protectedRoute'
import ContextRoute from './context/ContextRoute'
import './App.css'

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false)
  const [savedVideos, setSavedVideos] = useState([])
  const onchangeTheme = () => {
    setDarkTheme(prevState => !prevState)
  }
  const addVideo = video => {
    const alredySavedVideo = savedVideos.some(
      savedVideo => savedVideo.id === video.id,
    )
    if (!alredySavedVideo) {
      setSavedVideos(prevStateVideo => [...prevStateVideo, video])
    }
  }
  return (
    <ContextRoute.Provider
      value={{darkTheme, onchangeTheme, savedVideos, addVideo}}
    >
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/gaming" component={Gaming} />
        <ProtectedRoute exact path="/trending" component={Trending} />
        <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
        <ProtectedRoute exact path="/videos/:id" component={VideoItemDetails} />

        <Route path="*" component={NotFound} />
      </Switch>
    </ContextRoute.Provider>
  )
}

export default App
