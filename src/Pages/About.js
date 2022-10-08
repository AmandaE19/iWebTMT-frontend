import React, { useContext} from 'react'
import { GeneralContext } from '../Context/GeneralContext';

import '../Assets/css/pages/About.css'

import Header from '../Components/Header'

import IconAmanda from '../Assets/img/photos/iconAmanda.svg';
import IconVeronica from '../Assets/img/photos/iconVeronica.svg';
import IconSilvana from '../Assets/img/photos/iconSilvana.svg';
import AboutUs from '../Components/AboutUs';

const About = () => {
    const { openAbout, setOpenAbout, setAboutWho } = useContext(GeneralContext);

    return (
        <div className='about'>
            <div className='about_general'>
                <Header />
                <div className='about_content'>
                    <div className='about_photos'>
                        <span className='about_webBI'>O iWebTMT</span>
                        <div className='about_peoples'>
                            {openAbout && <AboutUs />}
                            <div className='about_people'>
                                <img className='about_open_about' src={IconAmanda} alt='Amanda'  onClick={() => {setAboutWho('Amanda'); setOpenAbout(true)}}/>
                                <span className='about_names'>Amanda | Acadêmica</span>
                            </div>
                            <div className='about_people'>
                                <img className='about_open_about' src={IconSilvana} alt='Silvana'  onClick={() => {setAboutWho('Silvana'); setOpenAbout(true)}} />
                                <span className='about_names'>Silvana | Orientadora</span>
                            </div>
                            <div className='about_people'>
                                <img className='about_open_about' src={IconVeronica} alt='Veronica' onClick={() => {setAboutWho('Veronica'); setOpenAbout(true)}}/>
                                <span className='about_names'>Verônica | Acadêmica</span>
                            </div>
                        </div>
                    </div>
                    <div className='about_infos'>
                        <div className='about_project'>
                            <span className='about_project_title'>Sobre o Projeto</span>
                            <span className='about_project_text'>No contexto de programação web, o surgimento de novas técnicas, tecnologias e linguagens de programação resultam em constantes mudanças nas demandas do mercado de software e, como resultado, carência por profissionais qualificados. Para atender a essa demanda, os egressos dos cursos na área de computação devem estar habilitados a atender o que é requerido pelo mercado. Uma análise de conteúdo de portais de disponibilização de vagas de emprego (Gupy.io, Catho e InfoJobs) resultou nas principais tecnologias exigidas pelo mercado de trabalho nessa área. Os resultados obtidos foram analisados, categorizados e disponibilizados online para a comunidade interessada nessa ferramenta web, que coletou os requisitos necessários de vagas de desenvolvimento web, classificou de acordo com diversos tópicos de interesse, apresentando-os de acordo com a demanda. Essa ferramenta busca auxiliar na seleção referente as principais tecnologias exigidas no mercado de trabalho. </span>
                        </div>
                        <div className='about_us'>
                            <span className='about_us_title'>Quem somos?</span>
                            <span className='about_us_text'>Para informações sobre nós, basta clicar em um dos ícones acima.</span>
                            <span className='about_us_title'>Contatos</span>
                            <span className='about_us_text'>Amanda: amanda.luz072@academico.ufgd.edu.br</span>
                            <span className='about_us_text'>Veronica: veronica.moreira065@academico.ufgd.edu.br</span>
                            <span className='about_us_text'>Silvana: silvanamelo@ufgd.edu.br</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
