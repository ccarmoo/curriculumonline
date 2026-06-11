import React, { useState } from 'react';
import ProjetoImagens from './components/ProjetoImagens.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Portifolio() {
  const [projetoSelecionado, setProjetoSelecionado] = useState(null);
  const projetos = [
    {
      id: 1,
      titulo: "Plataforma E-Commerce Corporativa",
      subtitulo: "Galeria de Imagens feita em React..",
      descricao: "Aqui foi feito uma galeria interativa sobre uma dupla de animais. Nesse projeto era possível clicar nas imagens e em baixo havia alguns 'Accordions' onde foi inserido mais algumas informações e legendas sobre as fotos. Foi feito em React e foi utilizado também o Bootstrap. ",
      tecnologias: ["React", "TypeScript", "Node.js", "Bootstrap"]
      // link: "https://github.com/seu-usuario/seu-repositorio-1" 
    },
    {
      id: 2,
      titulo: "API de Gerenciamento de Microsserviços",
      subtitulo: "Backend Avançado & Segurança",
      descricao: "Estruturação de banco de dados e APIs RESTful...",
      tecnologias: ["Python", "Django", "PostgreSQL", "Docker"]
      // link: "https://github.com/seu-usuario/seu-repositorio-2" 
    },
    {
      id: 3,
      titulo: "Dashboard de Business Intelligence",
      subtitulo: "Engenharia de Dados & UI/UX",
      descricao: "Painel administrativo interativo voltado...",
      tecnologias: ["React", "Context API", "Chart.js", "Tailwind CSS"]
      // link: "https://github.com/seu-usuario/seu-repositorio-3"
    },
    {
      id: 4,
      titulo: "Design System Customizado",
      subtitulo: "Página teste.",
      descricao: "Criação de uma biblioteca de componentes semânticos reutilizáveis. Foi feito utilizando novamente o BootStrap e o ReactNative em um só projeto.",
      tecnologias: ["React", "Bootstrap 5"]
      // link: "https://github.com/seu-usuario/seu-repositorio-4" 
    },
    {
      id: 5,
      titulo: "Sistema de cadastro de uma escola.",
      subtitulo: "Gerenciamento e cadastro de alunos e funcionários de uma escola",
      descricao: "Aqui foi feito uma página de cadastro escolar onde, se fosse cadastrado um professor, aluno, diretor ou coordenador aparecia as infos salvas em uma tabela em outra página. Nesse projeto desenvolvido foi criado um fluxo para navegar de forma simples e suave pelo site. ",
      tecnologias: ["ReactNative", "Bootstrap", "JS"]
      // link: "https://github.com/seu-usuario/seu-repositorio-5" 
    },
    {
      id: 6,
      titulo: "Sistema feito para gerenciar o cadastro de uma Quitanda.",
      subtitulo: "Produtividade & Gestão Ágil",
      descricao: "Aplicação criada em Python junto ao Bootstrap no HTML e com salvamento no banco de dados no MySQL. É um site/sistema criado para o cadastro dos produtos de uma quitanda, sendo possível cadastrar inúmeras vezes diversos produtos e fazer o fluxo de criar > editar > excluir. O famoso CRUD.",
      tecnologias: ["React", "Python", "SQLite", "Bootstrap"]
      // link: "https://github.com/seu-usuario/seu-repositorio-6" 
    },
    {
      id: 7,
      titulo: "Design de Login Comp. Áerea",
      subtitulo:"Página de login ágil e prática.",
      descricao: "Essa aplicação foi criada utilizando somente html e css. Em uma interface mais simples e leve para interações, o usuário interage melhor com o sistema.",
      tecnologias: ["Html", "CSS"]
    },
    {
      id: 8,
      titulo: "Home da Comp Áerea.",
      subtitulo:"Gerenciamento de voos, Status de frota e Horários.",
      descricao: "Essa é a página inicial do meu sistema de voo. Assim como a página de login, foi criado totalmente em html e css através do VSCODE sem utilizar nenhuma outra tecnologia.",
      tecnologias: ["HTML", "CSS"]
    },
     {
      id: 9,
      titulo: "Turismo em Botucatu",
      subtitulo:"Sistema feito para conhecer a cidade e procurar lugares onde passear.",
      descricao: "Esse sistema foi feito para o usuário procurar lugares para turismo na cidade e conhecer um pouco de Botucatu. Nessa página, coloquei contatos para mais informações sobre os passeios e coloquei um mapa para encontrar o lugar físico onde tiramos infos.",
      tecnologias: ["HTML", "CSS"]
    },
     {
      id: 10,
      titulo: "Turismo em Botucatu",
      subtitulo:"Interface vazia de página de eventos.",
      descricao: "Ainda no sistema de turismo na cidade, adicionei uma página onde seriam exibidos os eventos que estariam acontecendo na cidade.",
      tecnologias: ["HTML", "CSS"]
    },
     {
      id: 11,
      titulo: "Turismo em Botucatu",
      subtitulo:"Exibição dos lugares que pode encontrar por Botucatu.",
      descricao: "Aqui foi exibido alguns lugares e links como: lugares para comer, lugares para se hospedar.. Nessa imagem, por exemplo, está em exibição a Cuesta, um dos lugares mais famosos de Botucatu.",
      tecnologias: ["HTML", "CSS"]
    }
  ];

  return (
    <div className="container-fluid p-0 w-100 vw-100 min-vh-100 d-flex flex-column" style={{ overflowX: 'hidden', backgroundColor: '#fcfaf7' }}>

      <nav className="navbar navbar-expand-lg m-0 row w-100 py-3" style={{ backgroundColor: '#fffbf7', borderBottom: '4px double #cc3344' }}>
        <div className="container-fluid">

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ color: '#cc3344' }}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-4 col-4 d-flex gap-2">
              <li className="nav-item">
                <Link to="/" className="nav-link p-0" style={{ color: '#008899', fontWeight: 'bold' }}><h4>Home</h4></Link>
              </li>
              <li className="nav-item">
                <Link to="/portifolio" className="nav-link p-0" style={{ color: '#008899', fontWeight: 'bold' }}><h4>Portfólio</h4></Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link p-0" style={{ color: '#008899', fontWeight: 'bold' }}><h4>Contact</h4></Link>
              </li>
              <li className="nav-item">
                <Link to="/interesse" className="nav-link p-0" style={{ color: '#008899', fontWeight: 'bold' }}><h4>Interests</h4></Link>
              </li>
            </ul>

            <form className="d-flex col-4" role="search">
              <input className="form-control me-2 border-2" type="search" placeholder="Search" aria-label="Search" style={{ borderColor: '#e1dcd6', borderRadius: '8px' }} />
              <button className="btn text-white px-3" type="submit" style={{ backgroundColor: '#008899', border: 'none', borderRadius: '8px' }}>Search</button>
            </form>

            <div className="text-center col d-flex justify-content-end pe-4">
              <div className="dropdown position-relative d-inline-block">
                <button
                  type="button"
                  className="btn px-4 py-2 rounded-pill text-white shadow-sm"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: '#cc3344', border: 'none', fontWeight: '600', fontSize: '14px' }}
                >
                  Notificações
                </button>
                <span className='position-absolute translate-middle badge border border-white border-2 rounded-pill text-white' style={{ top: '12px', right: '-15px', backgroundColor: '#008899' }}>
                  3
                </span>
                <div className="dropdown-menu dropdown-menu-end p-3 shadow border-0 rounded-3 mt-2" style={{ width: '350px', backgroundColor: '#fffbf7', zIndex: 1050, border: '1px solid #e1dcd6' }}>
                  <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2" style={{ borderColor: '#e1dcd6' }}>
                    <h5 className="m-0 fw-bold text-dark" style={{ fontSize: '15px' }}>Notificações</h5>
                    <img
                      src="https://64.media.tumblr.com/7ac95879c383de24ee2f80d714c59b72/fa37ebb0c4df7430-16/s400x600/5d63d8c8edea2acc1bcf0037548c10c0c5aa3a5e.gifv"
                      alt="lollipop"
                      style={{ width: '100px', height: '80px', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="d-flex flex-column gap-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    <div className="d-flex align-items-start gap-2 p-2 bg-white rounded border-start border-4 shadow-sm" style={{ borderColor: '#008899 !important' }}>
                      <div className="text-start">
                        <p className="m-0 text-dark fw-medium" style={{ fontSize: '13px' }}>
                          No one’s gonna take my soul away, I'm living like Jim Morrison ♡
                        </p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start gap-2 p-2 bg-white rounded border-start border-4 shadow-sm" style={{ borderColor: '#008899 !important' }}>
                      <div className="text-start">
                        <p className="m-0 text-dark fw-medium" style={{ fontSize: '13px' }}>Natural Born Losers</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-start gap-2 p-2 bg-white rounded border-start border-4 shadow-sm" style={{ borderColor: '#008899 !important' }}>
                      <div className="text-start">
                        <p className="m-0 text-dark fw-medium" style={{ fontSize: '13px' }}>I'm head over boots 4 Yoouuu </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav >

      <div className="container mt-5 mb-4 text-start">
        <div className="pb-2 border-bottom d-flex justify-content-between align-items-end" style={{ borderStyle: 'double', borderWidth: '0 0 4px 0', borderColor: '#cc3344' }}>
          <h2 className="fw-bold m-0" style={{ color: '#cc3344', letterSpacing: '0.5px' }}>
            Meus Projetos
          </h2>
          <span style={{ fontFamily: '"Georgia", serif', fontStyle: 'italic', color: '#6c757d', fontSize: '14px' }}>
            Personal Background
          </span>
        </div>
        <p className="text-muted mt-2 mb-0" style={{ fontSize: '13.5px' }}>💡 <i>Clique sobre qualquer um dos projetos para analisar a documentação técnica e arquitetura utilizada.</i></p>
      </div>

      <main className="container-fluid my-auto py-2 custom-swiper-container">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          navigation={true}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 8,
            stretch: -8,
            depth: 100,
            modifier: 1.5,
            slideShadows: false
          }}
          breakpoints={{
            576: { slidesPerView: 1.5 },
            992: { slidesPerView: 3.5 },
          }}
          className="pb-5"
        >
          {projetos.map((proj) => (
            <SwiperSlide key={proj.id} className="d-flex justify-content-center py-3">
              <div
                className="p-1 transition-all hover-up pointer-card"
                style={{ width: '100%', maxWidth: '320px', cursor: 'pointer' }}
                onClick={() => {
                  console.log(proj.id);
                  setProjetoSelecionado(proj);
                }}
              >
                <div className="bg-white p-3 shadow-sm project-card-box" style={{ borderRadius: '14px', border: '1px solid #e1dcd6' }}>

                  <div className="image-container mb-3" style={{  height: '180px', overflow: 'hidden', borderRadius: '8px', backgroundColor: '#fffbf7', border: '1px solid #e1dcd6' }}>
                    <ProjetoImagens imagem={`/p${proj.id}.png`} nome={proj.titulo} />
                  </div>

                  <div className="text-start px-1">
                    <h5 className="fw-bold mb-1" style={{ color: '#cc3344', fontSize: '16px' }}>{proj.titulo}</h5>
                    <p className="text-muted m-0" style={{ fontSize: '12px', fontWeight: '500' }}>{proj.subtitulo}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
      {projetoSelecionado && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: 2000, backdropFilter: 'blur(5px)' }}
          onClick={() => setProjetoSelecionado(null)}
        >
          <div
            className="bg-white p-4 p-md-5 shadow position-relative animate-fade-in"
            style={{ maxWidth: '550px', width: '100%', borderRadius: '16px', border: '1px solid #e1dcd6' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="btn-close position-absolute"
              style={{ top: '24px', right: '24px' }}
              onClick={() => setProjetoSelecionado(null)}
            ></button>

            <div className="text-start">
              <div className="modal-image-container mb-4" style={{ height: '220px', overflow: 'hidden', borderRadius: '12px', backgroundColor: '#fffbf7', border: '1px solid #e1dcd6' }}>
                <ProjetoImagens imagem={`/p${projetoSelecionado.id}.png`} nome={projetoSelecionado.titulo} />
              </div>

              <span className="badge px-3 py-2 rounded-pill mb-2 text-white" style={{ backgroundColor: '#008899', fontSize: '11px', letterSpacing: '0.5px' }}>
                {projetoSelecionado.subtitulo}
              </span>
              <h3 className="fw-bold mb-3" style={{ color: '#cc3344' }}>{projetoSelecionado.titulo}</h3>

              <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '14px' }}>Visão Geral do Projeto:</h6>
              <p className="text-secondary mb-4" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                {projetoSelecionado.descricao}
              </p>

              <h6 className="fw-bold text-dark mb-2" style={{ fontSize: '14px' }}>Stack Tecnológica Utilizada:</h6>
              <div className="d-flex flex-wrap gap-2 mb-4">
                {projetoSelecionado.tecnologias.map((tech, idx) => (
                  <span key={idx} className="px-2 py-1 rounded-2 fw-medium" style={{ backgroundColor: '#fffbf7', border: '1px solid #e1dcd6', color: '#008899', fontSize: '12px' }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2 d-flex gap-2">
                {projetoSelecionado.link ? (
                  <a
                    href={projetoSelecionado.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn text-white px-4 py-2 fw-bold flex-grow-1 shadow-sm"
                    style={{ backgroundColor: '#cc3344', border: 'none', borderRadius: '8px', fontSize: '14px' }}
                  >
                    Visualizar Projeto
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn btn-secondary px-4 py-2 fw-bold flex-grow-1 shadow-sm"
                    style={{ borderRadius: '8px', fontSize: '14px', opacity: 0.6 }}
                  >
                    Link Indisponível
                  </button>
                )}

                <button
                  type="button"
                  className="btn px-3 py-2 border-2 fw-bold"
                  style={{ borderColor: '#e1dcd6', color: '#6c757d', borderRadius: '8px', fontSize: '14px' }}
                  onClick={() => setProjetoSelecionado(null)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .image-container, .modal-image-container {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-container img,
    .modal-image-container img {
          image-rendering: -webkit-optimize-contrast !important;
          image-rendering: crisp-edges !important;             
          image-rendering: pixelated !important;             
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;                       
        }

        .swiper-button-next, .swiper-button-prev {
          color: #cc3344 !important;
          transform: scale(0.6);
          background-color: #ffffff;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
          border: 1px solid #e1dcd6;
        }
        .swiper-pagination-bullet-active {
          background: #cc3344 !important;
          width: 20px !important;
          border-radius: 10px !important;
        }
        .swiper-pagination-bullet {
          background: #008899;
        }
        .hover-up:hover {
          transform: translateY(-6px);
          transition: transform 0.3s ease;
        }
        .project-card-box {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .pointer-card:hover .project-card-box {
          border-color: #cc3344 !important;
          box-shadow: 0 8px 20px rgba(204, 51, 68, 0.08) !important;
        }
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <footer className="navbar navbar-expand-lg m-0 row w-100 py-3 mt-auto shadow-sm" style={{ backgroundColor: '#fffbf7', borderTop: '4px double #cc3344' }}>
        <div className="container-fluid d-flex flex-column flex-sm-row justify-content-between align-items-center px-4 gap-2">
          <p className="mb-0 fw-bold" style={{ color: '#cc3344', fontSize: '14px' }}>
            © 2026 - Developed by Gabrielly Rodrigues
          </p>
          <div className="d-flex align-items-center gap-3" style={{ fontSize: '14px' }}>
            <a href="https://wa.me/5514996896604" target="_blank" rel="noopener noreferrer" className="fw-bold" style={{ color: '#008899', textDecoration: 'none' }}>
              WhatsApp
            </a>
            <span style={{ color: '#e1dcd6' }}>|</span>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gaby.ro.carmo@gmail.com" target="_blank" rel="noopener noreferrer" className="fw-bold" style={{ color: '#008899', textDecoration: 'none' }}>
              E-mail
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}