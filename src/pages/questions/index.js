import React, { Component } from 'react';
import './styles.scss'
import Lista from '../../Components/question'
import jsonQuestions from '../../services/service'

class Questions extends Component {
	state = {
		questoes: [],
	};
	componentDidMount() {
		this.loadQuestoes()
	};

	loadQuestoes = () => {
		const { questoes } = jsonQuestions
		this.setState({ questoes: questoes })
	};
	render() {
		const { questoes } = this.state
		return (

			<section className='main'>
				<section className='content'>
					<div className='listas'>
						{
							questoes.map((quest) => {
								// eslint-disable-next-line no-unused-expressions
								return < Lista key={quest.ID} questao={quest} />

							})
						}
					</div>
				</section>
			</section>
		);
	}
}

export default Questions
