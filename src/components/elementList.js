import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './elementList.css';

export default class ElementList extends Component {

	componentDidMount() {}
  
	render() {
		return (
			<div className="data--list">
				<span>{this.props.name}</span>
			</div>
		);
	}
}

ElementList.propTypes = {
	name: PropTypes.string.isRequired
}
