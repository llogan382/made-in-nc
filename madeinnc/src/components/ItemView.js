import React from 'react';

//every class needs at least one method, called "RENDER"
class ItemView extends React.Component {


    render() {
        return (
            <div>
                <img src="https://picsum.photos/225/355" />
                <p>Name</p>
                <p>Location</p>
                <p>Price</p>
                <p>Category</p>
                <p>Description</p>
                <p>Size</p>


            </div>
        )
    }



};


export default ItemView;