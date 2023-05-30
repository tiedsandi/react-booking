import './navbar.style.scss';

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='nav-container'>
				<span className='logo'>BookingApp</span>
				<div className='nav-items'>
					<button className='nav-btn'>Register</button>
					<button className='nav-btn'>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
