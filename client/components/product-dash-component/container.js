import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { ProductsDashComponent } from "./product-dash-component";
import { categories_db } from "/shared/collections/categories";

export const ProductsDashComponentContainer = withTracker(() => {
	Meteor.subscribe('categories_db');
	return {
		Meteor: {
			collection: {
				categories: categories_db.find().fetch()
			},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(ProductsDashComponent);
