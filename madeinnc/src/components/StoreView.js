import React from 'react';
// import ItemView from './ItemView';
import { Link } from 'react-router-dom';

import '../App.css';
// import ItemView from './ItemView';


class StoreView extends React.Component {


    componentDidMount() {
        // const { itemSlug } = this.props.match.params

        this.setState()
    }
    render() {

        let items = { ...this.props.location.state.storeView }


        let storeSlug = this.props.location.store
        // console.log(storeSlug)
        {
            for (const item in items) {
                console.log(`${item}: ${storeSlug}`)

            }
        }
        return (
            <div>




                Hello!</div >

        )
    }
}


export default StoreView;
