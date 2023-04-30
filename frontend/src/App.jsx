import Typography from '@mui/material/Typography';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Home } from './components/Home';
import { Container } from '@mui/material';
import FormData from './components/FormData';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          Cite AI
        </Typography>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cites/:id" element={<FormData />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
