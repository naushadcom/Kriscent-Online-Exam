import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Admin from "./pages/admin/Admin";
import User from "./pages/user/User";
function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/signup"
					element={<Signup />}
				/>
				<Route
					path="admin"
					element={<Admin />}
				/>
				<Route
					path="user"
					element={<User />}
				/>
			</Routes>
		</div>
	);
}

export default App;
