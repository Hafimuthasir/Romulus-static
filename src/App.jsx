import { BrowserRouter,Routes,Route } from "react-router-dom";

import { Navbar} from "./components";
import AboutPage from "./Pages/AboutPage";
import PurchasePage from "./Pages/PurchasePage";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0' style={{background:"white"}}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<AboutPage/>}/>
          <Route path="/purchase" element={<PurchasePage/>}/>

        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
