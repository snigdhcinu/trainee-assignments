import React from 'react';

class Item extends React.Component{
	

	render(){
		return(
			<div className='card'>
				<button className='del-btn'>|-|</button>
				<div className='card-details'>
					<p className='name'>{this.props.name}</p>
					<p className='age'>{this.props.age}</p>
					<p className='email'>{this.props.email}</p>
				</div>
			</div>
		);
	}


}

export default Item;

















