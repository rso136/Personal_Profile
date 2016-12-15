var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute	= Router.IndexRoute;

var Main = require('../components/Main');
var About = require('../components/About');
var Portfolio = require('../components/Portfolio'); 
var Javascript = require('../components/Javascript');
var Node = require('../components/Node');
var ReactJS = require('../components/ReactJS');
var Fullstack = require('../components/Fullstack');


module.exports = (

		<Route path='/' component={Main}>

			<Route path='About' component={About} />
			<Route path='Portfolio' component={Portfolio} />
			<Route path='Javascript' component={Javascript} />
			<Route path='Node' component={Node} />
			<Route path='ReactJS' component={ReactJS} />
			<Route path='Fullstack' component={Fullstack} />

		<IndexRoute component={Portfolio} />	

		</Route>

);