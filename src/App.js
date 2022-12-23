import "./App.css";
import Header from './components/Header'
import Hero from './components/Hero'
import Products from "./components/Products";
import Slider from "./components/Slider";
import Virtual from "./components/Virtual";
import Testimonials from "./components/Testimonials";
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
