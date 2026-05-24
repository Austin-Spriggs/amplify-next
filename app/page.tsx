import { ClientLocation } from './components/ClientLocation';
import { ServerLocation } from './components/ServerLocation';
import { ToDo } from './components/ToDo';

export default function App() {
	return (
		<main>
			<ClientLocation />
			<ServerLocation />

			<ToDo />
		</main>
	);
}
