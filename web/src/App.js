import './App.scss';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import logo from './assets/img/logo.png';

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer/>
        </div>
    );
}

export default App;
