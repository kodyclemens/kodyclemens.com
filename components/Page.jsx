import Head from 'next/head';

import Nav from '../components/Nav';

export default function Page({
	children,
	activeTab,
	siteTitle = 'Kody Clemens',
}) {
	const strippedTitle = siteTitle.replace(/\*/g, '');

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Kody Clemens' Personal Website" />
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fsvgur.com%2Fi%2FRZm.svg&widths=undefined&widths=350&heights=undefined&heights=50`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<title>{strippedTitle}</title>
			</Head>
			<Nav activeTab={activeTab} />
			<div className="grid grid-cols-12 mt-8">{children}</div>
		</>
	);
}
