import Page from '../components/Page';
import BahLogo from '../public/images/bah.svg';
import Go1Logo from '../public/images/go1.svg';
import ArmyLogo from '../public/images/army.svg';
import UpworkLogo from '../public/images/upwork-sm.svg';

export default function Experience() {
	return (
		<Page activeTab="experience" siteTitle="Experience">
			<section className="col-start-5 col-end-9 flex flex-col flex-wrap justify-around mt-8">
				<div className="flex items-center mb-8 p-8 shadow transition-all duration-200 ease-in-out transform hover:scale-110 current">
					<a
						href="https://www.go1.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Go1Logo width={200} height={100} />
					</a>
					<div>
						<p className="pl-4 font-bold">Software Engineer</p>
						<p className="pl-4">Remote</p>
						<p className="pl-4">Nov 2020 - Current</p>
					</div>
				</div>
				<div className="flex items-center mb-8 p-8 shadow transition-all duration-200 ease-in-out transform hover:scale-110">
					<a
						href="https://www.boozallen.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<BahLogo width={200} height={35} />
					</a>
					<div>
						<p className="pl-4 font-bold">Software Engineer</p>
						<p className="pl-4">St. Louis, MO</p>
						<p className="pl-4">Sep 2019 - Nov 2020</p>
					</div>
				</div>
				<div className="flex items-center mb-8 p-8 shadow transition-all duration-200 ease-in-out transform hover:scale-110">
					<a
						href="https://www.upwork.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<UpworkLogo width={200} height={55} />
					</a>
					<div>
						<p className="pl-4 font-bold">Software Engineer (Freelance)</p>
						<p className="pl-4">Remote</p>
						<p className="pl-4">Dec 2018 - Jul 2020</p>
					</div>
				</div>
				<div className="flex items-center shadow p-8 transition-all duration-200 ease-in-out transform hover:scale-110">
					<ArmyLogo width={200} height={100} />
					<div>
						<p className="pl-4 font-bold">Military Officer</p>
						<p className="pl-4">Various</p>
						<p className="pl-4">Aug 2012 - Sep 2019</p>
					</div>
				</div>
			</section>
		</Page>
	);
}
