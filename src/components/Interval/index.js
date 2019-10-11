
import React, { PureComponent } from 'react';

import WithInterval from 'containers/WithInterval';

class Interval extends PureComponent {
    render() {
        const {
            currentInterval,
            changeInterval,
        } = this.props;
      return (
        <div>
            <span>Интервал обновления секундомера: {this.props.currentInterval} сек.</span>
            <span>
                    <button onClick={() => changeInterval(currentInterval > 0 ? currentInterval - 1 : 0)}>-</button>
                    <button onClick={() => changeInterval(currentInterval + 1)}>+</button>
            </span>
        </div>
      )
    }
  }

  export default WithInterval()(Interval);
