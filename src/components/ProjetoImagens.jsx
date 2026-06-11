import React from 'react';

export default function ProjetoImagens({ imagem, nome }) {
  return (
    <img
      src={imagem}
      alt={nome}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block'
      }}
    />
  );
}
