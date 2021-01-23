import React from 'react';
import Item from './Item.jsx';

//const axios = require('axios') ; 

class List extends React.Component{
	constructor(props){
		super(props);
		this.state={
			users:[]
		}
	}
	componentDidMount(){
		fetch('http://192.168.43.110:8000/users/getInfo')
		.then(response => response.json())
		.then(res =>{
			if(res && res.data){
				//console.log(res.data);
				this.setState({users: [...this.state.users, ...res.data]})
			}
		})
	}
	
	renderUsers(){
		if(this.state.users.length <= 0){
			return <div> No data to show ... </div>
		}else{
			return this.state.users.map((user,key)=>{
				return <Item 
				key={user._id} 
				name={user.name} 
				email={user.email} 
				age={user.age}
							/>	
			});
		}
	}

	render(){

	return(
		<div>
		<button className='add-user'>Add User</button>
		<div className='item-container'>
			{ this.renderUsers() }
		</div>
		</div>
	)
	
	}

}


export default List;







