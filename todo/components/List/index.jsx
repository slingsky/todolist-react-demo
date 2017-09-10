import React from 'react';

export default class List extends React.Component {

	render() {
		let content = this.props.todos;
		console.log(content)
		return (
			<ul style={{marginTop: '10px', fontSize: '20px', lineHeight: '30px'}}>
				{
					content.length > 0 ? content.map((item,index) => {
						return <li key={index} onClick={this.clickHandler.bind(this, item.id)} > {item.text} </li>
					})
					: ''
				}
			</ul>
		)
	}
	clickHandler(id) {
		this.props.deleteFn(id);
	}

}