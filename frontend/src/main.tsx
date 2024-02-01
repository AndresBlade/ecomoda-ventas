import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './assets/normalize.css';
import './assets/global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SalesPage, ClientsPage } from './pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <div>Bienvenido a ecomoda</div> },
			{ path: 'clientes', element: <ClientsPage /> },
			{ path: 'ventas', element: <SalesPage /> },
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
