import '../../index.css';
import './Form.css';

function Form() {
	return (
		<form>
			<input placeholder='Enter your email address' type="email" />
			<button>Subscribe now</button>
			<p>Your email is 100% confidential and won’t send you any spam.</p>
		</form>
	);
}

export default Form;
