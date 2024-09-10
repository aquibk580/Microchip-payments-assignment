import "./App.css";
import CarouselComponent from "./components/Carousel";
import Map from "./components/Map";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-10 space-y-10">
        <CarouselComponent/>
        <Map />
      </div>
    </>
  );
}

export default App;
