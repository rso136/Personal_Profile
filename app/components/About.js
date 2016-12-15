var React = require('react');
var Router = require('react-router');

var About = React.createClass({

	render: function() {

		return (

			<div className="main-container">
				<div className="row">
					<div className="col-xs-12 col-md-12" id="headingBlock">
						<h2 className="heading">MY JOURNEY</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-12">
						<img src="assets/images/profileB.jpg" id="pairImg" height="185" width="185"></img>
						<p>	In the spring of 2016, following ten years of service in the ministry, I decided to take a first step in achieving my goal of becoming a bi-vocational pastor and pursued an education in web development. What unites what would otherwise seem like two disparate vocations is my desire to serve my community in a way that is not self-seeking but rather in a way that is genuinely looking out for the best interest of others.</p>
						<img src="assets/images/scenery.jpg" className="img-circle" id="aboutImgA" height="185" width="185"></img>
						<p className="script"><i>“...wouldn't you want to be a person who does not need honour – nor is afraid of it? Someone who does not lust for recognition – nor, on the other hand, is frightened to death of it? Don't you want to be the kind of person who, when they see themselves in a mirror or reflected in a shop window, does not admire what they see but does not cringe either? Wouldn't you like to be the type of person who, in their imaginary life, does not sit around fantasizing about hitting self-esteem home-runs, daydreaming about successes that gives them the edge over others? Or perhaps you tend to beat yourself up and to be tormented by regrets. Wouldn't you like to be free of them?  Wouldn't you like to be the skater who wins the silver, and yet is thrilled about those three triple jumps that the gold medal winner did? To love it the way you love a sunrise? Just to love the fact that it was done? For it not to matter whether it was their success or your success. Not to care if they did it or you did it. You are happy that they did it as if you had done it yourself – because you are just so happy to see it.” </i></p>
						<p className="script"><i>- Tim Keller, The Freedom of Self-Forgetfulness</i></p>
						<p>I am convinced that the sort of freedom summarized in the quote above is at the heart of authentic humility and it captures the essence of my vision for work. As a follower of Jesus Christ, His message of humble freedom informs the way I understand my work and my life as a whole.
Succinctly put, I desire to be characterized by the sort of humility that looks outward and does good, not for the sake of self promotion but rather for its own sake, simply out of love for God and love for others.</p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-12" id="quote">
						<p className="script"><i>"To get even near it, even for a moment, is like a drink of cold water to a man in a desert.”</i></p>
						<p className="script"><i>- C.S. Lewis</i></p>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-12 col-md-4 col-md-offset-1" id="skillsA">
						<h3>Full Stack Web Proficiencies:</h3>	
							<ul>
								<li>HTML / CSS / Javascript</li>
								<li>Jquery</li>
								<li>Node.js</li>
								<li>ReactJS</li>
								<li>Database Management: MySQL & MongoDB</li>
							</ul>
					</div>
					<div className="col-xs-12 col-md-4 col-md-offset-2" id="skillsB">
						<h3>Communication Skills:</h3>
							<ul>
								<li>Academic Writing - Undergrad Studies in English Literature / Graduate Degree in Theology & Biblical Studies</li>
								<li>10 years of public speaking experience</li>
								<li>Counseling - Ordained minister since 2013</li>
							</ul>
					</div>	
				</div>
		
		</div>	
		)

	}

})

module.exports = About;