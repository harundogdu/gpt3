import "./App.scss";
/* views */
import {
  Navbar,
  Header,
  Companies,
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
      <div className="container">
        <Navbar />
        <Header />
        <Companies />
        <WGPT3 />
        <Feature />
        <Intro />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;

/* css bem model
    Block Elements Modifier

    <div className="product-card">
        <div className="product-card__header">
            <div className="product-card__header__title">
            Header
            <img src="" className="product-card__header__image" />
            </div>
        </div>
        <div className="product-card__body">
            <div className="product-card__body__title">
            Body
            </div>
        </div>
    </div>

    <div className="product__card">
        <div className="product__card-header">
            <div className="product__card-header__title">
            Header
            <img src="" className="product__card-header__image" />
            </div>
        </div>
        <div className="product__card-body">
            <div className="product__card-body__title">
            Body
            </div>
        </div>
    </div>
*/
