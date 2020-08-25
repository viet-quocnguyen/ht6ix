import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LessonStart from "./components/LessonStart";
import LessonsList from "./components/LessonsList";
import QuestionStyle1 from "./components/QuestionStyle1";
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
									<Redirect to="/home" />
								</Route>
								<Route path="/home">

									<Home />
								</Route>

								<Route exact path="/lessons/question">
									<QuestionStyle1 />
								</Route>
								<Route exact path="/lessons">
									<LessonsList />
								</Route>
								<Route exact path="/lessons/1">
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
