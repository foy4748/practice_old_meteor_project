//Calling Master Layout
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});
//////////////////////


//Routing to different templates

/////////Home Page///////////////
Router.route('/', function () {
  this.render('navi' 	 	, {to: "navbar"} );
  this.render('home_page'	, {to: "main"});
});

///////Setup_Compiler////////////
Router.route('/Setup_Compiler', function () {
	this.render('navi'				, {to: "navbar"});	
	this.render('setup_compiler'	, {to: "main"});
	
});

///////Tutorials////////////////
Router.route('/Tutorials', function () {
	this.render('navi'				, {to: "navbar"});	
	this.render('tutorials'	, {to: "main"});
	
});

Router.route('/Profile', function () {
	this.render('navi'				, {to: "navbar"});	
	this.render('profile'	, {to: "main"});
	
});



////////////////////////////////