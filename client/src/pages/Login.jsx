import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';

const Login = ()=>{
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	return (
		<>
			<Form>
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
				<Form.Group className='mb-3' controlId='formBasicCheckbox'>
					<Form.Check type='checkbox' label='Check me out' />
				</Form.Group>
				<Button
					variant='primary'
					onClick={()=>{
						console.log('sending data');
					}}>
					Sign In
				</Button>
				<Button
					variant='primary'
					onClick={()=>{
						console.log('sending data');
					}}>
					Sign Up
				</Button>
			</Form>
		</>
	);
};

export default Login;

