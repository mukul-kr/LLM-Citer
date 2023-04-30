import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home } from './components/Home';
import FormData from './components/FormData';
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
          <Route path="/cites/:id" element={<FormData />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
