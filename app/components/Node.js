var React = require('react');
var Router = require('react-router');

var Items = require('./menu/Items');

var Node = React.createClass({

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
							<a href="https://quiet-ocean-92769.herokuapp.com/" target="_blank"><img className="portImg" src="assets/images/friends.png"></img></a>
							<div className="caption">
								<h4><b>FRIENDWAY</b></h4>
								<p>Friendway is a demonstrator Node application which showcases Express.js api routing combined with Jquery programming. No, you won't find real friends through Friendway. But you will see a neat demo that showcases the potential of Express.js with a generous dash of Jquery.</p>
								<div className="portOptions">
									<a href="https://quiet-ocean-92769.herokuapp.com/" target="_blank"><i className="fa fa-play-circle fa-3x" aria-hidden="true"></i></a><a href="https://github.com/rso136/Week13-FriendFinder" target="_blank"><i className="fa fa-code-fork fa-3x" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>		
		)

	}

})

module.exports = Node;