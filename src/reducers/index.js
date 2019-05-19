import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import  diskSources from './diskSources';
import  breadCrumbs from './breadCrumbs';

export default (history) => combineReducers({
    router: connectRouter(history),
    diskSources,
    breadCrumbs
})
