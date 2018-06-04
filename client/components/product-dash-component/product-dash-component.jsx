import React from 'react';
import { Header } from 'semantic-ui-react';
import { categories_db } from "/shared/collections/categories";

/**
 * props: {category-name}
 */
export class ProductsDashComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header
					as="h2"
					textAlign="center"
				>
					<Header.Content>
						{
							this.props['category-name']
						}
					</Header.Content>
					<Header.Subheader>
						{
							(() => {
								let category = categories_db.findOne({
									name: this.props['category-name']
								});
								if (category) {
									return category['description'];
								} else {
									return "";
								}
							})()
						}
					</Header.Subheader>
				</Header>
			</div>
		);
	}

}
