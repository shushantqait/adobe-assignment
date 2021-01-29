import Filter from "../filter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getFilterLinks from '../../actions/filterLinks';
import { getDetails, getFilterProducts } from '../../actions/productDetails';

const mapStateToProps = (state) => ({
  filterLinks: state.filterDetailsReducer,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getDetails: dispatch(getDetails()),
            getFilterLinks: dispatch(getFilterLinks()),
            getFilterProducts: (key) => dispatch(getFilterProducts(key))
        },
        dispatch
    );

const Container = connect(mapStateToProps, mapDispatchToProps);

export default Container(Filter);
