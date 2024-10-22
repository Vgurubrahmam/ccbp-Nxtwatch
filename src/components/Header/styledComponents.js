import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

// export const HeaderContainer = styled.div`
//   height: 80px;
//   width: 100vw;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 30px;
//   background-color: ${props => (props.darkTheme ? '#212121' : '#fff')};
//   color: ${props => (props.darkTheme ? '#fff' : '#000')};
//   padding: 0 20px;

//   @media (max-width: 767px) {
//     height: auto;
//     gap: 15px;
//     padding: 10px;
//   }
// `

// Other styled components...
// export const SidebarContainer = styled.div`
//   width: 220px;
//   height: 100vh;
//   background-color: ${props => (props.darkTheme ? '#212121' : '#fff')};
//   color: ${props => (props.darkTheme ? '#fff' : '#000')};
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   position: fixed;
//   left: 0;
//   top: 0;
//   padding: 20px;
//   transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
//   transition: transform 0.3s ease;
//   z-index: 10;

//   @media (max-width: 767px) {
//     width: 100vw;
//   }
// `

// export const Overlay = styled.div`
//   display: ${props => (props.isOpen ? 'block' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 5;
//  `

export const HeaderContainer = styled.div`
  height: 80px;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  background-color: ${props => (props.darkTheme ? '#212121' : '#fff')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  padding: 0 20px;

  @media (max-width: 767px) {
    height: auto;
    width: 100vw;
    gap: 15px;
    padding: 10px;
  }
`

export const Theme = styled.button`
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  padding: 0;
  margin: 0;
  background-color: transparent;
  border: none;
  width: 60px;
  height: 60px;

  @media (max-width: 767px) {
    width: 40px;
    height: 40px;
  }
`

export const WebsiteLogo = styled.img`
  height: 40px;
  margin-left: 40px;

  @media (max-width: 767px) {
    height: 30px;
    margin-left: 0;
  }
`

export const ActionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 50px;

  @media (max-width: 767px) {
    margin-right: 10px;
    gap: 10px;
  }
`

export const Profile = styled.img`
  height: 30px;
  margin-right: 30px;
  margin-left: 10px;

  @media (max-width: 767px) {
    height: 25px;
    margin-right: 0;
    margin-left: 0;
    display: none;
  }
`

export const Logout = styled.button`
  background-color: transparent;
  border: 2px solid ${props => (props.darkTheme ? '#fff' : '#3b82f6')};
  color: ${props => (props.darkTheme ? '#fff' : '#3b82f6')};
  padding: 5px;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 767px) {
    font-size: 14px;
    display: none;
    padding: 4px;
  }
`

export const LogoutMobileView = styled.button`
  display: none;
  @media (max-width: 767px) {
    display: block;

    height: 55px;
    background-color: transparent;
    border: none;
    font-weight: bold;
  }
`
export const SidebarContainer = styled.div`
  margin-top: 70px;
  width: 220px;
  height: 90vh;
  background-color: ${props => (props.darkTheme ? '#212121' : '#fff')};
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
  transition: transform 0.3s ease;
  z-index: 10;

  @media (max-width: 767px) {
    transform: ${props =>
      props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    width: 100vw;
    height: 300px;
    background-color: ${props => (props.darkTheme ? '#212121' : '#fff')};
    color: ${props => (props.darkTheme ? '#fff' : '#000')};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: fixed;
    left: 0;
    top: 0;
    padding: 20px;
    transition: transform 0.3s ease;
    z-index: 10;
  }
`

export const Overlay = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
  }
`

export const NavLinks = styled.ul`
  list-style-type: none;
  padding: 0;
`

export const NavItem = styled.li`
  margin: 15px 0;
  font-size: 18px;
  column-gap: 30px;
  a {
    text-decoration: none;
    color: inherit;
    display: block;
    &:hover,
    &:active {
      background-color: ${props => (props.darkTheme ? '#000' : '#909090')};
      width: 100%;
      padding-right: 0;

      padding: 5px;
    }
  }
`

export const ToggleButton = styled.button`
  display: none;

  @media (max-width: 767px) {
    display: block;
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: ${props => (props.darkTheme ? '#212121' : '#212121')};
    color: ${props => (props.darkTheme ? '#fff' : '#000')};
    border: none;
    font-size: 24px;
    cursor: pointer;
    z-index: 20;
  }
`

export const AboutContainer = styled.div`
color:${props => (props.darkTheme ? '#fff' : '#000')};

export const IconsContainer = styled.div
 display: flex;
  justify-content: space-around;
  align-items: center;
  gap:20;`

export const SocialIcon = styled.img`
  height: 30px;
`

export const ModalContainer = styled.div`
  width: 250px;
  height: 250px;
  background-color: #212121;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    height: 200px;
    width: 320px;
  }
`

export const CloseButton = styled.button`
 background-color: transparent;
  border: 1px solid gray;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  color: gray;
  margin: 12px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: "roboto";
  font-weight: bold;
  font-size: 12px;
   @media (max-width:768px){
    font-size:15px;
    padding:13px;
    padding-left20px;
    padding-right:20px;
  }`

export const Conformation = styled.button`
background-color: #3b82f6;
  align-self: flex-end;
  border: 1px solid #3b82f6;
  padding: 8px;
  padding-left: 12px;
  padding-right: 12px;
  color: #fff;
  margin: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  font-family: "roboto";
  font-weight: bold;
  font-size: 12px;
   @media (max-width:768px){
    font-size:15px;
    padding:13px;
    padding-left20px;
    padding-right:20px;
  }`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const SocialMediaContainer = styled.div`
  padding: 20px 0;
`

export const ContactUsHeading = styled.h3`
  margin-bottom: 10px;
`

export const IconsContainer = styled.div`
  display: flex;
  gap: 15px;
`

// export const SocialIcon = styled.div`
//   cursor: pointer;
// `
