import CineMavericksContainer from './containers/CineMavericksContainer';
import './App.css';
import logo from "./assets/images/logo.png"

function App() {
  return (
    <>
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Roboto+Slab:wght@100..900&family=Monoton&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <CineMavericksContainer />
      </body>
    </>
  );
}

export default App;
