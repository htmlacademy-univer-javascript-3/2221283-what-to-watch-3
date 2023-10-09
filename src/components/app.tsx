import MainPage from '../pages/main-page/main-page';

type MainFilmCardProps = {
  title: string;
  genre: string;
  releaseDate: number;
}

function App({title, genre, releaseDate}: MainFilmCardProps): JSX.Element {
  return <MainPage title = {title} genre = {genre} releaseDate= {releaseDate}/>;
}

export default App;
