
import Hero from './components/home/hero';
import We from './components/home/we';
import Clients from './components/home/clients';
import WorkSection from './components/home/work';
import Experiential from './components/home/experiential';
import SparktLive from './components/home/sparktLive';
import GetInTouch from './components/home/getInTouch';
import Culture from './components/home/culture';
import Offering from './components/home/offering';
import Squad from './components/home/squad';
import Accolades from './components/home/accolades';
import Showreel from './components/home/showreel';

const Home = () => {
  return(
    <>
    <Hero />
    <We/>
    <Culture/>
    <Offering/>
    <Squad/>
    <Accolades/>
    <Clients/>
    <WorkSection/>
    <Showreel/>
    <Experiential/>
    <SparktLive/>
    <GetInTouch/>
    </>
  )
}

export default Home;