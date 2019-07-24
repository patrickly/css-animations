import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Layout extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<div class="container">
				<ul class="menu">
					<li>
						Products
						<ul>
							<li>item1</li>
							<li>item2</li>
							<li>item3</li>
						</ul>
					</li>
					<li>Store</li>
					<li>Gender</li>
				</ul>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
