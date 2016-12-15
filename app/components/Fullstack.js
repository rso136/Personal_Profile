var React = require('react');
var Router = require('react-router');

var Items = require('./menu/Items');

var Fullstack = React.createClass({

	render: function() {

		return (

			<div className="main-container">
				<Items />
				<div className="row">
					<div className="col-xs-12 col-md-12" id="portTitle">
						
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-6">
						<div className="thumbnail">
							<a href="https://rcblifequest.herokuapp.com/" target="_blank"><img className="portImg" src="assets/images/lifequest.png"></img></a>
							<div className="caption">
								<h4><b>LIFE QUEST</b></h4>
								<p>Awaken the adventurer within you by transforming your mundane and signficant tasks into a quest for self-improvement. Assign challenge levels to your every day tasks and attain experience and skill points. Gain enough points and break into the leaderboard!</p>
								<div className="portOptions">
									<a href="https://rcblifequest.herokuapp.com/" target="_blank"><i className="fa fa-play-circle fa-3x" aria-hidden="true"></i></a><a href="https://github.com/salszu/goalKeeper" target="_blank"><i className="fa fa-code-fork fa-3x" aria-hidden="true"></i></a>
								</div>		
							</div>
						</div>
					</div>


					<div className="col-xs-12 col-md-6">
						<div className="thumbnail">
							<a href="https://rcbsolver.herokuapp.com/" target="_blank"><img className="portImg" src="assets/images/solver.png"></img></a>
							<div className="caption">
								<h4><b>SOLVER</b></h4>
								<p>Solver is a simple, practical application designed to assist the user in evaluating options for everyday decisions and problems. This app was created for situations where a person may need to analyze available options when stuck at the crossroad between a variety of choices.</p>
								<div className="portOptions">
									<a href="https://rcbsolver.herokuapp.com/" target="_blank"><i className="fa fa-play-circle fa-3x" aria-hidden="true"></i></a><a href="https://github.com/rso136/Solver"><i className="fa fa-code-fork fa-3x" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</div>	
		)

	}

})

module.exports = Fullstack;