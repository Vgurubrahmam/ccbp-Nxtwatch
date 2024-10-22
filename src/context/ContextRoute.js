import React from 'react'

const ContextRoute = React.createContext({
  darkTheme: false,
  savedVideos: [],
  addVideo: () => {},
  onchangeTheme: () => {},
})
export default ContextRoute
