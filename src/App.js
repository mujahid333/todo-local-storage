import './App.css';
import { Brand } from './components/Brand';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Rating } from './components/Rating';
import { Information } from './components/Information';
import { Poster } from './components/Poster';
import { Services } from './components/Services';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Information/>
      <Brand/>
      <Rating/>
      <Poster/>
      <Services/>
      <Footer/>

     
    </div>
  );
}

export default App;
