import React from 'react'
import { Link } from 'react-router-dom'

function Interesse() {
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

            <div className="container py-4 flex-grow-1 text-center" style={{ maxWidth: '900px' }}>
                <div className="d-flex justify-content-start gap-3 mb-4">
                    <div className="dropdown">
                        <button
                            className="btn dropdown-toggle px-4 py-2 rounded-pill fw-bold text-white shadow-sm"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            style={{ backgroundColor: '#cc3344', fontSize: '14px', border: 'none' }} // Vermelho Vintage
                        >
                            Menu Dropdown
                        </button>
                        <ul className="dropdown-menu border-0 shadow rounded-3" aria-labelledby="dropdownMenuButton" style={{ backgroundColor: '#fff1f7ff' }}>
                            <li><Link to="/portifolio" className="dropdown-item fw-medium" style={{ color: '#d24d75ff' }}>portifólio </Link></li>
                            <li><Link to="/contato" className="dropdown-item fw-medium" style={{ color: '#d24d75ff' }}>fale comigo ♡</Link></li>
                            <li><Link to="/interesse" className="dropdown-item fw-medium" style={{ color: '#d24d75ff' }}>meus interesses</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mb-5 py-4 border-bottom text-start d-flex align-items-center justify-content-between" style={{ borderStyle: 'double', borderWidth: '0 0 4px 0', borderColor: '#cc3344' }}>
                    <div>
                        <h1 className="fw-bold m-0" style={{ color: '#cc3344', fontFamily: '"Georgia", serif', fontSize: '32px', letterSpacing: '0.5px' }}>
                            Gabrielly's Magazine
                        </h1>
                        <p className="text-muted m-0 mt-1" style={{ fontSize: '13px', fontStyle: 'italic', fontFamily: '"Georgia", serif' }}>
                            Journal
                        </p>
                    </div>
                    <div className="text-end text-muted d-none d-sm-block" style={{ fontSize: '11px', fontFamily: 'monospace', textTransform: 'uppercase' }}>
                        No. 60 / June 2026
                    </div>
                </div>
                <div className="mb-5 p-3 text-start bg-white shadow-sm" style={{ borderRadius: '12px', border: '2px dashed #008899' }}>
                    <div className="d-flex align-items-center gap-2 mb-1">
                        <span style={{ fontSize: '18px' }}>☕</span>
                        <h6 className="m-0 fw-bold" style={{ color: '#008899', fontFamily: '"Georgia", serif' }}>Nota de leitura:</h6>
                    </div>
                    <p className="text-muted m-0" style={{ fontSize: '13px', lineHeight: '1.5' }}>
                        Seja bem-vindo(a) ao meu cantinho! Este é um espaço mais <strong>informal e pessoal</strong> do que estritamente formal.
                        Além de compartilhar minha trajetória profissional e acadêmica, uso este painel como um diário visual para colecionar minhas paixões,
                        estéticas favoritas e gostos pessoais. Sinta-se em casa! ♡
                    </p>
                </div>
                {/* ------------------------------------- */}

                <div className="row g-4 text-start">

                    <div className="col-12 col-md-6 d-flex flex-column gap-4">
                        <h4 className="fw-bold px-1 pb-2 border-bottom" style={{ color: '#008899', fontFamily: '"Georgia", serif', fontSize: '18px', borderStyle: 'dashed' }}>
                            Professional Lookbook
                        </h4>

                        <div className="bg-white p-4 shadow-sm" style={{ borderRadius: '12px', border: '1px solid #e1dcd6' }}>
                            <div className="d-flex align-items-center gap-2 text-muted mb-3" style={{ fontSize: '11px', fontFamily: '"Georgia", serif' }}>
                                <span className="fw-bold text-dark">gaby-ro-carmo</span> posted:
                            </div>

                            <div className="mb-3 rounded overflow-hidden text-center bg-light" style={{ border: '1px solid #e1dcd6' }}>
                                <img
                                    src="https://64.media.tumblr.com/ef32d6de74f7264743df5b00d8a9ddb8/b3e1459e42436d08-c7/s540x810/3f8859061ee609d45d8e79c8062e0f8716f9eb69.gifv"
                                    alt="Veterinary Space"
                                    className="img-fluid"
                                    style={{ maxHeight: '180px', objectFit: 'cover', width: '100%' }}
                                />
                            </div>

                            <h5 className="fw-bold" style={{ color: '#cc3344', fontSize: '16px', fontFamily: '"Georgia", serif' }}>Medicina Veterinária & Anestesiologia</h5>
                            <p className="text-muted mt-2 mb-0" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                                My main focus and career plan is to pass the UNESP entrance exam for Veterinary Medicine. I'm deeply interested in advanced clinical care, with a strong focus on specializing in Veterinary Anesthesiology.
                                I’ve also thought about studying Animal Science, since my love for large animals has always been huge and just keeps growing.
                                There’s truly nothing like caring for these creatures who came before us and who, with all their purity and innocence, teach us how to be kinder to one another.
                            </p>
                        </div>
                        <div className="bg-white p-4 shadow-sm" style={{ borderRadius: '12px', border: '1px solid #e1dcd6' }}>
                            <div className="d-flex align-items-center gap-2 text-muted mb-3" style={{ fontSize: '11px', fontFamily: '"Georgia", serif' }}>
                                <span className="fw-bold text-dark">gaby-ro-carmo</span> posted:
                            </div>

                            <h5 className="fw-bold" style={{ color: '#008899', fontSize: '16px', fontFamily: '"Georgia", serif' }}>Desenvolvimento Front-End & UI Design</h5>
                            <p className="text-muted mt-2 mb-3" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                                Eu gosto muito de construir e me dedicar à interfaces fofas e com bastante personalidade, no meu dia a dia utilizo ReactNative junto ao Bootstrap e algumas outras linguagens de estilização ( como o SASS e o CSS ). Confesso que o curso técnico de DEV no SENAI abriu caminhos para eu expressar minha personalidade, minha criatividade e minha essência através do código.
                            </p>

                            <div className="mb-0 rounded overflow-hidden text-center bg-light" style={{ border: '1px solid #e1dcd6' }}>
                                <img
                                    src="https://64.media.tumblr.com/3826a1bb8371135c438a64649ce2b76d/79ff8e6e7b96af5e-42/s500x750/0f72e21913afdfd8647240ca27caec5ac9597602.gifv"
                                    alt="desktop code"
                                    className="img-fluid"
                                    style={{ maxHeight: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        <div className="bg-white p-4 shadow-sm" style={{ borderRadius: '12px', border: '1px solid #e1dcd6' }}>
                            <div className="d-flex align-items-center gap-2 text-muted mb-3" style={{ fontSize: '11px', fontFamily: '"Georgia", serif' }}>
                                <span className="fw-bold text-dark">gaby-ro-carmo</span> posted:
                            </div>

                            <h5 className="fw-bold" style={{ color: '#008899', fontSize: '16px', fontFamily: '"Georgia", serif' }}>Caminhos acadêmicos e profissionais considerados..</h5>
                            <p className="text-muted mt-2 mb-3" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                                Uma coisa que cogitei fazer por um longo tempo foi a faculdade de biologia (juntamente ou posteriormente a de química),
                                porém, seguiria na carreira acadêmica dando aula de ciências para o ensino fundamental ||. Modestia a parte, a carreira na área de ensino
                                nunca foi meu sonho.. ao longo do tempo me transformei e entendi que, por mais que envolvesse coisas que gosto muito, a tarefa do professor no dia a dia é muito difícil.
                                Os professores, durante as 7/8 hours que passam com as crianças, conhecem e transformam vidas; formam seres humanos.. Eu, com a minha constante metamorfose, não conseguiria fazer por eles
                                o que fizeram por mi. Mesmo assim, segue sendo uma das profissões que mais admiro e que mais tenho carinho no mundo.
                            </p>

                            <div className="mb-0 rounded overflow-hidden text-center bg-light" style={{ border: '1px solid #e1dcd6' }}>
                                <img
                                    src="https://64.media.tumblr.com/dfc6ba15da605c736f75b6c22d1fb361/407908fa63bd40d2-72/s400x600/b66d82bff7731a5ae1673231a8d19956edd6a3c4.gifv"
                                    alt="desktop code"
                                    className="img-fluid"
                                    style={{ maxHeight: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column gap-4">
                        <h4 className="fw-bold px-1 pb-2 border-bottom" style={{ color: '#cc3344', fontFamily: '"Georgia", serif', fontSize: '18px', borderStyle: 'dashed' }}>
                            Personal Lifestyle
                        </h4>
                        <div className="bg-white p-4 shadow-sm" style={{ borderRadius: '12px', border: '1px solid #e1dcd6' }}>
                            <div className="d-flex align-items-center gap-2 text-muted mb-3" style={{ fontSize: '11px', fontFamily: '"Georgia", serif' }}>
                                <span className="fw-bold text-dark">gaby-ro-carmo</span> posted:
                            </div>

                            <h5 className="fw-bold" style={{ color: '#cc3344', fontSize: '16px', fontFamily: '"Georgia", serif' }}>Estética Lana Del Rey & Referências Vintage</h5>
                            <p className="text-muted mt-2 mb-0" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                                "No one's gonna take my soul away, I'm living like Jim Morrison."
                                Esse trecho da música “Gods & Monsters” da Lana del Rey ( Born to Die Album) faz referência à Jim Morrison, um vocalista rebelde da banda “The doors”.
                                Ele era muito conhecido por viver a vida de forma extravagante e pela sua grande busca por liberdade excessiva. Sou encantada e apaixonada pela estética dos anos 60, revistas da época ( 60s - 80s ), moda da época e composições que remetem à essa era.
                            </p>
                            <div className="mb-0 rounded overflow-hidden text-center bg-light" style={{ border: '1px solid #e1dcd6' }}>
                                <img
                                    src="https://64.media.tumblr.com/b5a7d45ab975084291edeffecb85ce7d/a4282d841350a273-1e/s500x750/a878561c03c9141c66097150e46ad95d91312292.gifv"
                                    alt="desktop code"
                                    className="img-fluid"
                                    style={{ maxHeight: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        <div className="bg-white p-4 shadow-sm" style={{ borderRadius: '12px', border: '1px solid #e1dcd6' }}>
                            <div className="d-flex align-items-center gap-2 text-muted mb-3" style={{ fontSize: '11px', fontFamily: '"Georgia", serif' }}>
                                <span className="fw-bold text-dark">gaby-ro-carmo</span> posted:
                            </div>

                            <h5 className="fw-bold" style={{ color: '#cc3344', fontSize: '16px', fontFamily: '"Georgia", serif' }}>Grande Romance dos anos 70 ♡</h5>
                            <p className="text-muted mt-2 mb-0" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                                Jane Birkin e Serge Gainsbourg foram simplesmente o casal mais lindo, desejável e caótico dos anos 70.
                                Eles se conheceram em 1968 e, logo no ano seguinte, já deixaram o mundo inteiro “gag” (chocado) com  "Je t'aime... moi non plus", que é o tipo de música cheia de sussurros eróticos da Jane que foi banida em vários países e até censurada pelo Vaticano.
                                O namorico deles durou 12 anos e era a mistura perfeita de arte, paixão e noitadas parisienses, mas também tinha muita turbulência por causa das brigas e do alcoolismo pesado do Serge. A Jane acabou saindo de casa em 1980 porque não dava mais para aguentar os excessos dele, mas o amor deles transcendia tudo: eles continuaram sendo melhores amigos, cúmplices e parceiros de música até o fim da vida dele, em 1991. ♡
                                Além disso, tenho grande amor por eles dois dado ao fato de que meu namorado é super fã e meio obcecado pelas músicas e pela arte do Serge. E também, as roupas e as atuações da Jane me inspiraram muito e influenciaram nos meus gostos pessoais e identidade visual.
                            </p>
                            <div className="mb-0 rounded overflow-hidden text-center bg-light" style={{ border: '1px solid #e1dcd6' }}>
                                <img
                                    src="https://64.media.tumblr.com/39657bad60e7fdb9f2693d55986559a1/tumblr_puuv974JgW1xaub9jo1_640.jpg"
                                    alt="serge nd jane"
                                    className="img-fluid"
                                    style={{ maxHeight: '100%', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        <div className="bg-white p-4 shadow-sm" style={{ borderRadius: '12px', border: '1px solid #e1dcd6' }}>
                            <div className="d-flex align-items-center gap-2 text-muted mb-3" style={{ fontSize: '11px', fontFamily: '"Georgia", serif' }}>
                                <span className="fw-bold text-dark">gaby-ro-carmo</span> posted:
                            </div>
                            <h5 className="fw-bold mb-3" style={{ color: '#cc3344', fontSize: '16px', fontFamily: '"Georgia", serif' }}>
                                A beleza da moda Vintage
                            </h5>
                            <div className="row g-3 align-items-center">
                                <div className="col-12 col-md-6">
                                    <p className="text-muted m-0" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                                        A moda vintage pra mim sempre foi algo muito óbvio e comum.
                                        Crescendo com os meus avós, entendi que para mim a antiguidade e a moda antiga me favorecem e influenciam ainda mais na minha identidade visual. Como mencionado anteriormente, sou louca na estética de entre os anos 60 aos anos 80, o que me fez basear meu estilo (de roupas) nas roupas que eram usadas na época.
                                        Junto à isso, gostaria de mencionar as gurias “pinup” da ‘Gay Gibson’, ‘Modern Man’ e ‘Esquire’. ♡
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="rounded overflow-hidden text-center bg-light" style={{ border: '1px solid #e1dcd6' }}>
                                        <img
                                            src="https://i.pinimg.com/474x/99/f7/47/99f747bde49215b5b6c5dac11c7a5bf8.jpg"
                                            alt="Moda Vintage"
                                            className="img-fluid"
                                            style={{ maxHeight: '300px', objectFit: 'cover', width: '100%' }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container mb-5" style={{ maxWidth: '900px' }}>

                <div
                    className="bg-white p-4 shadow-sm"
                    style={{
                        borderRadius: '12px',
                        border: '1px solid #e1dcd6'
                    }}
                >
                    <h3
                        className="fw-bold mb-4"
                        style={{
                            color: '#cc3344',
                            fontFamily: '"Georgia", serif'
                        }}
                    >
                        Editor's Final Notes
                    </h3>

                    <p className="text-muted" style={{ fontSize: '13.5px', lineHeight: '1.8' }}>
                        Aqui é um espaço de agradecimento especialmente pessoal. Porém, gostaria de agradecer aqui em cima
                        de forma mais profissional ao SENAI e aos meus professores da instituição por sempre me incentivarem
                        em tudo que faço no curso.
                    </p>

                    <p className="text-muted" style={{ fontSize: '13.5px', lineHeight: '1.8' }}>
                        Além disso, as pessoas que vivem em minha volta me alavancaram e me levaram à melhorar cada vez mais. Sou ruim com
                        palavras e sempre acabo me embolando, porém, meu coração é extremamente grato por tudo que fizeram por mim e por todas as oportunidades que recebi. ♡
                    </p>


                    <div className="row mt-4">

                        <div className="col-md-6 mb-3">
                            <h5 style={{ color: '#008899' }}>
                                Future Careers
                            </h5>

                            <ul className="list-unstyled">
                                <li>Veterinary Medicine</li>
                                <li>Veterinary Anesthesiology</li>
                                <li>Animal Science</li>
                                <li>Front-End Development</li>
                            </ul>
                        </div>

                        <div className="col-md-6 mb-3">
                            <h5 style={{ color: '#008899' }}>
                                Hard Skills
                            </h5>

                            <ul className='list-unstyled '>
                                <li>React Native</li>
                                <li>Bootstrap</li>
                                <li>JavaScript</li>
                                <li>HTML & CSS</li>
                                <li>Java</li>
                                <li>UI Design</li>
                            </ul>
                        </div>

                    </div>

                    <hr />

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
        </div >
    )
}

export default Interesse