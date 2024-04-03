import CineMavericksContainer from './containers/CineMavericksContainer';
import './App.css';
import logo from "./assets/images/logo.png"

function App() {
  return (
    <>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <h1><img id="logo" src={logo} alt="Cinemavericks logo and tag line"/></h1>
        <CineMavericksContainer />
      </body>
    </>
  );
}

export default App;
