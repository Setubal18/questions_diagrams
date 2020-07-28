import React from 'react';
import './styles.scss'
import Answer from '../answer'
const lista = ({ questao }) => {
	const { Dificuldade, Pergunta, Respostas, Imagem, ID } = questao

	return (
		<div className='lista'>
			<div>
				<h4>{Pergunta}</h4>
				<p>Dificuldade : {Dificuldade}</p>
			</div>
			<img src={Imagem} alt="Img" />
			<Answer Respostas={Respostas} />
		</div>
	);
};

export default lista;