import { Meteor } from 'meteor/meteor';
import { mount } from 'react-mounter';
import { withTracker } from 'meteor/react-meteor-data';
import { ProductsDash } from "./products-dash";

FlowRouter.route('/categories/:category', {
	action: (params) => {
		mount(ProductsDashContainer, {
			params: params
		});
	}
});

export const ProductsDashContainer = withTracker(() => {
	return {
		Meteor: {
			collection: {},
			user: Meteor.user(),
			userId: Meteor.userId(),
			status: Meteor.status(),
			loggingIn: Meteor.loggingIn()
		}
	};
})(ProductsDash);
