import React, { useEffect } from 'react'

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import '../Assets/css/components/Header.css'

// import Logout from '../Assets/img/icons/IconLogout.svg';

const Header = () => {

  useEffect(()=>{
    const hasCode = localStorage.getItem('UserCode')
    if(!hasCode){
      navigate('/')
    }
  })

  const navigate = useNavigate();

  //Variáveis
  let location = useLocation();
  let titlePage = '';
  let path = location.pathname;

  const initial_selected = path === '/pagina-inicial' ? 'header_links_selected' : ''; 
  const dashboard_selected = path === '/dashboard' ? 'header_links_selected' : '';
  const forum_selected = path === '/forum' ? 'header_links_selected' : '';
  const about_selected = path === '/sobre' ? 'header_links_selected' : '';

  switch (path) {
    case '/pagina-inicial':
      titlePage = 'Página Inicial';
      break;
    case '/dashboard':
      titlePage = 'Dashboard';
      break;
    case '/forum':
      titlePage = 'Fórum';
      break;
    case '/sobre':
      titlePage = 'Sobre';
      break;
    default:
      break;
  }

  const logout = () => {
    localStorage.removeItem('UserCode')
    navigate('/')
  }

  return (
    <div className='header'>
      <div className='header_content'>
        <div className='header_title'>
          <div className='header_title_product'>iWebTMT | </div>
          <div className='header_title_page'>{titlePage}</div>
        </div>

        <div className='header_links'>
          <span className={`header_link ${initial_selected}`} onClick={()=>navigate('/pagina-inicial')}>Página Inicial</span>
          <span className={`header_link ${dashboard_selected}`} onClick={()=>navigate('/dashboard')}>Dashboard</span>
          <span className={`header_link ${forum_selected}`} onClick={()=>navigate('/forum')}>Fórum</span>
          <span className={`header_link ${about_selected}`} onClick={()=>navigate('/sobre')}>Sobre</span>
          <span className='header_link' onClick={logout}>Sair</span>
          {/* <img src={Logout} alt='icon logout' className='header_iconloogut' onClick={logout} /> */}
        </div>
      </div>
    </div>
  )
}

export default Header;