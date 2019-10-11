import React, { Component } from 'react';

import Connect from 'store/Connect';
import { changeInterval } from 'actions/CurrentIntervalAction';

export default () => (WrappedComponent) => {
    class WithInterval extends Component {
        render() {
            return (
                <WrappedComponent {...this.props} />
            )
        }
    }

    const mapStateToProps = (state) => ({
        currentInterval: state.currentInterval,
    });

    const mapDispatchToProps = (dispatch) => ({
        changeInterval: (intervalValue) => dispatch(changeInterval(intervalValue))
    });

    return Connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WithInterval);
}
