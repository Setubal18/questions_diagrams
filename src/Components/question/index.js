import React from 'react';
import './styles.scss'
import img from '../../assets/Capturar.png'
const lista = () => {
	return (
		<div className='lista'>
			<div><h4>Aqui e a pergunta</h4> <p>Dificuldade : 1</p></div>
			<img src={img} alt="Img" />
			<section>
				<h6>Alternativas</h6>
				<ol>
					<li>
						<p>Texto</p>
					</li>
					<li>
						<p>Texto 2</p>
					</li>
					<li>
						<p>Texto 3</p>
					</li>
					<li>
						<p>Texto 4</p>
					</li>
				</ol>
			</section>
		</div>
	);
};

export default lista;