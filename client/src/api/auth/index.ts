import axios from "axios";
import { HandleSignInProps } from "./types";
import { IUser } from "../../contexts/AuthContext/types";

export const handleSignIn = async ({
	email,
	password,
	navigate,
	setAuthenticated,
	setUser,
}: HandleSignInProps) => {
	try {
		const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth`, {
			email,
			password,
		});

		const { _id: id, firstName, lastName, token } = await response.data;
		const user: IUser = { id, firstName, lastName, token };

		if (!id) {
			throw new Error();
		}

		setAuthenticated(true);
		setUser(user);
		navigate("/");
	} catch (error) {
		console.log(error);
		alert("Credenciais inválidas!");
	}
};
