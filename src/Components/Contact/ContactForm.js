import './Contact.css'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
	const form = useRef();

	const [isEmailSent, setIsEmailSent] = useState(false)

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_kvzd81h",
				"template_0hkc0pf",
				form.current,
				"yc9EDnZIlelh6XRF8"
			)
			.then(
				(result) => {
					console.log(result.text);

					if(result.text === "OK") {
						setIsEmailSent(true)
					}
				},
				(error) => {
					console.log(error.text);
				}
			);

		
		e.target.reset();
	};

	console.log(sendEmail)

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className='mb-5'
		>
			<h2 className='heading-m me-auto'>{!isEmailSent ? 'Send a Email' : 'I will replay as soon as possible'}</h2>
			<input
				type="text"
				placeholder="user"
				name="name"
				required
			/>
			<input
				type="email"
				placeholder="email"
				name="email"
				required
			/>
			<textarea
				type="text"
				placeholder="message"
				name="message"
				required
			/>
			<button type="submit" className="btn-portfolio">contact</button>
			{isEmailSent && <p className="body align-self-start">Email sent! Thank you!</p>}
		</form>
	);
};

export default ContactForm;
