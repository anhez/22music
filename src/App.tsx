import { useState } from "react"
import "./App.css"

const App = function () {
	const [count, setCount] = useState(0)

	const atom = {
		value: 1,
	}
	console.log(count, setCount, atom)

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
