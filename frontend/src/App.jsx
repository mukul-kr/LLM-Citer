import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home } from './components/Home';
import FormData from './components/FormData';
import WrongPage from './screens/WrongPage';
import SignInScreen from './screens/SignInScreen';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Cite AI
        </Typography>
        <Routes>
          <Route path="/signin" element={<SignInScreen />} />
          {/**
        <Route path="/cites/:id" element={<FormData />} />
      */}

          <Route path="/cites/:id" element={<FormData />}></Route>
          <Route path="/cites" element={<WrongPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <btn
          onClick={() =>
            (window.location.href = 'https://llm-citer-one.vercel.app/cites')
          }
        >
          direct to cites page
        </btn>
      </Container>
    </BrowserRouter>
  );
}

export default App;
