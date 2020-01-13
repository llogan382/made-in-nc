import React from 'react';
import { getFunName } from '../helpers';

//every class needs at least one method, called "RENDER"
class StorePicker extends React.Component {

    // When button is clicked, log the info
    handleClick = (e) => {
        e.preventDefault();
        console.log(e);
    }

    render() {
        return (
            <form className="store-selector">
                <h2>Please enter a store name</h2>

                {/* Button events need to be added in-line */}
                <button onClick={this.handleClick}>Button</button>

                <input type="text" required placeholder="Store Name"
                    // Values on input need to be connected to state.
                    defaultValue={getFunName()}



                />
                <button type="submit">Visit Store>></button>
            </form>
        )
    }
}

export default StorePicker;