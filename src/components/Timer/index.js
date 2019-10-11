import React, { PureComponent } from 'react';

import Interval from 'components/Interval';
import WithInterval from 'containers/WithInterval';

class TimerComponent extends PureComponent {
    state = {
        currentTime: 0,
    }

    // TODO we can applyed class properties for binding props
    handleStart = () => {
        this.timer = setInterval(() => this.setState({
            currentTime: this.state.currentTime + this.props.currentInterval,
        }), this.props.currentInterval + '000');
    }

    // TODO we can applyed class properties for binding props
    handleStop = () => {
        this.setState({ currentTime: 0 }, () => {
            clearInterval(this.timer);
        });
    }

    /**
     * TODO This method is called immediately before the component is removed
     * from the page and destroyed. We can clear the interval here.
     */
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
        <div>
            <Interval />
            <div>
                Секундомер: {this.state.currentTime} сек.
            </div>
            <div>
                <button onClick={this.handleStart}>Старт</button>
                <button onClick={this.handleStop}>Стоп</button>
            </div>
        </div>
        )
    }

}

export default WithInterval()(TimerComponent);
