import React from 'react';
import { connect } from 'react-redux';

class NewComponent extends React.Component {
    render() {
        return (
            <div>{this.props.todos}</div>
        );
    }
};

const mapStateToProps = state => ({
    todos: state.todos
});

const enhance = connect(
    mapStateToProps
);

export default enhance(NewComponent);