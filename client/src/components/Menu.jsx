import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

const Menu = ()=>{
	return (
		<>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='#home'>
						<img alt='' src='' width='30' height='30' className='d-inline-block align-top' /> Last Menute Tickets
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link as={Link}>Events</Nav.Link>
							<Nav.Link as={Link}>Add Event</Nav.Link>
							<Nav.Link as={Link}>Login</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Menu;

