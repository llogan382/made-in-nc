import React from 'react';
import { getFunName } from '../helpers';

//every class needs at least one method, called "RENDER"
class StorePicker extends React.Component {

    // bind info using constructor
    constructor() {
        super();
        this.goToStore = this.goToStore.bind(this);
    }
    myInput = React.createRef();

    // When button is clicked, log the info
    goToStore = (e) => {
        // 1. Prevent form from submitting
        e.preventDefault();

        // 2. Get text from input
        console.log(this)
        // 3. change page url to /store/whateer-they-entered
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store name</h2>

                {/* Button events need to be added in-line. if you put parenthesis on the end, it will call function when the component mounts, rather than when it is clicked */}

                <input
                    type="text"
                    required placeholder="Store Name"

                    // Values on input need to be connected to state.
                    defaultValue={getFunName()}
                    ref={this.myInput}


                />
                <button type="submit">Visit Store>></button>
            </form>
        )
    }
}

export default StorePicker;