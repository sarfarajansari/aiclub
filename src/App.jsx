import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import "animate.css";
import Sidebar from "./components/navbar/sidebar";
import Events from "./components/events/events";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Hero />
      <Events />
      <Footer/>
    </div>
  );
}

export default App;
