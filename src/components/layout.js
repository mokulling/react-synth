import styled from 'styled-components'
import { useAppContext } from '../context/index'

const Background = styled.div`
    display: grid;
    place-items: center;
    background: ${props => props.theme === 'light' ? '#bbb' : '#1F2041'};
    height: 100vh;

`

const ControlsContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;

`

const Layout = ({ children, controls }) => {
    const { state } = useAppContext()
    return <Background theme={state.theme}>
        <ControlsContainer>{controls}</ControlsContainer>
        <div>{children}</div>
    </Background>
}

export default Layout