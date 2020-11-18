const NavLink = ({ navItemTitle, active, onClick, disabled }) => {
	let dynamicClass = '';

	if (active === navItemTitle.toLowerCase()) {
		dynamicClass = 'font-bold';
	}

	if (disabled) {
		dynamicClass = 'disabled';
	}

	return (
		<>
			<p
				className={`${dynamicClass} company-colors cursor-pointer block mt-4 lg:inline-block lg:mt-0 mr-4`}
				onClick={disabled ? null : onClick}
				title={disabled ? 'Currently disabled' : navItemTitle}
			>
				{navItemTitle}
			</p>
		</>
	);
};

export default NavLink;
