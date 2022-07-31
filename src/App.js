import Navbar from './components/Navbar'; 
import ImageSlider from './components/ImageSlider'; 
import { SliderData } from './components/SliderData';
import './App.css'

function App() {
    return (
    <>
    < Navbar />
    < ImageSlider slides={SliderData}/> 
    </>
    )
}

export default App; 