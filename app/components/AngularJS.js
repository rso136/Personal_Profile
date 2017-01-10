var React = require('react');
var Router = require('react-router');

var Items = require('./menu/Items');

var AngularJS = React.createClass({

	render: function() {

		return (

			<div className="main-container">
				<Items />
				<div className="row">
					<div className="col-xs-12 col-md-12" id="portTitle">
						
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-6 col-md-offset-3">
						<div className="thumbnail">
							<a href="http://guarded-savannah-77228.herokuapp.com" target="_blank"><img className="portImg" src="assets/images/destination.png"></img></a>
							<div className="caption">
								<h4><b>DESTINATION</b></h4>
								<p>Destination is a demonstrator app which showcases AngularJS proficiency integrated with APIs provided through Bing Maps, Open Weather Map, and Eventful. Access instant traffic, weather, and event information for your destinations throughout the U.S..</p>
								<div className="portOptions">
									<a href="http://guarded-savannah-77228.herokuapp.com" target="_blank"><i className="fa fa-play-circle fa-3x" aria-hidden="true"></i></a><a href="https://github.com/rso136/Destination" target="_blank"><i className="fa fa-code-fork fa-3x" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>		
		)

	}

})

module.exports = AngularJS;