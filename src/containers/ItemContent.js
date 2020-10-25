import { connect } from 'react-redux';
import ItemContent from '../components/ItemContent';
import { getItemRequest } from '../actions/getItem';

const mapStateToProps = (state) => ({
  selectedItem: state.selectedItem,
});

const mapDispatchToProps = (dispatch) => ({
  getItem: (title) => dispatch(getItemRequest(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContent);
