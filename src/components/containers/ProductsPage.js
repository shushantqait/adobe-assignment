import ProductsPage from "../productsPage";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  filterLinks: state.filterDetailsReducer,
  cardDetails: state.cardDetailsReducer
});

const Container = connect(mapStateToProps);

export default Container(ProductsPage);
