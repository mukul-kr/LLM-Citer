import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/Home';

import Typography from '@mui/material/Typography';
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

// import React from "react";
// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import { useParams } from "react-router-dom";

// // A component that displays whatever is passed in the url after /message/
// function Message() {
//   const params = useParams();
//   const { text } = params;
//   return (
//     <>
//       <h1>Message</h1>
//       <h1>
//         { text }
//       </h1>
//     </>
//   );
// }

// // function BlogPost() {
// //   let { slug } = useParams();
// //   return <div>Now showing post {slug}</div>;
// // }

// // A component that renders a list of links to different messages
// function Home() {
//   return (
//     <>
//       <div>
//         <h2>Home</h2>
//         <ul>
//           <li>
//             <Link to="/message/Hello">Hello</Link>
//           </li>
//           <li>
//             <Link to="/message/World">World</Link>
//           </li>
//           <li>
//             <Link to="/message/React">React</Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// // The main component that defines the routes and renders the components
// function App() {
//   return (
//     <>
//       {/* <h1>App</h1>  */}
//       {/* <Home/>    */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/message/:text" element={ <Message /> } />
//       </Routes>
//     </>

//   );
// }

// export default App;
