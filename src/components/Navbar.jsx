import { formatPrice } from '../utils/formatPrice';

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <div className="d-flex w-100 justify-content-between align-items-center flex-wrap gap-2">
                <span className="navbar-brand mb-0">Pizzería Mamma Mia!</span>

                <div className="d-flex gap-2 flex-wrap">
                    <button className="btn btn-outline-light btn-sm">🍕 Inicio</button>

                    {token ? (
                        <>
                            <button className="btn btn-outline-light btn-sm">🔓 Perfil</button>
                            <button className="btn btn-outline-light btn-sm">🔒 Cerrar sesión</button>
                        </>
                    ) : (
                        <>
                            <button className="btn btn-outline-light btn-sm">🔐 Iniciar sesión</button>
                            <button className="btn btn-outline-light btn-sm">🔐 Registrarse</button>
                        </>
                    )}
                </div>

                <button className="btn btn-warning btn-sm">🛒 Total: {formatPrice(total)}</button>
            </div>
        </nav>
    );
};

export default Navbar;
