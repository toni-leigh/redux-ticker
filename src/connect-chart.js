import { connect } from 'react-redux';
import Chart from './chart';

const mapStateToProps = (state) => ({
  trends: state.trends
});

const ConnectChart = connect(
  mapStateToProps
)(Chart);

export default ConnectChart;