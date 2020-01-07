import React from 'react';

//every class needs at least one method, called "RENDER"
class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <h2>Please enter a store name</h2>
                <input type="text" required placeholder="Store Name" />
                <button type="submit">Visit Store>></button>
            </form>
        )
    }
}

export default StorePicker;