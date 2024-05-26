
import { useSelector } from 'react-redux';
import Header from '../Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useNowPopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);
 useNowPlayingMovies();
 useNowPopularMovies();
  return (
    <div>
    <Header/>
    {
      showGptSearch?  <GptSearch/>:(
       <>
       <MainContainer/>
      <SecondaryContainer/>
       </>  
    )}   
    </div>
    
     
  )
}

export default Browse