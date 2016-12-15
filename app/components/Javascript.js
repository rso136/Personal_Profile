var React = require('react');
var Router = require('react-router');

var Items = require('./menu/Items');

var Javascript = React.createClass({

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
							<a href="https://arcane-mountain-40771.herokuapp.com/" target="_blank"><img className="portImg" src="assets/images/nintendo.png"></img></a>
							<div className="caption">
								<h4><b>NINTENDO HANGMAN</b></h4>
								<p>For the 80s gamer kids out there, blow the dust off your Nintendo cartridges and see if you are truly a part of the NES generation by completing this classic NES hangman challenge programmed entirely through javascript!</p>
								<div className="portOptions">
									<a href="https://arcane-mountain-40771.herokuapp.com/" target="_blank"><i className="fa fa-play-circle fa-3x" aria-hidden="true"></i></a><a href="https://github.com/rso136/Hangman_Game" target="_blank"><i className="fa fa-code-fork fa-3x" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>	
		)

	}

})

module.exports = Javascript;