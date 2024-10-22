import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'
import ContextRoute from '../../context/ContextRoute'

import {
  SidebarContainer,
  NavLinks,
  NavItem,
  AboutContainer,
  IconsContainer,
  SocialIcon,
} from './sidebar'

const DesktopSidebar = ({toggleSidebar}) => (
  <ContextRoute.Consumer>
    {value => {
      const {darkTheme} = value
      const color = darkTheme ? '#ffffff' : '#000'

      return (
        <SidebarContainer darkTheme={darkTheme}>
          <NavLinks>
            <NavItem>
              <Link to="/" onClick={toggleSidebar}>
                <IoMdHome color={color} style={{marginRight: '10px'}} />
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/trending" onClick={toggleSidebar}>
                <FaFire color={color} style={{marginRight: '10px'}} />
                Trending
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/gaming" onClick={toggleSidebar}>
                <SiYoutubegaming color={color} style={{marginRight: '10px'}} />
                Gaming
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/saved-videos" onClick={toggleSidebar}>
                <MdPlaylistAdd color={color} style={{marginRight: '10px'}} />
                Saved Videos
              </Link>
            </NavItem>
          </NavLinks>
          <AboutContainer darkTheme={darkTheme} style={{marginBottom: '20px'}}>
            <p style={{fontFamily: 'roboto'}}>CONTACT US</p>
            <IconsContainer style={{marginTop: '20px'}}>
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <p style={{marginTop: '20px'}}>
              Enjoy! Now to see your channels and recommendations!
            </p>
          </AboutContainer>
        </SidebarContainer>
      )
    }}
  </ContextRoute.Consumer>
)

export default DesktopSidebar
