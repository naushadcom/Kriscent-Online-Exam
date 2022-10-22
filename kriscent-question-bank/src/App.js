import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Admin from "./pages/admin/Admin";
import Student from "./pages/Student/Student";
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
					element={<Student/>}
				/>
			</Routes>
		</div>
	);
}

export default App;
