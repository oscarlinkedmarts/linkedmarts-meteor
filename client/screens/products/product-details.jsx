import React from 'react';
import {ProductDetailsComponentContainer} from "../../components/product-details-component/container";

export class ProductDetails extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ProductDetailsComponentContainer
				product-id={this.props.params['_id']}
			/>
		);
	}

}
