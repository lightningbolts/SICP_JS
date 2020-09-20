class AutoClicker extends React.Component {  
    constructor(props) {
      super(props);
      this.state = {
        intervalBetweenClick: 1, 
        autoStopAfterClickTimes: 100,
        autoStopAfterClickSeconds: 60,
        clickCount: 0,
        isAutoStopAfterClickTimes: false,
        isAutoStopAfterClickSeconds: true,
        intervalID: undefined
        
      };
    }
    
    handleClick = () => {
      // alert("I have been clicked!");
      const intervalID= setInterval(() => {
        this.setState({
          clickCount: this.state.clickCount + 1
        })
      }, this.state.intervalBetweenClick)
      this.setState({intervalID})
    }
    handleStop = () => {
      clearInterval(this.state.intervalID);
      
    }
    onIntervalChange = (ev) => {
      this.setState({intervalBetweenClick: ev.target.value})
    }
    render() {
      return (
        <div>
        <div>Auto Cliker By Kairui</div>
        <div>
          <div>
          <span>Interval Between Clicks</span>
            <input type="number" value={this.state.intervalBetweenClick} onChange={this.onIntervalChange} /> Seconds
          </div>
          <div>
            <input type="checkbox" />
          <span>Auto Stop After Click</span>
            <input type="number" value={this.state.autoStopAfterClickTimes} /> Times
          </div>
          <div>
            <input type="checkbox" />
          <span>Auto Stop After Click</span>
            <input type="number" value={this.state.autoStopAfterClickSeconds} /> Seconds
          </div>
          <div>
            <span>Click Count:</span> {this.state.clickCount}
          </div>
          <div>
            <button onClick={this.handleClick}>Start Click</button>
            <button onClick={this.handleStop}>Stop Click</button>
          </div>
          
          
        </div>
       </div>
      );
    }
  }
  
  function tick() {
    ReactDOM.render(
      <div>
        <AutoClicker />
      </div>,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);