const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({origin:'http://192.168.43.110:3000'}))

app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost:27017/customersDB',{useNewUrlParser:true,useUnifiedTopology:true});

const customerSchema = new mongoose.Schema({
	name:String,
	email:String,
	age:Number
});

const Customer = mongoose.model("Customer",customerSchema);


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

app.post('/users/addUser/:name/:age/:email',(req,res) => {
	let username = req.params.name;
	let useremail = req.params.email;
	let userage = req.params.age;

	

	/*
	console.log('loggin req.body -------------------------------------------------------');
	console.log(req.body);

	console.log('loggin req.params ******************************************************');
	console.log(req.params);
	*/
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

app.delete('./users/deleteUser',(req,res)=>{
	console.log(`proceeding to deleting item ${req.params.uid}`);
	console.log('or is it');
	let uid = req.params.uid
	Customer.findByIdAndDelete(uid,function(err){
		if(err){
			console.log(err);
			res.send(err);
		}else{
			console.log('Success');
			res.send('Success');
		}
	});
})

app.listen('8000',() => {
	console.log('Server is online on port 8000...')
});
