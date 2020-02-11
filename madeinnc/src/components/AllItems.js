import React from 'react';
// import ItemView from './ItemView';
import { Link } from 'react-router-dom';
import '../App.css';
import ItemView from './ItemView';
// import ItemView from './ItemView';


class AllItems extends React.Component {


    render() {

        const details = this.props.details;
        const firestoreData = this.props.firebaseData;
        let button;
        if (!details) {
            button = <button onClick={this.props.loadSampleItems}>Load Sample Items</button>;
        } else {
            button = Object.keys(details).map(
                key =>
                    <ItemView
                        key={key}
                        index={key}
                        details={details[key]}
                        firestoreData={firestoreData}
                    />
            )
        }

        return (
            <div>
                {button}
                Hello
       </div>
        );



    }
}

export default AllItems;
