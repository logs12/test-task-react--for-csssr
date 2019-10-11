import React, { Component } from 'react';

import ContextStore from 'store/ContextStore';

export default (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {

        static contextType = ContextStore;

        // TODO set default props
        static defaultProps = {
            mapStateToProps: () => {},
            mapDispatchToProps: () => {},
        }

        componentDidMount() {
            this.unsubscribe = this.context.subscribe(this.handleChange);
        }

        // TODO Cleanup subscription
        componentWillUnmount() {
            if (this.unsubscribe) {
                this.unsubscribe();
            }
        }

        handleChange = () => {
            this.setState({});
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    {...mapStateToProps(this.context.getState(), this.props)}
                    {...mapDispatchToProps(this.context.dispatch, this.props)}
                />
            )
        }
    }

    return Connect;
}
