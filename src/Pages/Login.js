import React, { useState, useContext } from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import '../Assets/css/pages/Login.css'

import Logo_WebBI from '../Assets/img/logo/icon_logo.svg';
import { GeneralContext } from '../Context/GeneralContext';

const Login = () => {
    const { setUserCode } = useContext(GeneralContext);

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const handleEmail = (e) => { setEmail(e.target.value) }
    const handlePassword = (e) => { setPassword(e.target.value) }
    const handleName = (e) => { setName(e.target.value) }

    const signIn = () => {
        if(email && password){
            Axios.post('http://localhost:8000/get_user_login', {
                email: email,
                password: password
            }).then((response)=>{
                if(response.data !== 'not_exist'){
                    localStorage.setItem('UserCode', response.data[0])
                    localStorage.setItem('Name', response.data[1])
                    navigate('/pagina-inicial')
                }
                if(response.data === 'not_exist'){
                    alert('Usuário não encontrado! Confira seu e-mail e sua senha')
                }
            }).catch((err)=> {
                console.log(err)
            })
        } else {
            alert('Preencha todos os campos')
        }
    }

    const createAccount = () => {
        if(email && password && name){
            Axios.post('http://localhost:8000/verify_user', {
                email: email
            }).then((response)=>{
                if(response.data === 'exist'){
                    alert('Essa conta já existe!')
                }
                if(response.data === 'not_exist'){
                    Axios.post('http://localhost:8000/create_user', {
                        name: name,
                        email: email,
                        password: password
                    }).then((response)=>{
                        console.log(response)
                        if(response.data){
                            setUserCode(response.data)
                            console.log(typeof(response.data))
                            localStorage.setItem('UserCode', response.data)
                            localStorage.setItem('Name', name)
                            navigate('/pagina-inicial')
                        }
                        else {
                            alert('Falha ao criar conta')
                        }
                    }).catch((err)=>{
                        console.log(err)
                    })
                }
            }).catch((err)=> {
                console.log(err)
            })
        }
    }

    return (
        <div className='login'>
            <div className='login_content'>
                <div className='login_modal'>
                    {isLogin
                        ?
                        <>
                            <img src={Logo_WebBI} alt='Logo do WebBI' className='login_logo' />
                            <div className='login_text_signin'>
                                <span>Entre no </span>
                                <span className='login_web'>iWeb</span>
                                <span className='login_BI'>TMT</span>
                            </div>
                            <div className='login_inputs'>
                                <input type='email' value={email} placeholder='Insira seu e-mail' onChange={handleEmail}></input>
                                <input type='password' value={password} placeholder='Insira sua senha' onChange={handlePassword}></input>
                                <button onClick={signIn}>Entrar</button>
                            </div>
                            <div className='login_text_create_account'>Não possui conta? Clique <span onClick={() => setIsLogin(false)}>aqui</span> para cadastrar-se</div>
                        </>
                        :
                        <>
                            <img src={Logo_WebBI} alt='Logo do WebBI' className='login_logo' />
                            <div className='login_text_signin'>
                                <span>Crie sua conta no </span>
                                <span className='login_web'>iWeb</span>
                                <span className='login_BI'>TMT</span>
                            </div>
                            <div className='login_inputs'>
                                <input type='text' value={name} placeholder='Insira seu nome' onChange={handleName}></input>
                                <input type='email' value={email} placeholder='Insira seu e-mail' onChange={handleEmail}></input>
                                <input type='password' value={password} placeholder='Insira sua senha' onChange={handlePassword}></input>
                                <button onClick={createAccount}>Criar</button>
                            </div>
                            <div className='login_text_create_account'>Já possui conta? Clique <span onClick={() => setIsLogin(true)}>aqui</span> para entrar</div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;