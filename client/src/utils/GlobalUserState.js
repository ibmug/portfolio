import React, { useReducer, useContext, createContext } from "react";

const INITIAL_USER_STATE = {
	isLogged: false,
	user: "",
};

const UserStoreContext = createContext(INITIAL_USER_STATE);
const { Provider } = UserStoreContext;

function reducer(state, action) {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				isLogged: true,
				user: action.data.user,
			};
		case "LOGOUT":
			return INITIAL_USER_STATE;

		default:
			return state;
	}
}

const UserStoreProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_USER_STATE);

	const login = (userId, user) => {
		dispatch({ type: "LOGIN", data: { userId, user } });
	};

	const logout = () => {
		dispatch({ type: "LOGOUT" });
	};
	return (
		<Provider value={{ login, logout, isLogged: state.isLogged }} {...props} />
	);
};

const useUserStoreContext = () => {
	return useContext(UserStoreContext);
};

export { UserStoreProvider, useUserStoreContext };

// function TodoProvider({ value = [], ...props }) {
//   const [state, dispatch] = useReducer(reducer, []);

//   return <Provider value={[state, dispatch]} {...props} />;
// }

// function useTodoContext() {
//   return useContext(TodoContext);
// }

// export { TodoProvider, useTodoContext };
