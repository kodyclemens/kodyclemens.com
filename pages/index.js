import Image from 'next/image';

import Page from '../components/Page';

export default function Home({ children, activeTab }) {
	return (
		<Page siteTitle="Hi, I'm **Kody**">
			<section className="headingMd col-span-12 flex flex-col items-center">
				<Image
					src="/images/profile.png"
					className="rounded-full"
					alt="Kody's profile picture"
					width="256px"
					height="256px"
					layout="intrinsic"
					priority={true}
				/>
				<p className="mt-8">
					Hi, I'm{' '}
					<strong>
						<a
							className="company-colors"
							href="https://www.linkedin.com/in/kody-clemens/"
							target="_blank"
							rel="noopener noreferrer"
							alt="Kody's LinkedIn"
						>
							Kody
						</a>
					</strong>
					, a Software Engineer at&nbsp;
					<a
						href="https://www.go1.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="company-colors"
						alt="Go1 Website"
					>
						<strong>Go1</strong>
					</a>
					.
				</p>
			</section>
		</Page>
	);
}
