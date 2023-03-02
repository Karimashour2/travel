import "./App.css";
import Destinations from "./components/destinations/Destinations";
import Navbar from "./components/navbar/Navbar";
import Land from "./components/land/Land";
import Search from "./components/search/Search";
import SelectsImg from "./components/selectsImg/SelectsImg";
import CarouselImg from "./components/carousel/CarouselImg";
import Footer from "./components/footer/Footer";

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <Land/>
      <Destinations/>
      <Search/>
      <SelectsImg/>
      <CarouselImg/>
      <Footer/>
    </div>
  );
}

export default App;
