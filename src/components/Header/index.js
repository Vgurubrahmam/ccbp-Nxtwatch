import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {VscThreeBars} from 'react-icons/vsc'
import {
  HeaderContainer,
  LogoutMobileView,
  ModalContainer,
  Theme,
  WebsiteLogo,
  Logout,
  ActionContainer,
  Profile,
  ButtonContainer,
  CloseButton,
  Conformation,
} from './styledComponents'
import ContextRoute from '../../context/ContextRoute'

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

        return (
          <>
            <HeaderContainer
              darkTheme={darkTheme}
              style={{backgroundColor: bgcolor}}
            >
              <Link to="/">
                <WebsiteLogo
                  src={
                    darkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
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
                    value={isSidebarOpen}
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
                      <p> Are you sure, you want to logout?</p>
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
          </>
        )
      }}
    </ContextRoute.Consumer>
  )
}

export default Header
