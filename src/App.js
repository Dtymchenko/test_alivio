import "./App.scss";
import Nav from "./components/nav/Nav";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Section3 from "./components/section3/Section3";
import Section4 from "./components/section4/Section4";
import Footer from "./components/footer/Footer";

function App() {
  const navItems = ["Why Alivio", "Solutions", "Community", "Pricing"];

  return (
    <div className="App">
      <Nav navItems={navItems} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer navItems={navItems}/>
    </div>
  );
}

export default App;
