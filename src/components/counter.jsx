import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const {onIncrement, onDelete, counter} = this.props;
		return(
			<div className='ui grid compact'>
				<div className="row">
					<div className="column">
						<h1 className={this.getBadgeClasses()}>{ this.formatCount() }</h1>
					</div>
				</div>
				<div className="five column row">
					<div className="column">
						<button
							className='ui primary button'
							onClick={ () => onIncrement(counter) }>
								Increment
						</button>
					</div>
					<div className="column">
						<button
							className='ui negative button'
							onClick={ () => onDelete(counter.id) }>
								Delete
						</button>
					</div>
				</div>
				<div className="ui divider"></div>
			</div>
		);
	}

	getBadgeClasses() {
    const {counter} = this.props;
		let classes = "ui label ";
		classes += counter.value === 0 ? 'red' : 'teal';
		return classes;
	}

	formatCount(){
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value
	}
}

export default Counter;
