import Head from 'next/head';

import '../styles/index.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=B612:wght@400;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
