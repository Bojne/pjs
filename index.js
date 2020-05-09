import React from "react";
import ReactDOM from "react-dom";
import './styles.scss';

const destination = document.getElementById("root");

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        emoji:['🎉', '🧘‍♂️','🏃‍♀️','💃','💅','🙆🏻‍♀️','👼','👸','👩🏼‍💻','🤟','🙌','🤯','🥳','📚','✨','🍦','🤸','🏖','🎊','🌏'][Math.floor(Math.random()*16)],
      };
    }
    render() {
      return (
          <div class = 'layout'>
            <h2>Hello!</h2>
            <iframe src="https://www.openprocessing.org/sketch/885111/embed/" width="800" height="500"></iframe>
          </div>  
      )  
    }
}
  
ReactDOM.render(<App />, destination);