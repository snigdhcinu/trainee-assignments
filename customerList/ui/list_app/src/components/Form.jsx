import React from 'react'
import axios from 'axios'

class Form extends React.Component{
	constructor(props){
		super(props);
		this.state={
			name:'',
			age:0,
			email:''
		}
		this.changeHandler = this.changeHandler.bind(this);
		this.saveUser = this.saveUser.bind(this)
	}

	async saveUser(event){
		event.preventDefault();

		let postData = this.getPostData ();

		console.log ({postData}, 'User data before sending to server')

		try {
			let response = await this.post (postData)
			console.log ({response}, 'user save ok')
		}
		catch (err) {
			console.error ({err}, 'user save error')
			alert ('Unable to save user. Please try again')
		}

	}

	getPostData (){
		let url = 'http://192.168.43.110:8000/users/addUser';
		let header = {
			"content-type" : "application/json"
		}
		let data = {
			name : this.state.name,
			age  : this.state.age,
			email: this.state.email
		}


		return {
			method : 'POST',
			url,
			header,
			data
		}
	}


	post (postData) {
		return new Promise ( function (resolve, reject) {

		axios(postData)
			.then((response)=>{
				resolve (response)
			})
			.catch(err => {
				reject (err)
			});

		})
	}

	changeHandler(e){
		console.log(e.target.name);
		console.log(e.target.value);
		this.setState({[e.target.name]:e.target.value})
	}

	render(){

	return (
		<div className='form-container'>
			<p className='sub text'>Register yourself to</p> 
			<p className='sup text'>be in list.</p>
			<form className='form' onSubmit={this.saveUser} >
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






