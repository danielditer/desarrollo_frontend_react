import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const formData = useSelector(state => state.form.formData);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
            </ul>
            {formData.username && formData.email && (
                <div className="navbar-welcome">
                    Bienvenido {formData.username}: {formData.email}
                </div>
            )}
        </nav>
    );
};

export default Navbar;