import React from 'react'
import axios from 'axios'

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			age:null,
			email:''
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.postActions = this.postActions.bind(this)
	}
	postActions(event){
		
		
		event.preventDefault();
		console.log(this.state);
	//	event.stopImmediatePropagation();
		axios.post('http://192.168.43.110:8000/users/addUser',this.state)
		.then(response =>{
			console.log(response);
			window.alert(response);
		})
		.catch(error =>{
			console.log(error);
			window.alert(error);
		}	)


	}
	changeHandler(e){
		this.setState({[e.target.name]:e.target.value})
	}
	render(){

	return (
		<div className='form-container'>
			<p className='sub text'>Register yourself to</p> 
			<p className='sup text'>be in list.</p>
			<form className='form' onSubmit={this.postActions} >
				<label for='name'>Full Name :</label><br />
				<input type='text' className='name' name='name' placeholder="Full Name" required onChange={this.changeHandler} value={this.state.name}/><br /><br />
				
				<label for='age'>Age :</label><br />
				<input type='number' className='age' name='age' placeholder="Age" /><br required onChange={this.changeHandler} value={this.state.age} /><br />
				
				<label for='email'>E-mail :</label><br />
				<input type='email' className='email' name='email' placeholder="Email" required onChange={this.changeHandler} value={this.state.email} /><br /><br />
			<p className='disclaimer'>By joining you agree to our privacy policy</p>
			<button type='submit' className='btn' >Register</button>
			</form>

			<p className='response'></p>
		</div>
	)
	
	}
}

export default Form; 






