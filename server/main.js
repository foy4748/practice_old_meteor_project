import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { Mongo } from 'meteor/mongo';
import { tutorial_list } from '../imports/api/tutorials.js';
import { Tutorials } from '../imports/ui/tutorials_db.js';

import '../imports/ui/tutorials_db.js';





Meteor.startup( function()
{
  // code to run on server at startup
  if(Tutorials.find().count() == 0)
  {
  	for (var ii = 0; ii<2; ii++)
  	{
  	Tutorials.insert(tutorial_list[ii]);
  	}
  }
});
