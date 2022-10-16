import EventCard from '../components/EventCard';
import axios from 'axios';
import {useState, useContext, useEffect} from 'react';
import {Context} from '../context/GlobalContext';

const Home = ()=>{
	const userId = useContext(Context);
	const [eventsData, setEventsData] = useState();
	useEffect(()=>{
		console.log(userId);

		console.log('GETTING EVENTS');

		axios.get('http://localhost:5001/api/v1/tickets').then((response)=>{
			const data = response.data.tickets;
			setEventsData(data);
		});
	}, []);
	return (
		<div>
			{eventsData &&
				eventsData.map((event)=>{
					console.log(event);
					return (
						<EventCard key={event.tickets_id} title={event.name} location={event.location} time={event.date} cost={event.cost} userID={event.user_id} contact={event.contact} />
					);
				})}
		</div>
	);
};
export default Home;
