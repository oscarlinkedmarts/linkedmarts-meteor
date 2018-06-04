import React from 'react';
import { ProductsDashComponentContainer } from "../../components/product-dash-component/container";

export class ProductsDash extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ProductsDashComponentContainer
				category-name={this.props.params['category']}
			/>
		);
	}

}
