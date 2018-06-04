import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { ProductDetailsComponent } from "./product-details-component";
import { categories_db } from "/shared/collections/categories";
import { products_db } from "/shared/collections/products";
import { Files } from "/shared/collections/files";

export const ProductDetailsComponentContainer = withTracker(() => {
	Meteor.subscribe('categories_db');
	Meteor.subscribe('products_db');
	Meteor.subscribe('files_db');
	return {
		Meteor: {
			collection: {
				categories: categories_db.find().fetch(),
				products: products_db.find().fetch(),
				files: Files.find().fetch()
			},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(ProductDetailsComponent);
