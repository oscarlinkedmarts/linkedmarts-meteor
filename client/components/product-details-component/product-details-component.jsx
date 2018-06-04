import React from 'react';
import { Button, Card, Grid, Header } from 'semantic-ui-react';
import { products_db } from "/shared/collections/products";
import { Files } from "/shared/collections/files";

/**
 * props: {product-id}
 */
export class ProductDetailsComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			image: null
		}
	}

	render() {
		return (
			<div>
				<Grid
					divided="vertically"
				>
					<Grid.Row
						columns={2}
					>
						<Grid.Column>
							<Card>
								<div
									className="blurring dimmable image"
								>
									<div
										className="ui dimmer"
									>
										<div
											className="content"
										>
											<div
												className="center"
											>
												<div
													className="ui inverted button"
													onClick={() => {
														$("input[type='file']").click();
													}}
												>
													upload picture
												</div>
											</div>
										</div>
									</div>
									<img
										src={(() => {
											if (this.state['image']) {
												let file = Files.findOne({
													_id: this.state['image']
												});
												if (file) {
													return file.link();
												} else {
													return "/res/img/no-image.png";
												}
											} else {
												return "/res/img/no-image.png";
											}
										})()}
									/>
									<input
										type="file"
										hidden
									/>
								</div>
								<Card.Content>
									<Card.Header>

									</Card.Header>
								</Card.Content>
							</Card>
						</Grid.Column>
						<Grid.Column>
							<Header
								as="h2"
							>
								<Header.Content>
									{
										(() => {
											let product = products_db.findOne({
												_id: this.props['product-id']
											});
											if (product) {
												return product['name']
											} else {
												return "";
											}
										})()
									}
								</Header.Content>
								<Header.Subheader>
									{
										(() => {
											let product = products_db.findOne({
												_id: this.props['product-id']
											});
											if (product) {
												return product['description']
											} else {
												return "";
											}
										})()
									}
								</Header.Subheader>
								<Header.Subheader>
									price: $
									{
										(() => {
											let product = products_db.findOne({
												_id: this.props['product-id']
											});
											if (product) {
												return product['price']
											} else {
												return "";
											}
										})()
									}
								</Header.Subheader>
							</Header>
							<Button
								style={{
									"backgroundColor": "#4CAF50"
								}}
								onClick={() => {

								}}
							>
								Add to Shopping Bag
							</Button>
							<Button
								onClick={() => {

								}}
							>
								Add to Wish List
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}

	componentDidMount() {
		$(".image").dimmer({
			on: 'hover'
		});
		$("input[type='file']").on('change', (e) => {
			let file = e.target.files[0];
			if (file) {
				let upload = Files.insert({
					file: file,
					streams: 'dynamic',
					chunkSize: 'dynamic'
				}, false);
				upload.on('end', (err, file) => {
					if (err) {
						console.error(err);
					} else {
						this.setState({
							image: file['_id']
						});
					}
				});
				upload.start();
			}
		});
	}

}
