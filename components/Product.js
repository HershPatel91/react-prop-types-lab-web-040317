import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {
  render() {
    return (
      <div>
      	<h2>{this.props.name}</h2>
      	<h2>{this.props.producer}</h2>
      	<h2>{this.props.hasWatermark}</h2>
        <h2>Genres: {this.props.color}</h2>
        <h2>Genres: {this.props.weight}</h2>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
};


function weightRange(){
  var range = []
  for (var i = 80; i < 300; i++) { 
    range.push(i)
}
return range
}

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: React.PropTypes.oneOf(weightRange()).isRequired
};

export default Product;
