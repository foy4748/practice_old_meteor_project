import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { Tutorials } from '../ui/tutorials_db.js';
import { Accounts } from 'meteor/accounts-base';
import { ReactiveDict } from 'meteor/reactive-dict'

import './home.html';
import './navi.html';
import './setup_compiler.html';
import './tutorials.html';
import './profile.html';

//For Blogging Package
// Blog.config({
//   basePath: '/myBlog', // '/myBlog', '/myBlog/my-post', '/myBlog/tag/whatever', etc.
//   adminBasePath: '/myBlogAdmin'
// });


//////// Template Helpers ///////////////////////////////////////////////

Template.tutorials.helpers({tutorials:Tutorials.find({}, {sort: {createdAt:-1} } )});

Template.navi.onCreated( function reac(){	//Creating Reactive Dictionary
	this.state = new ReactiveDict();

});


/*	Taken Care of by CSS !! LOL!!
Template.tutorials.helpers({	//Rendering shadow effect for each tutorial thumbnail

'add_shadow':function()
	{
		var hovered_tutorial = this._id;
		var hovered = Session.get("hovered");
		if(hovered_tutorial == hovered)
		{
			return 'selected';
		}
		else
		{
			return '';
		}
	}
});*/

/////// Event Listeners ///////////////////////////////////////////////

////// Show Modal Events //////////
Template.profile.events({

'click #js_add_tutorial_button': function(e)
		{
			Modal.show("add_tutorial_modal");
			return false;
		}
});

////// End of Show Modal Events //////////

///// Nav events 	NOT WORKING!
Template.navi.events({
	'click .Nav_item': function(e)
	{
		$("a").css("background", "#00000000");
		$("a").css("color", "#000000");
		e.target.style.background = ;
		e.target.style.color = '#FFFFFF';

	}
});
//// End of Nav Events

/*////// Get tutorial thumbnail session/////	Taken Care of by CSS but maybe useful in future
Template.tutorials.events({

'mouseover .thumbnail': function(e)
		{
			var tutorial_id = this._id;
			Session.set("hovered", tutorial_id);
			

		},
});
////// End of Get tutorial thumbnail session/////*/

//-------------------------------------------------
//	Modals Listeners
//-------------------------------------------------

///// Tutorial adding Modal Form ///////
Template.add_tutorial_modal.events({

'submit .js_add_tutorial':function(e)
		{
			e.preventDefault();
			var name = e.target.tutorial_name.value;
			var des = e.target.tutorial_description.value;
			var link = e.target.tutorial_cover.value;
			

			if(Meteor.userId()) //// Allowing Logged In users
			{
				//Grabbing username from email address
				var author_ = Meteor.user().emails[0].address.split('@')[0];

				Tutorials.insert({
					tutorial_name: name, 
					tutorial_description: des, 
					tutorial_img: link,
					author: author_,
					createdAt: new Date()
				});

				//Cleaning Form Fields
				e.target.tutorial_name.value = "";
				e.target.tutorial_description.value = "";
				e.target.tutorial_cover.value =  "";
				e.preventDefault();

			}
			else	//// Preventing annonymous users
			{
				//$("#login_form").click();	//Instead of alerting, showing Sign In button
				alert("Forgot to Log In? Please, Log In or Sign Up.");

				//Cleaning Form Fields
				e.target.tutorial_name.value = "";
				e.target.tutorial_description.value = "";
				e.target.tutorial_cover.value =  "";
				e.preventDefault();
				return;
			}

		}
});
///// End of Tutorial adding Modal Form ///////


//-------------------------------------------------
//	/* End of Modals Listeners */
//-------------------------------------------------

/////// End of Event Listeners ///////////////////////////////////////