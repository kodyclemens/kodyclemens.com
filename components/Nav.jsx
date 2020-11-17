import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import NavLink from './ui/NavLink';

const Nav = ({ activeTab }) => {
	const [navOpen, setNavOpen] = useState(false);
	const router = useRouter();

	const handleMenuClick = () => {
		setNavOpen(!navOpen);
	};

	const handleNavigation = (name) => {
		router.replace(`/${name}`);
	};

	return (
		<nav className="col-span-12 flex items-center justify-between flex-wrap bg-black bg-opacity-90 p-2">
			<div className="flex items-center flex-shrink-0 text-white lg:mr-24 lg:ml-48">
				<Link href="/">
					<a>
						<span className="font-sans text-2xl tracking-tight">
							Kody Clemens
						</span>
					</a>
				</Link>
			</div>
			<div className="block lg:hidden">
				<button
					className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
					onClick={handleMenuClick}
				>
					<svg
						className="fill-current h-3 w-3"
						viewBox="1 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<title>Menu</title>
						<path
							d={`${
								navOpen
									? 'M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z'
									: 'M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z'
							}`}
						/>
					</svg>
				</button>
			</div>
			<div
				className={`${
					navOpen ? '' : 'hidden'
				} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
			>
				<div className="text-md lg:flex-grow">
					<NavLink
						key="nav1"
						navItemTitle="Experience"
						active={activeTab}
						onClick={() => handleNavigation('experience')}
					/>
					<NavLink
						key="nav2"
						navItemTitle="Skills"
						active={activeTab}
						onClick={() => handleNavigation('skills')}
					/>
					<NavLink
						key="nav3"
						navItemTitle="Projects"
						active={activeTab}
						onClick={() => handleNavigation('projects')}
					/>
					<NavLink
						key="nav4"
						navItemTitle="Education"
						active={activeTab}
						onClick={() => handleNavigation('education')}
					/>
					<NavLink
						key="nav5"
						navItemTitle="Certifications"
						active={activeTab}
						onClick={() => handleNavigation('certifications')}
					/>
					<NavLink
						key="nav6"
						navItemTitle="Blog"
						active={activeTab}
						onClick={() => handleNavigation('blog')}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
