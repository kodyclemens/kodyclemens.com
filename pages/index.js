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
			<hr className="w-full mt-8 company-colors col-start-5 col-end-9" />
			<section className="headingMd col-span-12 flex flex-col mt-4">
				<p className="flex justify-center items-center mb-2">
					<Image
						src="/images/email.png"
						alt="Email"
						width="48px"
						height="48px"
						layout="intrinsic"
						priority={true}
					/>
					<span className="pl-4 text-gray-600 text-sm">
						kody (at) kodyclemens.com
					</span>
				</p>
				<p className="w-full flex justify-center">
					<a
						href="https://github.com/kodyclemens"
						target="_blank"
						rel="noopener noreferrer"
						alt="GitHub"
					>
						<Image
							src="/images/github.png"
							width="48px"
							height="48px"
							layout="intrinsic"
							priority={true}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/kody-clemens/"
						target="_blank"
						rel="noopener noreferrer"
						alt="LinkedIn"
					>
						<Image
							src="/images/linkedin.png"
							width="48px"
							height="48px"
							layout="intrinsic"
							priority={true}
						/>
					</a>
					<a
						href="https://twitter.com/kody_clemens"
						target="_blank"
						rel="noopener noreferrer"
						alt="Twitter"
					>
						<Image
							src="/images/twitter.png"
							alt="Twitter"
							width="48px"
							height="48px"
							layout="intrinsic"
							priority={true}
						/>
					</a>
				</p>
			</section>
		</Page>
	);
}
