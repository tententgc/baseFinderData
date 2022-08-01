import Navbar from '../components/Navbar';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import './home.css'

function Home() {
    return (
        <>
            < Navbar />
            < ImageSlider slides={SliderData} />
        </>
    )
}

export default Home; 