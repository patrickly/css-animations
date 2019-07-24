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
			<div className="container">
				<ul className="menu">
					<li>
						Products
						<ul className="first">
							<li>
								item1
								<ul className="second">
									<li>
										item1
										<ul className="third">
											<li>item1</li>
											<li>item2</li>
											<li>item3</li>
										</ul>
									</li>
									<li>item2</li>
									<li>item3</li>
								</ul>
							</li>
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
