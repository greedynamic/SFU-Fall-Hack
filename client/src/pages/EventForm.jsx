import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';


const EventForm = ()=>{
	const[ticket,setTicket] = React.useState('');
	const[location,setLocation] = React.useState('');
	const[dateTime,setDateTime] = React.useState('');
	const[cost,setCost] = React.useState('');
	return (
		<>
			<Form>
				<Form.Group className='mb-3' controlId='formTicketName'>
					<Form.Label>Ticket Name</Form.Label>
					<Form.Control 
						type='ticket' 
						placeholder='Name of the ticket you want to sell'
						value={ticket}
						onChange={({target})=>{
							setTicket(target.value);
						}}
					/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formLocation'>
					<Form.Label>Location</Form.Label>
					<Form.Control 
						type='location' 
						placeholder='Location' 
						value={location}
						onChange={({target})=>{
							setLocation(target.value);
						}}/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formDateTime'>
					<Form.Label>Date Time</Form.Label>
					<Form.Control 
						type='dateTime' 
						placeholder='ex. Sunday, 16 October - 7.00pm' 
						value={dateTime}
						onChange={({target})=>{
							setDateTime(target.value);
						}}/>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formCost'>
					<Form.Label>Cost</Form.Label>
					<Form.Control 
						type='cost' 
						placeholder='Cost of the ticket' 
						value={cost}
						onChange={({target})=>{
							setCost(target.value);
						}}/>
				</Form.Group>

				<Button 
					variant='primary' 
					onClick={()=>{
						console.log(ticket);
					}}>
					Submit
				</Button>
			</Form>
		</>
	);
};

export default EventForm;
