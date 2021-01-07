module.exports = require("regenerator-runtime");
const AudioPlayer = window.ReactH5AudioPlayer.default

class PlayerApp extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Hello, audio player!</h1>
        <AudioPlayer
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          // Try other props!
        />
      </div>
    );
  }
}

ReactDOM.render(<PlayerApp />, document.getElementById('root'));
