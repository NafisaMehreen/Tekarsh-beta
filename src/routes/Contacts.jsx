import React, { useMemo } from 'react';
import { Navbar } from '../Navbar.jsx';
import { TekarshFooter } from '../components/TekarshFooter.jsx';
import { AuroraBackground } from '../components/ui/aurora-background.jsx';
import { Mail, MapPin, ArrowRight } from 'lucide-react';

export const Contacts = () => {
	const contactEmail = 'contact@tekarsh.com';
	const usaEmail = 'usa@tekarsh.com';
	const bdEmail = 'bd@tekarsh.com';

	const mailtoHref = useMemo(() => {
		const subject = encodeURIComponent('New enquiry via Tekarsh website');
		const body = encodeURIComponent(
			'Hi Tekarsh Team,%0D%0A%0D%0A' +
			"I would like to discuss a new project. Here's a quick summary:%0D%0A%0D%0A" +
			'- Company:%0D%0A' +
			'- Budget/Timeline:%0D%0A' +
			'- Goals:%0D%0A%0D%0A' +
			'Thanks!'
		);
		return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
	}, [contactEmail]);

	return (
		<div className="font-sans text-gray-900 scroll-smooth bg-neutral-100 min-h-screen">
			{/* Navigation */}
			<div className="fixed top-0 w-full z-50">
				<Navbar />
			</div>

			{/* Hero */}
			<section className="pt-[85px]">
				<AuroraBackground className="py-20 sm:py-24 lg:py-32">
					<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
						<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
							We’ve got a great feeling about this
						</h1>
						<p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
							Submit a brief or drop us a line. We work globally and would love to hear about your goals.
						</p>
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
							<a href="#contact-form" className="bg-green-700 hover:bg-green-800 text-white font-semibold flex items-center justify-center text-base md:text-lg px-8 py-4 rounded-xl transition-colors duration-200 min-touch-target">
								Submit a brief
								<ArrowRight className="ml-2 w-5 h-5" />
							</a>
							<a href={mailtoHref} className="bg-transparent border border-green-700 text-green-700 hover:bg-green-50 font-semibold flex items-center justify-center text-base md:text-lg px-8 py-4 rounded-xl transition-colors duration-200 min-touch-target">
								Email us
							</a>
						</div>
					</div>
				</AuroraBackground>
			</section>

			{/* Contact Info */}
			<section className="py-16 px-6 md:px-12 lg:px-16 bg-white">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="md:col-span-1">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
						<p className="text-gray-600">We work globally</p>
					</div>
					<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
						<div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center gap-3 mb-3">
								<Mail className="w-5 h-5 text-green-700" />
								<h3 className="text-lg font-semibold">General</h3>
							</div>
							<a href={`mailto:${contactEmail}`} className="text-green-700 font-medium hover:underline break-all">{contactEmail}</a>
						</div>

						<div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center gap-3 mb-1">
								<MapPin className="w-5 h-5 text-green-700" />
								<h3 className="text-lg font-semibold">USA</h3>
							</div>
							<p className="text-gray-600 mb-2">Remote, US</p>
							<a href={`mailto:${usaEmail}`} className="text-green-700 font-medium hover:underline break-all">{usaEmail}</a>
						</div>

						<div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
							<div className="flex items-center gap-3 mb-1">
								<MapPin className="w-5 h-5 text-green-700" />
								<h3 className="text-lg font-semibold">Bangladesh</h3>
							</div>
							<p className="text-gray-600 mb-2">Dhaka</p>
							<a href={`mailto:${bdEmail}`} className="text-green-700 font-medium hover:underline break-all">{bdEmail}</a>
						</div>
					</div>
				</div>
			</section>

			{/* Brief / Contact form */}
			<section id="contact-form" className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold mb-8">Submit a brief</h2>
					<p className="text-gray-700 mb-6">Share a few details and we’ll get back to you.</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							const formData = new FormData(e.currentTarget);
							const name = String(formData.get('name') || '');
							const email = String(formData.get('email') || '');
							const company = String(formData.get('company') || '');
							const message = String(formData.get('message') || '');
							const subject = encodeURIComponent(`Project enquiry from ${name || 'Website'}`);
							const body = encodeURIComponent(
								`Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
							);
							window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
						}}
						className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
								<input id="name" name="name" type="text" required className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" placeholder="Your name" />
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
								<input id="email" name="email" type="email" required className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" placeholder="you@company.com" />
							</div>
							<div>
								<label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company</label>
								<input id="company" name="company" type="text" className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" placeholder="Company name (optional)" />
							</div>
							<div>
								<label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget</label>
								<select id="budget" name="budget" className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-600">
									<option value="Not sure">Not sure</option>
									<option value="Under $10k">Under $10k</option>
									<option value="$10k – $50k">$10k – $50k</option>
									<option value="$50k – $100k">$50k – $100k</option>
									<option value="$100k+">$100k+</option>
								</select>
							</div>
							<div className="md:col-span-2">
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project</label>
								<textarea id="message" name="message" required rows={6} className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-green-600" placeholder="Goals, timeline, constraints, success metrics..." />
							</div>
						</div>

						<div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
							<button type="submit" className="bg-green-700 hover:bg-green-800 text-white font-semibold flex items-center justify-center text-base md:text-lg px-8 py-4 rounded-xl transition-colors duration-200 min-touch-target">
								Send enquiry
								<ArrowRight className="ml-2 w-5 h-5" />
							</button>
							<a href={`mailto:${contactEmail}`} className="text-green-700 font-medium hover:underline">Or email us directly</a>
						</div>
					</form>
				</div>
			</section>

			{/* Footer */}
			<TekarshFooter />
		</div>
	);
};

export default Contacts;


