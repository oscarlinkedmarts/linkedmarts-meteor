import { Meteor } from 'meteor/meteor';
import { categories_db } from "/shared/collections/categories";

Meteor.publish('categories_db', () => {
	return categories_db.find();
});
