import "./Contact.css";
import ContactForm from "./ContactForm";
import { HiOutlineMail } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const contactCards = [
	{
		icon: <HiOutlineMail />,
		title: "Email",
		info: "claudiuszidelo@yahoo.ro",
		path: "mailto:claudiuszidelo@yahoo.ro",
	},
	{
		icon: <RiMessengerLine />,
		title: "Messenger",
		info: "Szidelo Claudiu",
		path: "https://m.me/szidelo",
	},
	{
		icon: <BsWhatsapp />,
		title: "Whatsapp",
		info: "+40758870906",
		path: "https://wa.me/+40758870906",
	},
];

const Contact = () => {
	return (
		<div className="contact container row mx-auto mt-5">
			<div className="col-12 col-xl-4 p-2 p-sm-5">
				<div className="d-flex flex-column gap-4">
					{contactCards.map((card, index) => (
						<article
							key={index}
							className="contact__option"
						>
							<div>{card.icon}</div>
							<div>
								<h4 className="heading-m">{card.title}</h4>
								<h5 className="body">{card.info}</h5>
								<a
									href={card.path}
									target="_blank"
									rel="noopener noreferrer"
								>
									Send a message
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
			<div className="col-12 form-container col-xl-8 p-2 p-sm-5 mb-5">
				<ContactForm />
			</div>
		</div>
	);
};

export default Contact;
