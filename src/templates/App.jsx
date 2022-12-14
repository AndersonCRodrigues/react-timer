import React from 'react';
import { FormTimer } from '../components/formTimer';
import '../styles/App.css';
import mySound from '../sound/dispertador.mp3';

const ONE_SECOND = 1000;
const sound = new Audio(mySound);

export default class App extends React.Component {
  state = {
    timer: '00:00:00',
    hora: 0,
    minuto: 0,
    segundo: 0,
    start: false,
  }

  componentDidUpdate(_, prev) {
    if (prev.segundo < 0 ) {
      this.setState((prev) => ({ segundo: 59,
        start: ((prev.hora > 0)&&(prev.minuto > 0)&&(prev.segundo > 0))
       }));
    }

    if (prev.minuto < 0 ) {
      this.setState( { minuto: 59 });
    }

    if((prev.hora === 0)&&(prev.minuto === 0)&&(prev.segundo === 0)&&(prev.start)) {
      this.setState({
        start: false,
        hora: 0,
        minuto: 0,
        segundo: 0,
      }, (clearInterval(this.intervalId)));
       sound.play();
    }
  }

  shouldComponentUpdate(_,next) {
    if (next.minuto === -1) {
      this.setState({minuto: 0 })
    }
    return true;
  }

  handleAtualizaTimer = () => {
    const {start} = this.state;
    if (start) {
      this.intervalId = setInterval(() => {
        this.setState((prev) => ({
          hora: prev.minuto === 0 && prev.segundo === 0 ? prev.hora - 1 : prev.hora,
          minuto: prev.segundo === 0 ? prev.minuto - 1 : prev.minuto,
          segundo: prev.segundo === 0 ? 59 : prev.segundo -1,
          timer: (prev.hora > 9 ? prev.hora : '0' + prev.hora)
            + ':' + (prev.minuto > 9 ? prev.minuto : '0' + prev.minuto)
            + ':' + (prev.segundo > 9 ? prev.segundo : '0' + prev.segundo),
        }));
      }, ONE_SECOND);
    }
  }

  handleStartTimer = () => {
    const { hora, minuto, segundo } = this.state;
    if((hora + minuto + segundo) > 0) {
      this.setState({ start: true }, (this.handleAtualizaTimer));
    }
  }

  handleChange = ({target}) => {
    const { name, value } = target;
    this.setState({[name]: value});
  }

  handleAddSeconds = () => {
    const { segundo, start } = this.state;
    if(start) {
      if ( segundo + 30 > 59) {
        this.setState((prev) => ({
          segundo: prev.segundo - 30,
          minuto: prev.minuto + 1,
        }))
      } else {
        this.setState((prev) => ({segundo: prev.segundo + 30}))
      }
    }
  }

  handleAddMinute = () => {
    const { minuto, start } = this.state;
    if (start) {
        if ( minuto + 1 > 59) {
          this.setState((prev) => ({
            minuto: prev.minuto - 59,
            hora: prev.hora + 1,
          }))
        } else {
          this.setState((prev) => ({minuto: prev.minuto + 1}))
        }
      }
    }


  render() {
    const { timer, start } = this.state
    return (
      <main>
        <h1>Timer</h1>
        <h2>{timer}</h2>
        <FormTimer handleChange={this.handleChange} start={start} />
        <div className='buttons'>
          <button onClick={this.handleStartTimer}>Start</button>
          <button onClick={this.handleAddSeconds}>+30 segundos</button>
          <button onClick={this.handleAddMinute}>+1 minuto</button>
        </div>
      </main>
    )
  }
}

