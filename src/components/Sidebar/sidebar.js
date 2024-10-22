import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export const SidebarContainer = styled.div`
  margin-top: 80px;
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
  color: ${props => (props.darkTheme ? '#fff' : '#000')};
`
export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20;
`
export const SocialIcon = styled.img`
  height: 30px;
`
