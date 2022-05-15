import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// if (module.hot && process.env.NODE_ENV === 'development') {
// 	module.hot.accept('./App', () => {
// 		root.render(
// 			<React.StrictMode>
// 				<App />
// 			</React.StrictMode>
// 		);
// 	});
// }
