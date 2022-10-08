import React, { useState } from 'react'

import '../Assets/css/pages/Dashboard.css'

import Header from '../Components/Header'

const Dashboard = () => {

    const [optionSelected, setOptionSelected] = useState('presentation');

    const selectedPresentation = optionSelected === 'presentation' ? 'dashborad_option_selected' : '';
    const selectedDataBase = optionSelected === 'database' ? 'dashborad_option_selected' : '';
    const selectedStructure = optionSelected === 'structure' ? 'dashborad_option_selected' : '';
    const selectedTools = optionSelected === 'tools' ? 'dashborad_option_selected' : '';
    const selectedFrameworks = optionSelected === 'frameworks' ? 'dashborad_option_selected' : '';
    const selectedExtraSkills = optionSelected === 'extraskills' ? 'dashborad_option_selected' : '';
    const selectedLanguage = optionSelected === 'language' ? 'dashborad_option_selected' : '';
    const selectedOthers = optionSelected === 'others' ? 'dashborad_option_selected' : '';
    const selectedVacancy = optionSelected === 'vacancy' ? 'dashborad_option_selected' : '';

    return (
        <div className='dashboard'>
            <Header />
            <div className='dashboard_general'>
                <div className='dashboard_menu'>
                    <div className='dashboard_options'>
                        <span className={`dashboard_option ${selectedPresentation}`} onClick={() => setOptionSelected('presentation')}>Linguagem de Estilo</span>
                        <span className={`dashboard_option ${selectedDataBase}`} onClick={() => setOptionSelected('database')}>Banco de Dados</span>
                        <span className={`dashboard_option ${selectedStructure}`} onClick={() => setOptionSelected('structure')}>Linguagem de Marcação</span>
                        <span className={`dashboard_option ${selectedTools}`} onClick={() => setOptionSelected('tools')}>Ferramentas</span>
                        <span className={`dashboard_option ${selectedFrameworks}`} onClick={() => setOptionSelected('frameworks')}>Frameworks</span>
                        <span className={`dashboard_option ${selectedExtraSkills}`} onClick={() => setOptionSelected('extraskills')}>Habilidades Extras</span>
                        <span className={`dashboard_option ${selectedLanguage}`} onClick={() => setOptionSelected('language')}>Linguagem de Programação</span>
                        <span className={`dashboard_option ${selectedOthers}`} onClick={() => setOptionSelected('others')}>Outros</span>
                        <span className={`dashboard_option ${selectedVacancy}`} onClick={() => setOptionSelected('vacancy')}>Vagas no Brasil</span>
                    </div>
                </div>

                <div className='dashboard_content'>
                    {optionSelected === 'presentation' &&
                        <>
                            <span className='content-dash-title'>Dados referentes a extração de dados classificados como "Linguagem de Estilo"</span>
                            <div className='dashboard_data'>
                                <iframe title="WebTMT_Presen - Bar" src="https://app.powerbi.com/view?r=eyJrIjoiZDA4MjkwNTYtMWI1Ny00ZTY0LWJjZDktMTkxYTgwY2UxZmEzIiwidCI6ImFiYzEzOTJhLTU4NTYtNGY1Ny1iN2ViLWE4ZjdmNmExY2FhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                            <span>Na classe de "Linguagem de Estilo", a qual inclui tecnologias focadas na parte visual da aplicação, como pode-se visualizar no gráfico acima, há um domínio praticamente incontestado da linguagem de marcação CSS com uma contagem de 1.164, seguido por CSS3, SASS e SCSS, que tiveram os valores de 471, 91 e 17 respectivamente.</span>
                        </>
                    }

                    {optionSelected === 'database' &&
                        <>
                            <span className='content-dash-title'>Dados referentes a extração de dados classificados como "Banco de Dados"</span>
                            <div className='dashboard_data'>
                                <iframe title="WebTMT_BD - Bar" src="https://app.powerbi.com/view?r=eyJrIjoiZTcxODA3ZjgtZDJlNC00NzliLTg3NDMtNzk4OWZjMTgzOGQ1IiwidCI6ImFiYzEzOTJhLTU4NTYtNGY1Ny1iN2ViLWE4ZjdmNmExY2FhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                            <span>Dos bancos de dados, a quantidade de aparições foi mais alta para a linguagem SQL em 1.438, seguida pelo banco de dados Oracle e de bancos NoSQl com valores de 378 e 370 respectivamente. SQL foi responsável por 41,49% da contagem total. Ao todo 14 tecnologias sendo elas tipos de banco de dados, banco de dados e linguagem para a manipulação dos mesmos, e a contagem de índice variou de 4 a 1.438.</span>
                        </>
                    }

                    {optionSelected === 'structure' &&
                        <>
                            <span className='content-dash-title'>Dados referentes a extração de dados classificados como "Linguagem de marcação"</span>
                            <div className='dashboard_data'>
                                <iframe title="WebTMT_Estru - Bar" src="https://app.powerbi.com/view?r=eyJrIjoiM2I4MmNkZTUtZmFkNi00MWU1LTg0MDctMzQ2M2NlODM2ZWEyIiwidCI6ImFiYzEzOTJhLTU4NTYtNGY1Ny1iN2ViLWE4ZjdmNmExY2FhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                            <span>Como podemos ver nos dados acima apenas duas tecnologias que são requeridas no mercado foram classificadas como estrutura e com base neles vemos que existe uma menor solicitação por HTML5 que é a atualização mais recente do HMTL. Os dados nos mostram a contagem de índice para HTML sendo de 1.158 e HTML5 de 501, nesse caso HTML foi responsável por 69,80% da contagem e somente 30,20% o HTML5.</span>
                        </>

                    }

                    {optionSelected === 'tools' &&
                        <>
                            <span className='content-dash-title'>Dados referentes a extração de dados classificados como "Ferramentas"</span>
                            <div className='dashboard_data'>
                                <iframe title="WebTMT_Fer - Bar" src="https://app.powerbi.com/view?r=eyJrIjoiMGJmNmU1ZDEtNTMyMC00NTZiLTg1N2EtODJmYjMwZDM5YzcyIiwidCI6ImFiYzEzOTJhLTU4NTYtNGY1Ny1iN2ViLWE4ZjdmNmExY2FhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                            <span>Das ferramentas que apareceram nas vagas, a que teve maior destaque estando a frente as demais com valores bastante distintos, Git teve o maior número de requisições com um total de 1.024, seguido de eclipse, intellij com valores de 42 e 30 respectivamente. Ao todo 12 ferramentas foram mencionadas nas vagas para a área de desenvolvimento web.</span>
                        </>
                    }

                    {optionSelected === 'frameworks' &&
                        <>
                            <span className='content-dash-title'>Dados referentes a extração de dados classificados como "Frameworks"</span>
                            <div className='dashboard_data'>
                                <iframe title="WebTMT_Frame - Bar" src="https://app.powerbi.com/view?r=eyJrIjoiMGNhNWM2NzgtMTZhNS00ZjEwLThlYjItNDU2NDQ5NDE0NTM4IiwidCI6ImFiYzEzOTJhLTU4NTYtNGY1Ny1iN2ViLWE4ZjdmNmExY2FhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                            <span>Ao todo 30 frameworks apareceram nas buscas e .Net teve o maior destaque com uma quantia de 1.601 na contagem, seguido por Angular.js com 1.094 e patterns já com valor bem distinto de Angular.js sendo de 431. Alguns outros frameworks aparecem com valores entre 400 e 4 como vuejs, nextjs e outros. Codelgniter teve a menor contagem com valor 1. Em todas as 30 ferramentas, a contagem de aparições variou de 1 a 1.601.</span>
                        </>
                    }

                    {optionSelected === 'extraskills' &&
                        <>
                            <span className='content-dash-title'>Dados referentes a extração de dados classificados como "Habilidades Extra"</span>
                            <div className='dashboard_data'>
                                <iframe title="WebTMT_HE - Bar" src="https://app.powerbi.com/view?r=eyJrIjoiN2Q0ODc3MmEtOWI0Zi00YmU3LWFhNzktMDFmNWE5MWY3YTAyIiwidCI6ImFiYzEzOTJhLTU4NTYtNGY1Ny1iN2ViLWE4ZjdmNmExY2FhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                            <span>Com 3.240, a habilidade extra mais requisitada foi o idioma inglês e foi 53.9% maior do que o test-driven, que teve a menor contagem de índice em 6, em seguida temos habilidades de ux com 1.685, a metodologia Scrum com 855, ui com 679, entre outros. Em todas as 13 ferramentas, a contagem de índice variou de 6 a 3.240.</span>
                        </>
                    }

                    {optionSelected === 'language' &&
                        <>
                            <span className='content-dash-title'>Dados referentes a extração de dados classificados como "Linguagem de Programação"</span>
                            <div className='dashboard_data'>
                                <iframe title="WebTMT_LP - Bar" src="https://app.powerbi.com/view?r=eyJrIjoiOGI0ODI3YmYtNmZjMy00MGIzLTlmZmYtZmVmMGQ2MTI2ODUzIiwidCI6ImFiYzEzOTJhLTU4NTYtNGY1Ny1iN2ViLWE4ZjdmNmExY2FhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                            <span>Das 28 linguagens de programação que são requisitadas para a área de desenvolvimento web, a que teve maior destaque e uma maior busca por tal habilidade foi a linguagem de programação JavaScript com um total de 2.054 das 3.635 vagas, cerca de 56.51% das vagas buscam por profissionais que tenham conhecimento nessa linguagem, seguido de Python com 718 solicitações que corresponde aproximadamente 19.75% das vagas. Das 28 ferramentas a contagem variou de 2.054 a 1 sendo o menor número de requisições, com valor 1, Assembly.</span>
                        </>
                    }

                    {optionSelected === 'others' &&
                        <>
                            <span>Dados referentes a extração de dados classificados como "Outros"</span>
                            <div className='dashboard_data'>
                                <iframe title="WebTMT_outros - Bar" src="https://app.powerbi.com/view?r=eyJrIjoiZDEwM2NmMjQtNjRiMy00M2I4LTk1ZDEtODdlZGNjZDY3ZDM4IiwidCI6ImFiYzEzOTJhLTU4NTYtNGY1Ny1iN2ViLWE4ZjdmNmExY2FhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                            <span>Ao todo 105 tecnologias estão presentes nesse gráficos e seus valores variam entre 1 a 1.898. Sendo a mais requisitada delas conhecimentos em APIs com um valor de 1.898, seguida por struct com 1.835, arquitetura REST 1.500, SSO 1.034, React 1.032, e os demais seguem com valores abaixo de 1.000.</span>
                        </>
                    }

                    {optionSelected === 'vacancy' &&
                        <>
                            <span className='content-dash-title'>Dados referentes a extração de dados classificados como "Vagas no Brasil"</span>
                            <div className='dashboard_data'>
                                <iframe title="WebTMT_dist - Map" width="1000" height="473.5" src="https://app.powerbi.com/view?r=eyJrIjoiYzdiYTQwYzAtZDk3Yi00NDkxLTg0YWQtMTE1NWM4YWQ0YzlmIiwidCI6ImFiYzEzOTJhLTU4NTYtNGY1Ny1iN2ViLWE4ZjdmNmExY2FhNyJ9" frameborder="0" allowFullScreen="true"></iframe>
                            </div>
                            <span>Dentre as vagas que foram buscadas referentes ao período de ano de 2018 a 2022 um maior concentração dessas vagas encontra-se em São Paulo com um total de 1.754 delas representando cerca de 31.19% das vagas, seguida de Rio de Janeiro com 446, Paraná com 296, Minas Gerais com 256. Ao todo 27 estados que variaram de 1 a 1.754 vagas por local.</span>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default Dashboard