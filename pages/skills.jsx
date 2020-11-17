import Page from '../components/Page';

import JsLogo from '../public/images/js.svg';
import TsLogo from '../public/images/ts.svg';
import ReactLogo from '../public/images/react.svg';

export default function Skills() {
	return (
		<Page activeTab="skills" siteTitle="Kody Clemens - Skills">
			<section className="col-start-5 col-end-9 flex flex-wrap justify-around mt-8">
				<h2 className="headingMd w-full text-center mb-8">
					<strong>Core</strong>
				</h2>
				<div className="flex flex-col items-center">
					<JsLogo width={100} height={100} fill="#000" />
					<p>JavaScript</p>
				</div>
				<div className="flex flex-col items-center">
					<TsLogo width={100} height={100} />
					<p>TypeScript</p>
				</div>
				<div className="flex flex-col items-center">
					<ReactLogo width={100} height={100} />
					<p>React</p>
				</div>
				<hr className="w-full mt-8 company-colors" />
				<div className="w-full mt-8 flex flex-col items-center">
					<ul>
						<li>
							<strong>The rest</strong>
						</li>
						<li>- Apollo Client</li>
						<li>- AWS</li>
						<li>- CSS</li>
						<li>- Confluence</li>
						<li>- Fortify</li>
						<li>- Git</li>
						<li>- GraphQL</li>
						<li>- HTML</li>
						<li>- Jenkins</li>
						<li>- Jira</li>
						<li>- Material UI</li>
						<li>- Redux</li>
						<li>- Ruby</li>
						<li>- Ruby on Rails</li>
						<li>- SQL</li>
					</ul>
				</div>
			</section>
		</Page>
	);
}
