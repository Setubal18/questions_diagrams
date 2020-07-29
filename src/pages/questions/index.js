import React, { Component } from 'react';
import './styles.scss'
import Lista from '../../Components/question'
import jsonQuestions from '../../services/service'
import PaginationList from 'react-pagination-list';

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
						<PaginationList
							data={questoes}
							pageSize={4}
							layout='row'
							renderItem={(item, key) => (
								< Lista key={item.ID} questao={item} />
							)} />
					</div>
				</section>
			</section >
		);
	}
}

export default Questions
