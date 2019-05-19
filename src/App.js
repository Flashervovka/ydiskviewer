import React, { Component } from 'react';
import {connect} from 'react-redux';
import fetchData from './utils/fetchData';
import sourceList from "./components/sourceList"
import  breadCrumbs from './components/breadCrumbs'
import { push } from 'connected-react-router'
class App extends Component {

    componentDidMount(){
        this.props.onGetDiskSources(this.props.state.router.location.pathname);
    }

    render() {
        return(
            <div>
                {breadCrumbs(this.props.state.breadCrumbs,this.props.onGetDiskSources,this.props)}
                {sourceList(this.props.state.diskSources,this.props.onGetDiskSources)}
            </div>
        )
    }
}

export default connect(
    state=>({
        state:state
    }),
    dispatch=>({
        onGetDiskSources:(path)=>{
            dispatch(()=>{

                fetchData("path="+path)
                    .then((result)=>{return result.json();})
                    .then((data)=>{
                        dispatch({type:"ON_GET_DISK_SOURCES",diskSources:data._embedded.items});
                        dispatch({type:"ON_CHANGE_PATH",path:data.path});
                        dispatch(push(data.path.replace("disk:","")));
                    }).catch((error)=>{});
            })
        }
    })
)(App);

