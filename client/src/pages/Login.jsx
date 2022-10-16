import React, {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.css';
import {useState, useContext} from 'react';
import {Context} from '../context/GlobalContext';
import axios from 'axios';

const Login = ()=>{
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const userId = useContext(Context);
	useEffect(()=>{
		console.log(userId);
	}, []);

	const sendUserData = ()=>{
		console.log('SENDING USERDATA');
		const userData = {
			user_name: email,
			password: password,
		};

		axios.post('http://localhost:5001/api/v1/tickets/sign_up', userData).then((response)=>{
			console.log(response);
		});
	};

	return (
		<div style={{margin: '2rem'}}>
			<Form
				style={{
					padding: '1rem',
					maxWidth: '45rem',
					margin: 'auto',
					display: 'block',
					borderStyle: 'solid',
					borderColor: '#C8C9CA',
					borderRadius: '5px',
					borderWidth: '1px',
				}}>
				<Form.Group className='mb-3' controlId='formBasicEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						value={email}
						onChange={({target})=>{
							setEmail(target.value);
						}}
					/>
					<Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						value={password}
						onChange={({target})=>{
							setPassword(target.value);
						}}
					/>
				</Form.Group>
				<div style={{maxWidth: '10rem', margin: 'auto'}}>
					<Form.Group className='mb-3' controlId='formBasicCheckbox'>
						<Form.Check type='checkbox' label='Stay signed in' />
					</Form.Group>
				</div>
				<div>
					<Button
						style={{margin: '1rem'}}
						variant='primary'
						onClick={()=>{
							console.log('sending data');
						}}>
						Sign In
					</Button>
					<Button
						variant='primary'
						onClick={()=>{
							sendUserData();
						}}>
						Sign Up
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default Login;

