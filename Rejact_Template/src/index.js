import React from 'react';
import ReactDOM from 'react-dom';


// Skapa en ny Component som skapar lite HTML kod
const App = () => {
	return <div>Heeeej</div>;
}

//Visa det i DOMen

ReactDOM.render(<App />, document.querySelector('.container'));

