import "./App.css";
import Wrapper from "./components/Wrapper";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import {
	UserStoreProvider,
	useUserStoreContext,
} from "./utils/GlobalUserState";

function App() {
	const { isLogged } = useUserStoreContext();

	return (
		<div className="flex-col flex-acenter fh">
			<UserStoreProvider>
				<ReactNotification />
				<Wrapper isLogged={isLogged} />
			</UserStoreProvider>
		</div>
	);
}

export default App;
