import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductList from './ProductList';

class Products extends React.Component {
    render(){
    	debugger
    	console.log(this.props)
        return (
            <div>
              <h1 className='product-title'>Products + </h1>
              <h3>General Hospital</h3>
              <ProductList />
            </div>
        );
    }
};

// DistributionMap.propTypes = {
//     countries: PropTypes.shape({})
// };

Products = connect()(Products);

export default Products;
