import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login_page/LoginPage';
import Home from './pages/home_page/Home';
import Header from './components/container/header/Header';
import FormCardPage from './pages/form_card/FormCardPage';
import { ThemeProvider } from './theme/ThemeContext';
import { GlobalStyle } from './styles/GlobalStyled';
import styled from 'styled-components';

const AppStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-image: url("https://th.bing.com/th/id/R.e21cd6b865d33385c98a463b27bbe3f2?rik=ZVsHAUO5T9byFA&pid=ImgRaw&r=0"); */
`;

function App() {
  return (
      <ThemeProvider>
        <GlobalStyle />
        <AppStyle>
          <Header />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<Home />} />
            <Route path='/formCard' element={<FormCardPage />} />
          </Routes>
        </AppStyle>
      </ThemeProvider>
  );
}

export default App;
