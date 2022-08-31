import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";
import './css/animate.min.css'
import './css/bootstrap.min.css'
import './css/default.css'
import './css/fontawesome-all.min.css'
import './css/magnific-popup.css'
import './css/meanmenu.css'
import './css/owl.carousel.min.css'
import './css/slick.css'
import './css/style.css'
import './css/themify-icons.css'
import './css/responsive.css'



function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
