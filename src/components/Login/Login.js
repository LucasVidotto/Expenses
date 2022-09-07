import React, { Fragment, useState, useContext } from 'react';
/* import { Link } from 'react-router-dom'; */
import './login.css';
import Message from '../Context/Message';
/* import { useLocation } from 'react-router-dom'; */


function Login() {
    const [nome, setNome] = useContext(Message);
    /* const [idade, setIdade] = useContext(Message);
    const [phone, setPhone] = useContext(Message); */

    /* const location = useLocation();
    const data = location.state.nome; */

    /* useEffect(() => {
        console.log(location, " useLocation Hook");
        console.log('data : ' + data);
    }); */

    return (
        <div>
            <div className="container-term">

                <form>
                    <p>Login Page</p>
                    <img className="img-login" src="http://cdn.onlinewebfonts.com/svg/img_411076.png" alt="imagem login" />
                    <input className="input-form" type="text" placeholder="Seu Nome" onChange={e => setNome(e.target.value)} /><br />
                    <input className="input-form" type="email" placeholder="Seu Email" /* onChange={e => setIdade(e.target.value)} */ /><br />
                    <input className="input-form" type="tel" placeholder="(xx)xxxx-xxxx" required /* onChange={e => setPhone(e.target.value)} */ /><br />
                    <input className="input-form" type="button" value="Sign in" /><br />

                </form>
                <h3> Nome : {nome}</h3>
            </div>
            {/* <Link to='/teste' > Click here </Link> */}
        </div>
    )
}

export default Login;