import './App.scss';
import './assets/boxicons-2.1.2/css/boxicons.min.css';
import 'swiper/swiper.min.css';





import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppRoutes from './config/Routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <AppRoutes/>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
