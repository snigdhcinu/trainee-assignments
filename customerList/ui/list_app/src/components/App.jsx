import React from 'react';
import List from './List.jsx';
//import Form from './Form.jsx';
import Footer from './Footer.jsx';

class App extends React.Component{
	render(){
		return(
			<div className='target'>
				<List />	
				
				<Footer />
			</div>
		)
	}
}
export default App;
