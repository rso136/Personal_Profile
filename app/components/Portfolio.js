var React = require('react');
var Router = require('react-router');

var Portfolio = React.createClass({

	render: function() {

		return (

			<div className="main-container">
				<div className="row">
					<div className="col-xs-12 col-md-12" id="portTitle">
						<h2 className="heading" id="portHeading">CHOOSE A TECHNOLOGY</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-3 iconDiv">
						<a href="#/javascript" className="hvr-underline-from-center">
							<img className="icon" src="assets/images/javascript.png"></img>
							<h3>JAVASCRIPT</h3>
						</a>
					</div>
					<div className="col-xs-12 col-md-3 iconDiv">
						<a href="#/angularJS" className="hvr-underline-from-center">	
							<img className="icon" src="assets/images/angular.png"></img>
							<h3>ANGULARJS</h3>
						</a>	
					</div>
					<div className="col-xs-12 col-md-3 iconDiv">
						<a href="#/reactJS" className="hvr-underline-from-center">	
							<img className="icon" src="assets/images/react.png"></img>
							<h3>REACTJS</h3>
						</a>
					</div>
					<div className="col-xs-12 col-md-3 iconDiv">
						<a href="#/fullstack" className="hvr-underline-from-center">
							<img className="icon" src="assets/images/fullstack.png"></img>
							<h3>FULL STACK</h3>
						</a>
					</div>
				</div>
			</div>	
		)

	}

})

module.exports = Portfolio;