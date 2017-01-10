var React = require('react');
var Router = require('react-router');

var Items = React.createClass({

	render: function() {

		return (

			<div className="main-container">
				<div className="row menuBar">
						<div className="col-xs-2 col-xs-offset-2 col-md-1 col-md-offset-4">
							<a href="#/javascript" className="hvr-grow">	
								<img src="assets/images/javascript.png" className="img-responsive icon" alt="Responsive image"></img>
							</a>
						</div>
						<div className="col-xs-2 col-md-1">
							<a href="#/angularJS" className="hvr-grow">
								<img src="assets/images/angular.png" className="img-responsive icon" alt="Responsive image"></img>
							</a>
						</div>
						<div className="col-xs-2 col-md-1">
							<a href="#/reactJS" className="hvr-grow">
								<img src="assets/images/react.png" className="img-responsive icon" alt="Responsive image"></img>
							</a>
						</div>
						<div className="col-xs-2 col-md-1">
							<a href="#/fullstack" className="hvr-grow">
								<img src="assets/images/fullstack.png" className="img-responsive icon" alt="Responsive image"></img>
							</a>
						</div>
				</div>
			</div>	
		)

	}

})

module.exports = Items;