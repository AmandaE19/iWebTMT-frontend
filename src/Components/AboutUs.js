import React, { useContext } from 'react'
import { GeneralContext } from '../Context/GeneralContext';

import Close from '../Assets/img/icons/IconClose.svg'
import '../Assets/css/components/AboutUs.css'

const AboutUs = () => {
    const { setOpenAbout, aboutWho } = useContext(GeneralContext);
    let email, nome, sobre;
    switch (aboutWho) {
        case 'Amanda':
            email = 'amanda.luz072@academico.ufgd.edu.br'
            nome = 'Amanda Emidio da Luz'
            sobre = 'Amanda Emidio da Luz é atualmente acadêmica do décimo semestre do curso bacharelado em Engenharia de Computação na Universidade Federal da Grande Dourados (UFGD), Faculdade de Ciências Exatas e Tecnologia (FACET). Em sua graduação atuou como monitora das disciplinas de Laboratório de Programação e Algoritmos de Estruturas de dados. Possui experiência na área de Desenvolvimento Web atuando atualmente como desenvolvedora FullStack  na empresa TKTL Informática Ltda. Tem conhecimento das tecnologias React e Node, linguagens de programação JavaScript, TypeScript, Python, C, linguagem de marcação HTML, linguagem de estilização CSS, entre outros.'
            break;
        case 'Silvana':
            email = 'silvanamelo@ufgd.edu.br'
            nome = 'Silvana Morita Melo'
            sobre = 'Silvana Morita Melo é atualmente professora adjunta na Universidade Federal da Grande Dourados. Possui graduação em Bacharelado em Sistemas de Informação pela Universidade Federal de Mato Grosso do Sul (UFMS). Possui mestrado e doutorado em Ciências da Computação e Matemática Computacional, ambos pela Universidade de São Paulo (ICMC/USP). Durante o seu doutorado, realizou um estágio no exterior na The University of Alabama, Estados Unidos. Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software, atuando principalmente nos seguintes temas: Teste de Software, Engenharia de Software Empírica, Ensino de computação. (Fonte: Currículo Lattes)'
            break;
        case 'Veronica':
            email = 'veronica.moreira065@academico.ufgd.edu.br'
            nome = 'Verônica Xixa de Santana Moreira'
            sobre = 'Verônica Xixa de Santana Moreira é atualmente acadêmica do curso de Engenharia da Computação na UFGD, atua como estagiária no setor de sistemas de engenharia da empresa Promon Engenharia, criando automações, administrando bancos de dados, trabalhando com processamento e análise de dados, desenvolvendo aplicações internas e integrações de sistemas. Durante a graduação desenvolveu projeto de iniciação científica na área de teste de software e participou dos projetos de extensão do Grupo de Pesquisa e Extensão PONTE. Possui experiência com aplicações, processamento de dados, administração de BDs e linguagens de programação python, C, C#, JavaScript e java bem como nas ferramentas, power automate e powerBI.'
            break;
        default:
            email = ''
            nome = ''
            sobre = ''
    }
    return (
        <div className='AboutUs'>
            <div>
                <img src={Close} className='forum_delete' alt='Fechar' onClick={() => { setOpenAbout(false) }} />
            </div>
            <div className='AboutUs_Content'>
                <span><span>Nome:</span> {nome}</span>
                <span><span>Email:</span> {email}</span>
                <span> {sobre}</span>
            </div>
        </div>
    )
}

export default AboutUs