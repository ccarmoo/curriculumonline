import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

function FormPage() {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className='container-fluid p-0 w-100 vw-100 min-vh-100 d-flex flex-column' style={{ overflowX: 'hidden', backgroundColor: '#fcfaf7' }}>

      <nav className="navbar navbar-expand-lg m-0 row w-100 py-3" style={{ backgroundColor: '#fffbf7', borderBottom: '4px double #cc3344' }}>
        <div className="container-fluid">

          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{ color: '#cc3344' }}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="navbar-collapse" id="navbarNav">
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

          </div>
        </div>
      </nav >

      <div className="container py-4 flex-grow-1">

        <div className="d-flex align-items-center gap-3 mt-3 mb-4">
          <div className="dropdown">
            <button
              className="btn dropdown-toggle px-4 py-2 rounded-pill fw-bold text-white shadow-sm"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ backgroundColor: '#008899', fontSize: '14px', border: 'none' }}
            >
              Menu Dropdown
            </button>
            <ul className="dropdown-menu border-0 shadow rounded-3" aria-labelledby="dropdownMenuButton" style={{ backgroundColor: '#fff1f7ff' }}>
              <li><Link to="/portifolio" className="dropdown-item fw-medium" style={{ color: '#d24d75ff' }}>portifólio </Link></li>
              <li><Link to="/contato" className="dropdown-item fw-medium" style={{ color: '#d24d75ff' }}>fale comigo ♡</Link></li>
              <li><Link to="/interesse" className="dropdown-item fw-medium" style={{ color: '#d24d75ff' }}>meus interesses</Link></li>
            </ul>
          </div>
          <button
            className="btn text-white px-4 py-2 rounded-pill fw-bold shadow-sm"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalVerPerfil"
            style={{ backgroundColor: '#cc3344', border: 'none', fontSize: '14px' }}
          >
            Sobre mim
          </button>
        </div>

        <div className="mb-4 py-2 border-bottom text-start d-flex justify-content-between align-items-end" style={{ borderStyle: 'double', borderWidth: '0 0 4px 0', borderColor: '#cc3344' }}>
          <h2 className="fw-bold m-0" style={{ color: '#cc3344', letterSpacing: '0.5px' }}>
            Meu currículo
          </h2>
          <span style={{ fontFamily: '"Georgia", serif', fontStyle: 'italic', color: '#6c757d', fontSize: '14px' }}>
            Personal Background
          </span>
        </div>

        <div className="d-flex flex-wrap gap-2 align-items-center mb-4">
          <div
            className="px-3 py-2 d-inline-flex align-items-center gap-2 shadow-sm"
            style={{
              backgroundColor: '#fff1f7',
              border: '1px solid #ffd6e5',
              borderRadius: '999px'
            }}
          >
            <span>⟟</span>
            <span className="fw-medium" style={{ color: '#cc3344' }}>
              Botucatu, São Paulo • Brasil
            </span>
          </div>

          <div
            className="px-3 py-2 d-inline-flex align-items-center gap-2 shadow-sm"
            style={{
              backgroundColor: '#fffbf7',
              border: '1px solid #e1dcd6',
              borderRadius: '999px',
              fontSize: '14px'
            }}
          >
            <span style={{ color: '#008899' }}>🕒</span>
            <span className="fw-bold" style={{ color: '#008899', letterSpacing: '0.5px' }}>
              {formatDate(dateTime)}
            </span>
            <span style={{ color: '#e1dcd6' }}>|</span>
            <span className="fw-medium" style={{ color: '#555', fontFamily: 'monospace', fontSize: '15px' }}>
              {formatTime(dateTime)}
            </span>
          </div>
        </div>

        <div className="d-flex justify-content-center mb-5">
          <button
            className="btn text-white px-5 py-2 fw-bold shadow-sm"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#modalFotoPerfil"
            style={{ backgroundColor: '#008899', border: 'none', letterSpacing: '0.5px', borderRadius: '12px' }}
          >
            Ver Perfil Completo
          </button>
        </div>

        <div className="accordion shadow-sm w-100" id="accordionPortfolio" style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid #e1dcd6' }}>

          <div className="accordion-item border-0">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed py-3 fw-bold text-dark bg-white fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Experiência Profissional
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionPortfolio">
              <div className="accordion-body bg-white text-muted ps-4 py-4" style={{ fontSize: '14px', lineHeight: '1.6', borderTop: '1px dashed #e1dcd6' }}>
                No momento, a experiência profissional que tenho é aquela que o SENAI me
                proporcionou. Como mencionado anteriormente, sou bastante proativa e comunicativa,
                tenho facilidade em compreender; sempre me esforço para fazer e entregar o meu máximo e
                o meu melhor em um ambiente de trabalho.
                Também sou proveniente da empresa Usina Açucareira São Manoel SA desde 2025.
              </div>
            </div>
          </div>

          <div className="accordion-item border-top" style={{ borderColor: '#e1dcd6 !important' }}>
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed py-3 fw-bold text-dark bg-white fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Habilidades Gerais
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionPortfolio">
              <div className="accordion-body bg-white text-muted ps-4 py-4" style={{ fontSize: '14px', lineHeight: '1.6', borderTop: '1px dashed #e1dcd6' }}>
                Minha maior habilidade é a comunicação semi-fluente em Inglês. Sei escrever, me comunicar e
                compreender a língua de forma clara. Tenho também bastante habilidade com FrontEnd e levemente em
                BackEnd (em python). Além disso, eu gostaria de aprimorar minhas habilidades com cuidados medicinais (curativos,
                medicar animais e/ou pessoas, cuidados gerais na área da saúde animal e ambiental) e
                explorar meu lado "enfermeira".
              </div>
            </div>
          </div>

          <div className="accordion-item border-top" style={{ borderColor: '#e1dcd6 !important' }}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button py-3 fs-6 fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
                style={{ backgroundColor: '#fffbf7', color: '#cc3344' }}
              >
                Formação Acadêmica
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionPortfolio">
              <div className="accordion-body text-dark bg-white py-4 ps-4 fw-medium" style={{ fontSize: '14px', lineHeight: '1.6', borderTop: '1px dashed #e1dcd6' }}>
                No momento estou cursando o último ano do Ensino médio e me preparando para fazer o vestibular (ENEM e VUNESP)
                em breve. Como também já mencionado anteriormente, meu maior objetivo e primeira opção para a
                faculdade é Medicina Veterinária com especialização em Anestesia.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalVerPerfil" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '12px', backgroundColor: '#ffffff' }}>
            <div className="modal-header text-white border-0 px-4 py-3" style={{ backgroundColor: '#cc3344', borderRadius: '12px 12px 0 0' }}>
              <h5 className="modal-title fw-bold" style={{ fontSize: '16px' }}>Personal Statement</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-start p-4" style={{ backgroundColor: '#fffbf7', fontSize: '14px', color: '#333' }}>
              <p className="mb-0 fw-medium text-secondary" style={{ lineHeight: '1.6' }}>
                I'm a highly communicative and supportive individual who thrives in collaborative environments and well guide to following clear,
                direct instructions. I'm deeply committed to pursuing and achieving my goals, always completing my work with meticulous attention to detail and care.
                While I manage everyday anxiety, I've developed effective strategies to navigate and overcome these challenges successfully.
                Thank ya' for your attention ♡
              </p>
            </div>
            <div className="modal-footer border-0 p-3" style={{ backgroundColor: '#fffbf7', borderRadius: '0 0 12px 12px' }}>
              <button
                type="button"
                className="btn btn-secondary px-4 py-2 fw-medium shadow-sm"
                data-bs-dismiss="modal"
                style={{ backgroundColor: '#6c757d', border: 'none', fontSize: '13px', borderRadius: '6px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="modalFotoPerfil" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '16px', backgroundColor: '#ffffff' }}>
            <div className="modal-header text-white border-0 px-4 pt-4" style={{ backgroundColor: '#008899', borderRadius: '16px 16px 0 0' }}>
              <h5 className="modal-title fw-bold">Profile Overview</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-center p-4" style={{ backgroundColor: '#fcfaf7' }}>
              <div className="position-relative d-inline-block mb-3">
                <img
                  src="/perfil.png"
                  className="rounded-circle border border-4 shadow-sm"
                  style={{ width: '130px', height: '130px', objectFit: 'cover', borderColor: '#e1dcd6' }}
                  alt="Minha foto"
                />
              </div>

              <h4 className="fw-bold mb-3" style={{ fontSize: '17px', color: '#cc3344', lineHeight: '1.4' }}>
                Gabrielly Rodrigues do Carmo, 17 Years Old
              </h4>

              <p className="text-muted px-2" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                I'm currently in my final year of high school, concurrently pursuing a technical degree in Systems Development at SENAI.
                Looking ahead, my ultimate academic goal is to pursue a degree in VetMed at UNESP.
              </p>

              <div className="d-flex flex-wrap gap-2 justify-content-center mt-3">
                <span className="badge px-3 py-2 text-dark border fw-medium" style={{ backgroundColor: '#ffffff', borderColor: '#e1dcd6', fontSize: '11px', letterSpacing: '0.5px' }}>Junior Dev / Code</span>
                <span className="badge px-3 py-2 text-dark border fw-medium" style={{ backgroundColor: '#ffffff', borderColor: '#e1dcd6', fontSize: '11px', letterSpacing: '0.5px' }}>College Applicant</span>
                <span className="badge px-3 py-2 text-dark border fw-medium" style={{ backgroundColor: '#ffffff', borderColor: '#e1dcd6', fontSize: '11px', letterSpacing: '0.5px' }}>English Speaker</span>
              </div>
            </div>
            <div className="modal-footer border-0 justify-content-center pb-4" style={{ backgroundColor: '#fcfaf7', borderRadius: '0 0 16px 16px' }}>
              <button type="button" className="btn text-white px-4 py-2 fw-bold shadow-sm" data-bs-dismiss="modal" style={{ backgroundColor: '#cc3344', fontSize: '13px', border: 'none', borderRadius: '8px' }}>
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="navbar navbar-expand-lg m-0 row w-100 py-3 mt-auto shadow-sm"
        style={{
          backgroundColor: '#fffbf7',
          borderTop: '4px double #cc3344'
        }}
      >
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center px-4 gap-3">

          <p
            className="mb-0 fw-bold text-center"
            style={{ color: '#cc3344', fontSize: '14px' }}
          >
            © 2026 - Developed by Gabrielly Rodrigues ♡
          </p>

          <div
            className="d-flex justify-content-center align-items-center gap-4"
            style={{ fontSize: '24px' }}
          >

            <a
              href="https://wa.me/5514996896604?text=Olá,%20Gabrielly!%20Acabei%20de%20visitar%20seu%20portfólio%20e%20gostaria%20de%20entrar%20em%20contato."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#008899',
                textDecoration: 'none',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.25)';
                e.currentTarget.style.color = '#25D366';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '#008899';
              }}
            >
              <i className="bi bi-whatsapp"></i>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gaby.ro.carmo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#008899',
                textDecoration: 'none',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.25)';
                e.currentTarget.style.color = '#cc3344';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '#008899';
              }}
            >
              <i className="bi bi-envelope-fill"></i>
            </a>

            <a
              href="https://github.com/ccarmoo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#008899',
                textDecoration: 'none',
                transition: '0.3s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.25)';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.color = '#008899';
              }}
            >
              <i className="bi bi-github"></i>
            </a>

          </div>

        </div>
      </footer>
    </div>
  )
}

export default FormPage