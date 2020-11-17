const NavLink = ({ navItemTitle, active, onClick }) => {
	const textOpacity = active === navItemTitle.toLowerCase() ? 'font-bold' : '';

	return (
		<>
			<p
				className={`${textOpacity} company-colors cursor-pointer font-sans block mt-4 lg:inline-block lg:mt-0 mr-4`}
				onClick={onClick}
			>
				{navItemTitle}
			</p>
		</>
	);
};

export default NavLink;
