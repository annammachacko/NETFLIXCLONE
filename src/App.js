import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './recust';

function App() {
  return (
    <>
    <Nav/>
    <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending" fetchUrl={requests.fetchTrending}/>
    <Row title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="TopRated" fetchUrl={requests.fetchTopRated}/>
    <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="ComedyMovie" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </>
  );
}

export default App;
