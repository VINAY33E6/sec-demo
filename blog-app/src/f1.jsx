import {BrowserRouter , Route, Routes} from 'react-router-dom';
import home from "./pages/Home.jsx";
import about from "./pages/About.jsx";
import contact from "./pages/Contact.jsx";

function f1(){
    return(<BrowserRouter>
    <Routes>
        <Route path='/home' element={<home/>}/>
        <Route path='/about' element={<about/>}/>
        <Route path='/contact' element={<contact/>}/>
    </Routes>
    </BrowserRouter>)
}
export default f1;