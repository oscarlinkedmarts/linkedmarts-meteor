import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';
import { withTracker } from 'meteor/react-meteor-data';
import { ProductDetails } from "./product-details";

FlowRouter.route('/products/:_id', {
	action: (params) => {
		mount(ProductDetailsContainer, {
			params: params
		});
	}
});

export const ProductDetailsContainer = withTracker(() => {
	return {
		Meteor: {
			collection: {},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(ProductDetails);
