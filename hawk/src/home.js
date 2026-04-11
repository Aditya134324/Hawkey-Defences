import PageHero from './components/mainpagehero/pagehero';
import Lineseperat from './components/lineseperat/lineseperat';
import Part from './components/part1/part';


function Home(){
    return(
        <div>
         <PageHero/>
         <Lineseperat/>
         <Part/>
        </div>
    )
}

export default Home;