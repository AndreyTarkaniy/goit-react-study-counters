import React from 'react';
import Controls from 'components/controls/controls';
import css from 'components/counters/counter.module.css';

class Counter extends React.Component {
  state = {
    value: 5,
  };

  handleIncrement = () => {
    // this.setState({ value: 100 });

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className={css.counter}>
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
