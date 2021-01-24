import React from 'react';
import List from './List.jsx';
import Form from './Form.jsx';
import Footer from './Footer.jsx';

class App extends React.Component{
	constructor(props){
		super(props);
		// mode 0 => List , hence mode 1 => Form
		this.state={
			mode:0,
			label:'Add User'	
		};
		this.swap = this.swap.bind(this);
	}
	swap(){
		if(this.state.mode === 0){
			this.setState({mode:1,label:'View Users'});	
		}else{
			this.setState({mode:0,label:'Add User'});
		}
	}


	render(){
		return(
			<div className='target'>
				<button className='action' onClick={this.swap}>{this.state.label}</button>
			
				{this.state.mode===0?<List />:<Form />}
							
				<Footer />
			</div>
		)
	}
}
export default App;
