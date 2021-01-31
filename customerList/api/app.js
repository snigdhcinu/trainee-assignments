const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({origin:'http://192.168.43.110:3000'}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/customersDB',{useNewUrlParser:true,useUnifiedTopology:true});

const customerSchema = new mongoose.Schema({
	name:String,
	email:String,
	age:Number
});

const Customer = mongoose.model("Customer", customerSchema);


// Underlying commented lines now give correct output

/*

let result;
Customer.find((err,users)=>{
	if(err){
		console.log(err);
		result = err;
	}else{
		console.log(users);
		result = [...users];
	}
})

	
	

app.get('/',(req,res)=>{
	console.log('Welcome user');
	res.write('Hello user');
	res.write(result);
	res.send();
});

*/

app.get('/users/getInfo',(req,res) => {
	Customer.find((err,users) =>{
		if(err){
			console.log(err);
			res.send(err);
		}else{
			console.log(users);
			res.json({data:users});
		}
	});
});

app.get('/users/addUser',(req,res)=>{
	res.redirect('http://192.168.43.110:3000');
});

app.post('/users/addUser',(req,res) => {
	console.log ({body : req.body}, 'post body');
	let username = req.body.name;
	let useremail = req.body.email;
	let userage = req.body.age; 

	if (!username || !useremail) {
		console.error ({username, userage, useremail}, 'one or more mandatory parameters missing');
		res.status (401). send (new Error ('One or more mandatory params missing'));
		return;
	}

	const newUser = new Customer({
		name:username,
		email:useremail,
		age:userage
	});

	newUser.save((err) => {
		if(err){
			console.log(err);
			res.send(err);
		}else{
			console.log('User added successful');
			console.log(newUser);
			res.send('User added successfully');
		}
	});
});


app.delete('/users/deleteUser/:uid',(req,res)=>{
	console.log(`proceeding to deleting item ${req.params.uid}`);
	console.log('or is it');
	let uid = req.params.uid;
	Customer.findByIdAndDelete(uid,function(err){
		if(err){
			console.log(err);
			res.send(err);
		}else{
			console.log('Success');
			res.send('Success');
		}
	});
});

app.listen('8000',() => {
	console.log('Server is online on port 8000...');
});
