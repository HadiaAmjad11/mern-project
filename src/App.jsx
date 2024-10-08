import { BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import About from './Pages/About'
import Profile from './Pages/Profile';
import SignUp from './Pages/SignUp';
import Header from './Components/Header';

export default function App() {
    return <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sign-in" element={<SignIn/>} />
        <Route path="/Sign-up" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />

    </Routes>
    </BrowserRouter>
}



