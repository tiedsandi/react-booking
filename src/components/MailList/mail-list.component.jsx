import "./mail-list.style.scss";

const MailList = () => {
	return (
		<div className="mail">
			<div className="mail-title">Save time, save money!</div>
			<span className="mail-desc">
				Sign up and we'll send the best deal to you
			</span>
			<div className="mail-input-container">
				<input type="text" placeholder="Your Email" />
				<button>Subscribe</button>
			</div>
		</div>
	);
};

export default MailList;
