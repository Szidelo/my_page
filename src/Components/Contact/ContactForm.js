import './Contact.css'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

const ContactForm = () => {
	const form = useRef();

	const [isEmailSent, setIsEmailSent] = useState(false)
	const [name, setName] = useState('')
	const [mail, setMail] = useState('')
	const [message, setMessage] = useState('')

	const [emailIsValid, setEmailIsValid] = useState(true)
	const [isValid, setIsValid] = useState(true)

	const sendEmail = (e) => {
		e.preventDefault();

		if(!emailRegex.test(mail)) {
			setEmailIsValid(false)
			setIsValid(false)
			return
		} else {
			setEmailIsValid(true)
			setIsValid(true)
		}

		if(name === "" || mail === "" || message === "") {
			setIsValid(false)
			return
		} else {
			setIsValid(true)
		}

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
		setName('')
		setMail('')
		setMessage('')
	};

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
				value={name}
				onChange={(e) => setName(e.target.value)}
				
			/>
			<input
				type="text"
				placeholder="email"
				name="email"
				value={mail}
				onChange={(e) => setMail(e.target.value)}
				
			/>
			{!emailIsValid && <p className='body color-error'>invalid email</p>}
			<textarea
				type="text"
				placeholder="message"
				name="message"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				
			/>
			{!isValid && <p className='body color-error align-self-start'>Please fill out all fields</p>}
			<button type="submit" className="btn-portfolio">contact</button>
			{isEmailSent && <p className="body align-self-start">Email sent! Thank you!</p>}
		</form>
	);
};

export default ContactForm;
