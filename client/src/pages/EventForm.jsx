import React from 'react';

const EventForm = ()=>{
	return (
		<body>
			<div class='EventForm'>
				<h1>Add Event</h1>
				<div class='eventForm-group'>
					<label for='ticketName'>Ticket Name: </label>
					<input type='text' id='ticketName'></input>
				</div>
				<div class='eventForm-group'>
					<label for='Location'>Location: </label>
					<input type='text' id='location'></input>
				</div>
				<div class='eventForm-group'>
					<label for='timeDate'>Time/Date : </label>
					<input type='text' id='timeDate'></input>
				</div>
				<div class='eventForm-group'>
					<label for='originalCost'>Original Cost: </label>
					<input type='text' id='originalCost'></input>
				</div>
				<div class='eventForm-group'>
					<label for='contact'>Prefered way to contact: </label>
					<input type='text' id='contact' placeholder='@example'></input>
				</div>
				<button type='submit' value='POST'></button>
			</div>
		</body>
	);
};

export default EventForm;
