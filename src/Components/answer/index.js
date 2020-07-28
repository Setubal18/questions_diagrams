import React from 'react';

const Answer = ({ Respostas }) => {
	return (
		<section>
			<h6>Alternativas</h6>
			<ol>
				{
					Respostas.map((resp) => (
						<li key={resp.ID}>
							<p key={resp.ID}>{resp.Texto}</p>
						</li>
					))
				}
			</ol>
		</section>
	);
};

export default Answer;