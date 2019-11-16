import React from 'react';
import PropTypes from 'prop-types';
import styles from './LabelBlock.css';

export default function LabelBlock(props) {
    const { name } = props.name;

    return (
        <div className = "title-area">
            <h3> { name } </h3>
        </div>
    );
}

LabelBlock.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string
};

LabelBlock.defaultProps = {
    className: '',
    name: ''
};