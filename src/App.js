import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import LessonStart from "./components/LessonStart";
import LessonsList from "./components/LessonsList";
import "./App.css";

// Go
import { GlobalProvider } from "./context/GlobalState";
function App() {
	return (
		<GlobalProvider>
			<div className="App">
				<BrowserRouter basename="/">
					<div className="container">
						<div>
							<Navbar />
						</div>
						<div className="main">
							<Switch>
								<Route exact path="/">
									<p>Dashboard</p>
								</Route>
								<Route exact path="/lessons">
									<LessonsList />
								</Route>
								<Route path="/lessons/">
									<LessonStart />
								</Route>
							</Switch>
						</div>
					</div>
				</BrowserRouter>
			</div>
		</GlobalProvider>
	);
}

export default App;
