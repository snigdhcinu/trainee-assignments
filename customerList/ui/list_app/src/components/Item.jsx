import React from 'react';


class Item extends React.Component{
	constructor(props){
		super(props);

		this.deleteItem = this.deleteItem.bind(this);
	}
	
	deleteItem(e){
		let uid = e.target.value;
		//console.log(uid);
		const reqOpt ={
			method:'DELETE'
		};
		let response = window.confirm('Do you really want to delete this user ??')
			if(response === true){
		fetch(`http://192.168.43.110:8000/users/deleteUser/${uid}`,reqOpt).then(result => {
			window.location.reload(true);	
			//alert('User Deleted Successfully');
				
			})
			}
	}

	render(){
		return(
			<div className='card'>
				<button className='del-btn' value={this.props.uid} onClick={this.deleteItem}>|-|</button>
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

















