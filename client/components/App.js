import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state){
	return{
		access_token : state.reverse.access_token,
		agents : state.reverse.agents,
		chat : state.reverse.chat
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch);
}

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;