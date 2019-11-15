import React from 'react';
import PropTypes from 'prop-types';
import styles from './LabelBlock.css';


class LabelBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name } = this.props;
        return(
            <div className = "title-area">
                <h3> { name } </h3>
            </div>
        );
    }
}

LabelBlock.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string
};

LabelBlock.defaultProps = {
    className: '',
    name: ''
}

export default LabelBlock;