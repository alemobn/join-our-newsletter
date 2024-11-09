import Logo from './Components/Logo/Logo';
import Title from './Components/Title/Title';
import Paragraph from './Components/Paragraph/Paragraph';
import Form from './Components/Form/Form';
import './App.css';

function App() {
	const components = [
		{ logo: <Logo /> },
		{ title: <Title /> },
		{ paragraph: <Paragraph /> },
		{ form: <Form /> }
	];

	return (
		<div className="container">
			{components.map(function (component, index) {
				return (
					<div key={index}>
						{component.logo}
						{component.title}
						{component.paragraph}
						{component.form}
					</div>
				);
			})}
		</div>
	);
}

export default App;
