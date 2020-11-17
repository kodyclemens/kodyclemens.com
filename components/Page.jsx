import Nav from '../components/Nav';

export default function Page({ children, activeTab }) {
	return (
		<div>
			<Nav activeTab={activeTab} />
			{children}
		</div>
	);
}
