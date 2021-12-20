import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"

const App = function () {
	const [count, setCount] = useState(0)

	const aaaa = 19
	const a = 10
	const atom = {
		value: 1,
		addValue(value: string) {
			return atom.value + value
		},
	}
	const b = 1
	console.log(logo, count, setCount, aaaa, a, item, b)
	return (
		<div className="app">
			<header className="header">this is header</header>
			<div className="body">
				<div className="sidebar">this is side bar</div>
				<div className="content">this is content area</div>
			</div>
		</div>
	)
}

export default App
