import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import 'reactjs-popup/dist/index.css'

// React Icons imports
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {VscThreeBars} from 'react-icons/vsc'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

// Context import after React Icons
import ContextRoute from '../../context/ContextRoute'
import {
  HeaderContainer,
  LogoutMobileView,
  ModalContainer,
  AboutContainer,
  SocialIcon,
  IconsContainer,
  Theme,
  WebsiteLogo,
  Logout,
  ActionContainer,
  Profile,
  SidebarContainer,
  ButtonContainer,
  CloseButton,
  Conformation,
  NavLinks,
  NavItem,
  Overlay,
} from './styledComponents'

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const history = useHistory()

  const onhandleLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState)
  }

  return (
    <ContextRoute.Consumer>
      {value => {
        const {darkTheme, onchangeTheme} = value
        const color = darkTheme ? '#ffffff' : '#000'
        const bgcolor = darkTheme ? '#212121' : '#fff'

        const logoSrc = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <>
            <HeaderContainer
              darkTheme={darkTheme}
              style={{backgroundColor: bgcolor}}
            >
              <Link to="/">
                <WebsiteLogo src={logoSrc} alt="website logo" />
              </Link>

              <ActionContainer>
                <Theme
                  type="button"
                  data-testid="theme"
                  onClick={onchangeTheme}
                >
                  {darkTheme ? (
                    <BsBrightnessHigh color={color} size={25} />
                  ) : (
                    <BsMoon color={color} size={25} />
                  )}
                </Theme>
                <Profile
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />

                <LogoutMobileView>
                  <VscThreeBars
                    size={25}
                    color={color}
                    onClick={toggleSidebar}
                  />
                </LogoutMobileView>

                <Popup
                  modal
                  trigger={
                    <Logout
                      darkTheme={darkTheme}
                      bgcolor={bgcolor}
                      color={color}
                    >
                      Logout
                    </Logout>
                  }
                >
                  {close => (
                    <ModalContainer>
                      <p>Are you sure, you want to logout?</p>
                      <ButtonContainer>
                        <CloseButton
                          type="button"
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </CloseButton>
                        <Conformation type="button" onClick={onhandleLogout}>
                          Confirm
                        </Conformation>
                      </ButtonContainer>
                    </ModalContainer>
                  )}
                </Popup>
                <Popup
                  modal
                  trigger={
                    <LogoutMobileView>
                      <FiLogOut size={25} color={color} />
                    </LogoutMobileView>
                  }
                >
                  {close => (
                    <ModalContainer>
                      <p>Are you sure, you want to delete to logout?</p>
                      <ButtonContainer>
                        <CloseButton
                          type="button"
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </CloseButton>
                        <Conformation type="button" onClick={onhandleLogout}>
                          Confirm
                        </Conformation>
                      </ButtonContainer>
                    </ModalContainer>
                  )}
                </Popup>
              </ActionContainer>
            </HeaderContainer>

            {/* Sidebar and Overlay */}
            <SidebarContainer isOpen={isSidebarOpen} darkTheme={darkTheme}>
              <NavLinks>
                <NavItem>
                  <Link to="/">
                    <IoMdHome size={20} /> Home
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/trending">
                    <FaFire size={20} /> Trending
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/gaming">
                    <SiYoutubegaming size={20} /> Gaming
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/saved-videos">
                    <MdPlaylistAdd size={20} /> Saved Videos
                  </Link>
                </NavItem>
              </NavLinks>
              <AboutContainer
                darkTheme={darkTheme}
                style={{marginBottom: '20px'}}
              >
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
            <Overlay isOpen={isSidebarOpen} onClick={toggleSidebar} />
          </>
        )
      }}
    </ContextRoute.Consumer>
  )
}

export default Header
