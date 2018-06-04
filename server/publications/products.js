import { Meteor } from 'meteor/meteor';
import { products_db } from "/shared/collections/products";

Meteor.publish('products_db', () => {
	return products_db.find();
});
