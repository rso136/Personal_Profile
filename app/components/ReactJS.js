var React = require('react');
var Router = require('react-router');

var Items = require('./menu/Items');

var ReactJS = React.createClass({

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
							<a href="http://boiling-shelf-50152.herokuapp.com" target="_blank"><img className="portImg" src="assets/images/movie-me.png"></img></a>
							<div className="caption">
								<h4><b>MOVIE-ME</b></h4>
								<p>Movie-Me is a demonstrator app which showcases SPA technology through ReactJS integrated with the Open Movie Database API, and a data persistent backend. Access information about your favorite movies, submit your own ratings and reviews, and see how your analysis stacks up with Rotten Tomatoes' overall consenus.</p>
								<div className="portOptions">
									<a href="http://boiling-shelf-50152.herokuapp.com" target="_blank"><i className="fa fa-play-circle fa-3x" aria-hidden="true"></i></a><a href="https://github.com/rso136/React_Movies" target="_blank"><i className="fa fa-code-fork fa-3x" aria-hidden="true"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>		
		)

	}

})

module.exports = ReactJS;