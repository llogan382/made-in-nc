import React from 'react';
// import ItemView from './ItemView';
import { Link } from 'react-router-dom';
import '../App.css';
import ItemView from './ItemView';
// import ItemView from './ItemView';


class AllItems extends React.Component {


    render() {

        const details = this.props.details;


        return (
            <div>
                {Object.keys(details).map(
                    key =>
                        <ItemView
                            key={key}
                            index={key}
                            details={details[key]}
                        />
                )
                }
                Hello
           </div>
        );
    }
}

export default AllItems;
