import "./App.scss";
/* views */
import {
  Navbar,
  Header,
  Componies,
  WGPT3,
  Feature,
  Intro,
  CTA,
  Blog,
  Footer,
} from "./containers";
/* func */
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Componies />
      <WGPT3 />
      <Feature />
      <Intro />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
