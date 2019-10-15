import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ElementList from './elementList';

export default class List extends Component {

	componentDidMount() {}
  
	render() {
		return (
			<div>
        {this.props.elements.map(elem => 
          <ElementList key={elem.id} name={elem.name} />
        )}
      </div> 
		);
	}
}

List.propTypes = {
	elements: PropTypes.object.isRequired
}
