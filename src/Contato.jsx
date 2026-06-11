import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    habilidade: '',
    cargoInteresse: '',
    comentarioExtra: ''
  });

  const [softSkills, setSoftSkills] = useState([]);
  const [notaPerfil, setNotaPerfil] = useState(0);
  const [perguntaInterativa, setPerguntaInterativa] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSoftSkillChange = (skill) => {
    setSoftSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCarregando(true);

    const templateParams = {
      nome_completo: `${formData.nome} ${formData.sobrenome}`,
      email_remetente: formData.email,
      vertente_tecnica: formData.habilidade,
      cargo_interesse: formData.cargoInteresse, // Enviando o novo campo para o EmailJS
      soft_skills: softSkills.join(', '),
      resposta_integridade: perguntaInterativa === 'p1' ? 'Interface/IHC' : perguntaInterativa === 'p2' ? 'Arquitetura/Segurança' : 'Clean Code/Testes',
      nota_navegabilidade: notaPerfil,
      feedback_adicional: formData.comentarioExtra
    };

    emailjs.send(
      'service_gabrielly_carmo',
      'template_ugw8jvh',
      templateParams,
      'LiAnAFaWY7DaHNsW8'
    )
      .then((response) => {
        console.log('E-mail enviado com sucesso!', response.status, response.text);
        setCarregando(false);
        setEnviado(true);

        setTimeout(() => {
          setEnviado(false);
          setFormData({ nome: '', sobrenome: '', email: '', habilidade: '', cargoInteresse: '', comentarioExtra: '' });
          setSoftSkills([]);
          setNotaPerfil(0);
          setPerguntaInterativa('');
        }, 4000);
      })
      .catch((err) => {
        console.error('Falha ao enviar o e-mail:', err);
        alert('Ops! Ocorreu um erro ao tentar enviar o formulário. Tente novamente.');
        setCarregando(false);
      });
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

      <div className="container py-4 flex-grow-1 position-relative">
        <div className="text-start mb-4">
          <Link to="/" className="btn px-4 py-2 fw-bold text-white shadow-sm" style={{ backgroundColor: '#008899', borderRadius: '20px', fontSize: '13px', letterSpacing: '0.5px' }}>
            Voltar
          </Link>
        </div>

        <div className="mx-auto p-5 shadow-sm position-relative" style={{ maxWidth: '650px', backgroundColor: '#ffffff', borderRadius: '14px', border: '1px solid #e1dcd6' }}>
          {(carregando || enviado) && (
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center p-4 rounded-3" style={{ backgroundColor: 'rgba(255, 251, 247, 0.95)', zIndex: 10, backdropFilter: 'blur(4px)' }}>
              {carregando ? (
                <>
                  <div className="spinner-border mb-3" style={{ color: '#008899' }} role="status"></div>
                  <h3 className="fw-bold" style={{ color: '#008899' }}>Enviando para a Gaby...</h3>
                  <p className="text-muted fw-medium">Aguarde um instante enquanto transmitimos seus dados técnicos.</p>
                </>
              ) : (
                <>
                  <div className="mb-3" style={{ fontSize: '40px' }}>✉️</div>
                  <h3 className="fw-bold" style={{ color: '#cc3344' }}>Formulário Enviado!</h3>
                  <p className="text-muted fw-medium px-4">Agradeço a sua avaliação técnica e o seu tempo despendido. As respostas foram encaminhadas diretamente para mim! ♡</p>
                </>
              )}
            </div>
          )}

          <div className="mb-5 pb-2 border-bottom text-start d-flex justify-content-between align-items-end" style={{ borderStyle: 'double', borderWidth: '0 0 4px 0', borderColor: '#cc3344' }}>
            <h2 className="fw-bold m-0" style={{ color: '#cc3344', letterSpacing: '0.5px' }}>
              Avaliação Profissional
            </h2>
            <span style={{ fontFamily: '"Georgia", serif', fontStyle: 'italic', color: '#6c757d', fontSize: '14px' }}>
              Personal Background
            </span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row g-3 mb-4">
              <div className="col-md-6 text-start">
                <label className="form-label fw-bold" style={{ color: '#cc3344', fontSize: '13px' }}>Nome</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleInputChange} className="form-control border-2 px-3 py-2 text-dark" style={{ borderColor: '#e1dcd6', borderRadius: '8px', fontSize: '14px' }} placeholder="Nome do avaliador / empresa" required />
              </div>
              <div className="col-md-6 text-start">
                <label className="form-label fw-bold" style={{ color: '#cc3344', fontSize: '13px' }}>Sobrenome / Cargo</label>
                <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleInputChange} className="form-control border-2 px-3 py-2 text-dark" style={{ borderColor: '#e1dcd6', borderRadius: '8px', fontSize: '14px' }} placeholder="Ex: Recrutador, Dev Sênior" required />
              </div>
            </div>

            <div className="mb-4 text-start">
              <label className="form-label fw-bold" style={{ color: '#cc3344', fontSize: '13px' }}>E-mail Corporativo</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control border-2 px-3 py-2 text-dark" style={{ borderColor: '#e1dcd6', borderRadius: '8px', fontSize: '14px' }} placeholder="seu.nome@empresa.com" required />
            </div>

            <div className="mb-4 text-start">
              <label className="form-label fw-bold" style={{ color: '#cc3344', fontSize: '13px' }}>Para qual cargo deseja contratar?</label>
              <select name="cargoInteresse" value={formData.cargoInteresse} onChange={handleInputChange} className="form-select border-2 px-3 py-2 text-dark" style={{ borderColor: '#e1dcd6', borderRadius: '8px', fontSize: '14px' }} required>
                <option value="" disabled>Escolha um cargo...</option>
                <option value="Desenvolvedora Frontend">Desenvolvedora Frontend (React / UI / UX)</option>
                <option value="Desenvolvedora Backend">Desenvolvedora Backend (Python / APIs)</option>
                <option value="Desenvolvedora Full Stack">Desenvolvedora Full Stack (Frontend & Backend)</option>
                <option value="Estágio / Trainee">Estágio / Trainee em Desenvolvimento de Software</option>
                <option value="Apenas Feedback">No momento não pretendo contratar, estou avaliando apenas para Feedback</option>
              </select>
            </div>

            <div className="mb-4 text-start">
              <label className="form-label fw-bold" style={{ color: '#cc3344', fontSize: '13px' }}>Qual vertente técnica você considera mais estratégica para a evolução deste portfólio?</label>
              <select name="habilidade" value={formData.habilidade} onChange={handleInputChange} className="form-select border-2 px-3 py-2 text-dark" style={{ borderColor: '#e1dcd6', borderRadius: '8px', fontSize: '14px' }} required>
                <option value="" disabled>Escolha uma opção...</option>
                <option value="Frontend">Aprofundamento em Ecossistemas JavaScript (React / TypeScript avançado)</option>
                <option value="Backend">Backend bem estruturado com conexão com o banco de dados (Python)</option>
                <option value="UIUX">Otimização e melhora de designs (UI/UX)</option>
              </select>
            </div>

            <div className="mb-4 text-start p-3 rounded-3" style={{ backgroundColor: '#fffbf7', border: '1px solid #e1dcd6' }}>
              <label className="form-label fw-bold d-block mb-2" style={{ color: '#cc3344', fontSize: '13px' }}>Selecione as Soft Skills (competências comportamentais) que identificou no perfil:</label>
              <div className="row g-2">
                {['Comunicação Clara e Objetiva', 'Proatividade e Aprendizado Rápido', 'Orientação a Detalhes e Qualidade', 'Foco em Resolução de Problemas', 'Adaptabilidade Organizacional'].map((skill) => (
                  <div key={skill} className="col-12 col-sm-6">
                    <div
                      className="form-check p-2 rounded-2 transition-all"
                      style={{
                        cursor: 'pointer',
                        backgroundColor: softSkills.includes(skill) ? '#fff1f2' : 'transparent',
                        border: softSkills.includes(skill) ? '1px solid #fecdd3' : '1px solid transparent'
                      }}
                      onClick={() => handleSoftSkillChange(skill)}
                    >
                      <input className="form-check-input ms-1" type="checkbox" checked={softSkills.includes(skill)} readOnly style={{ cursor: 'pointer', borderColor: '#e1dcd6' }} />
                      <label className="form-check-label text-dark fw-medium ms-2" style={{ fontSize: '13.5px', cursor: 'pointer' }}>{skill}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4 text-start p-3 rounded-3" style={{ backgroundColor: '#ffffff', border: '1px solid #e1dcd6' }}>
              <label className="form-label fw-bold d-block mb-3" style={{ color: '#cc3344', fontSize: '13px' }}>
                Na sua perspectiva de mercado, o que assegura a integridade de um software corporativo?
              </label>
              <div className="d-flex flex-column gap-2">
                {[
                  { id: 'p1', texto: 'Uma interface responsiva alinhada às heurísticas de IHC (Interação Humano-Computador).' },
                  { id: 'p2', texto: 'Uma arquitetura escalável com regras de negócio bem isoladas e seguras.' },
                  { id: 'p3', texto: 'A aplicação rigorosa de Clean Code, testes automatizados e boa documentação.' }
                ].map((item) => (
                  <label
                    key={item.id}
                    className="p-2 rounded-2 border d-flex align-items-center gap-3 text-start transition-all"
                    style={{
                      cursor: 'pointer',
                      borderColor: perguntaInterativa === item.id ? '#cc3344' : '#e1dcd6',
                      backgroundColor: perguntaInterativa === item.id ? '#fffbf7' : '#ffffff',
                      fontWeight: perguntaInterativa === item.id ? '600' : '400',
                      fontSize: '13.5px'
                    }}
                  >
                    <input
                      type="radio"
                      name="perguntaInterativa"
                      checked={perguntaInterativa === item.id}
                      onChange={() => setPerguntaInterativa(item.id)}
                      style={{ accentColor: '#cc3344' }}
                    />
                    {item.texto}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4 text-start">
              <label className="form-label fw-bold d-block mb-3 text-center" style={{ color: '#cc3344', fontSize: '14px' }}>
                Que nota você atribui à navegabilidade e semântica estrutural da aplicação?
              </label>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((nota) => (
                  <button
                    key={nota}
                    type="button"
                    onClick={() => setNotaPerfil(nota)}
                    className="rounded-3 border border-2 d-flex align-items-center justify-content-center fw-bold transition-all"
                    style={{
                      width: '38px',
                      height: '38px',
                      fontSize: '13px',
                      backgroundColor: notaPerfil === nota ? '#fffbf7' : '#ffffff',
                      borderColor: notaPerfil === nota ? '#cc3344' : '#e1dcd6',
                      color: notaPerfil === nota ? '#cc3344' : '#008899',
                      transform: notaPerfil === nota ? 'scale(1.15)' : 'none'
                    }}
                  >
                    {nota}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4 text-start">
              <label className="form-label fw-bold" style={{ color: '#cc3344', fontSize: '13px' }}>Feedbacks adicionais ou considerações para Code Review:</label>
              <textarea name="comentarioExtra" value={formData.comentarioExtra} onChange={handleInputChange} className="form-control border-2 p-3 text-dark" rows="3" style={{ borderColor: '#e1dcd6', borderRadius: '8px', fontSize: '14px', resize: 'none' }} placeholder="Deixe seus apontamentos sobre arquitetura, UI, performance ou sugestões técnicas para o plano de carreira..."></textarea>
            </div>

            <div className="text-center mt-4">
              <button type="submit" className="btn text-white px-5 py-2 fw-bold shadow-sm" style={{ backgroundColor: '#cc3344', fontSize: '15px', border: 'none', borderRadius: '8px', letterSpacing: '0.5px' }}>
                Submeter Feedback
              </button>
            </div>
          </form>

        </div>
      </div>

      <footer className="navbar navbar-expand-lg m-0 row w-100 py-3 mt-auto shadow-sm" style={{ backgroundColor: '#fffbf7', borderTop: '4px double #cc3344' }}>
        <div className="container-fluid d-flex flex-column flex-sm-row justify-content-between align-items-center px-4 gap-2">
          <p className="mb-0 fw-bold" style={{ color: '#cc3344', fontSize: '14px' }}>
            © 2026 - Developed by Gabrielly Rodrigues
          </p>
          <div className="d-flex align-items-center gap-3" style={{ fontSize: '14px' }}>
            <a
              href="https://wa.me/5514996896604"
              target="_blank"
              rel="noopener noreferrer"
              className="fw-bold"
              style={{ color: '#008899', textDecoration: 'none' }}
            >
              WhatsApp
            </a>
            <span style={{ color: '#e1dcd6' }}>|</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=gaby.ro.carmo@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="fw-bold"
              style={{ color: '#008899', textDecoration: 'none' }}
            >
              E-mail
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contato