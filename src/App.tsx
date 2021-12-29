import { useState } from "react"
import "./styles/app.css"
import { Login } from "./components/Login"

const App = function () {
	const [count, setCount] = useState(0)

	const atom = {
		value: 1,
	}
	console.log(count, setCount, atom)

	return (
		<div className="app">
			<Login />
		</div>
	)
}

export default App
