import React from 'react'

class Form extends React.Component{
	render(){
	return (
		<div className='form-container'>
			<p className='sub text'>Register yourself to</p> 
			<p className='sup text'>be in list.</p>
			<form className='form' action='http://localhost:8000' method='post'>
				<label for='name'>Full Name :</label><br />
				<input type='text' className='name' name='name' placeholder="Full Name" /><br /><br />
				
				<label for='age'>Age :</label><br />
				<input type='number' className='age' name='age' placeholder="Age" /><br /><br />
				
				<label for='email'>E-mail :</label><br />
				<input type='email' className='email' name='email' placeholder="Email" /><br /><br />
			<p className='disclaimer'>By joining you agree to our privacy policy</p>
			<button type='submit' className='btn'>Register</button>
			</form>

			<p className='response'></p>
		</div>
	)
	
	}
}

export default Form; 






