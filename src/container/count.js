import { connect } from "react-redux";
import Count from "../pages/Count";
import {
  createIncreaseAction,
  createDecreaseAction,
  createIncreaseAsyncAction,
} from "../redux/count_action";
function mapStateToProps(state) {
  return { count: state };
}
const mapDispatchToProps = (dispatch) => {
  return {
    increase: (value) => dispatch(createIncreaseAction(value)),
    decrease: (value) => dispatch(createDecreaseAction(value)),
    increaseAsync: (value, time) =>
      dispatch(createIncreaseAsyncAction(value, time)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Count);
