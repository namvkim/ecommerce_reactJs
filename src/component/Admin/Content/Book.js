import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    constructor(props) {
        super(props);

    }

   

    render() {
        return (
            <div className="class_pro">
                <div className="book_content_a">
                    <li>dang chuan bi</li>
                    <li>Dang giao</li>
                    <li>Da giao</li>
                </div>
                <div className="book_content_b">

                </div>
            </div>
        );
    }
}

export default Book;