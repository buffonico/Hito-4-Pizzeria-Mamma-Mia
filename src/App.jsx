import Navbar from './components/Navbar';
import Pizza from './components/Pizza';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            {/* <Home /> */}
            {/* <Registro /> */}
            {/* <InicioSesion /> */}
            {/* <Cart /> */}
            <Pizza />
            <Footer />
        </div>
    );
}

export default App;
