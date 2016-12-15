var React = require('react');
var Router = require('react-router');

var Main = React.createClass({

	render: function() {

		return (
			<div className="main-container">
				<nav className="navbar navbar-default">
					<div className="container-fluid">
						<a className="navbar-brand navbar-right" href="#">Richard Oh</a>
					    <div className="navbar-header">
					      	<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
					        	<span className="icon-bar"></span>
					        	<span className="icon-bar"></span>
					        	<span className="icon-bar"></span> 
					        </button>
					      	
						</div>
					    <div className="collapse navbar-collapse" id="myNavbar">
					      	<ul className="nav navbar-nav">
					        	<li className="menuOption"><a href="#/about" className="hvr-glow"><b>ABOUT</b></a></li>
					        	<li className="menuOption"><a href="#/portfolio" className="hvr-glow"><b>PORTFOLIO</b></a></li> 
					        	<li className="menuOption"><a href="" className="hvr-glow" data-toggle="modal" data-target="#myModal"><b>CONTACT</b></a></li> 
					      	</ul>
						</div>
					</div>
				</nav>
				<div className="container">
				  	<div className="modal fade" id="myModal" role="dialog">
				    	<div className="modal-dialog modal-sm">
				      		<div className="modal-content">
				        		<div className="modal-header">
				          			<button type="button" className="close" data-dismiss="modal">&#10006;</button>
				          			<h3 className="modal-title"><b>Contact Info</b></h3>
				        		</div>
				        		<div className="modal-body">
				          			<h4><b>Email:</b></h4>
				          			<a href="mailto:rso136@gmail.com" target="_blank" className="hvr-float-shadow"><b>rso136@gmail.com</b></a>
				          			<br />
				          			<br />
									<h4><b>Linkedin:</b></h4>
				          			<a href="https://www.linkedin.com/in/richardsoh" target="_blank" className="hvr-float-shadow"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
				        		</div>
				      		</div>
				    	</div>
				  	</div>

					{this.props.children}

				</div>
				<div className="row">
					<div className="col-xs-12 col-md-12" id="siteMap">
						<div className="col-xs-12 col-md-4 col-md-offset-4" id="blockB">
							<h4><b>Get in Touch:</b></h4>

								<a href="https://www.linkedin.com/in/richardsoh" target="_blank"><i className="fa fa-linkedin-square fa-2x contactLink" aria-hidden="true"></i></a>
								<a href="https://github.com/rso136" target="_blank"><i className="fa fa-github-square fa-2x contactLink" aria-hidden="true"></i></a>
								<a href="mailto:rso136@gmail.com" target="_blank"><i className="fa fa-envelope fa-2x contactLink" aria-hidden="true"></i></a>
	
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-12" id="footer">
						<p id="copyright"><b>© Richard Oh</b></p>
					</div>
				</div>

			</div>
		)

	}

})

module.exports = Main;