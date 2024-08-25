import useForm from "../../hooks/useForm";
import {useSelector, useDispatch} from 'react-redux';
import {logout, resetLoginError, saveFormData} from "../../redux/form/formActions";
import {motion} from 'framer-motion';
import ModalInfo from "../../components/ModalInfo";
import {useState} from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({username: '', email: '', password: '' });
    const dispatch = useDispatch();
    const form = useSelector(state => state.form);
    const {loginError} = form;
    const [showModalInfo, setShowModalInfo] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showLogoutModal, setShowLogoutModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(saveFormData(values, values.password));
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const hideModalInfo = () => {
        setShowModalInfo(false);
        dispatch(resetLoginError());
    };

    const showModal = () => {
        setShowModalInfo(true);
    }
    const handleLogout = (e) => {
        e.preventDefault();
        setShowLogoutModal(true);
    }

    const confirmLogout = () => {
        dispatch(logout());
        resetForm();
        setShowLogoutModal(false);
    }

    return (
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
            <ModalInfo
                visible={showModalInfo}
                message="Bienvenidos al Modulo 8"
                onClose={hideModalInfo}
            />
            <div className="container">
                <div>
                    <form onSubmit={handleSubmit}>
                        <h2>LoginForm</h2>
                        <h5>Username: {form.formData.username}</h5>
                        <h5>email: {form.formData.email}</h5>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                placeholder="Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                placeholder="Password"
                            />
                            <button type="button" onClick={toggleShowPassword}>
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        <div className="button-container">
                            <button type="submit">Submit</button>
                            <a href="#" onClick={handleLogout} className="logout-link-modal">Logout</a>
                            <button onClick={showModal}>Mostrar Modal</button>
                        </div>
                    </form>

                    <ModalInfo
                        visible={loginError}
                        message="Password incorrecto"
                        onClose={hideModalInfo}
                    />

                    <ModalInfo
                        visible={showLogoutModal}
                        message={(
                            <>
                                ¿Estás seguro de que quieres cerrar sesión?
                                <button onClick={confirmLogout}>
                                    Presionar para salir!!!
                                </button>
                            </>
                        )}
                        onClose={() => setShowLogoutModal(false)}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default LoginForm;