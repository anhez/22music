import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
	const [count, setCount] = useState(0)

	var aaaa = 19
	const a = 10
	const atom = {
            value: 1,
            addValue: function (value: string) {
                return atom.value + value
            },
	}
	const item = new Object()
				var b=1
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
