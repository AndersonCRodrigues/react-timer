import '../../styles/formTimer.css';

export const FormTimer = ({ handleChange, start }) => {

  const arrHora = Array(11).fill('');
  const arrMinuto = Array(60).fill('');
  const arrSegundo = Array(60).fill('');

  return (
    <form >
      <label htmlFor="hora">
        Horas:
        <select
          disabled={start}
          name="hora"
          id="hora"
          onChange={ handleChange }
          >
          {arrHora.map((_,index) => <option key={'hora' + index } value={index}>{index}</option>)}
        </select>
      </label>
      <label htmlFor="hora">
        Minutos:
        <select
          disabled={start}
          name="minuto"
          id="minuto"
          onChange={ handleChange }
          >
          {arrMinuto.map((_,index) => <option key={'minutos' + index } value={index}>{index}</option>)}
        </select>
      </label>
      <label htmlFor="hora">
        Segundos:
        <select
          disabled={start}
          name="segundo"
          id="segundo"
          onChange={ handleChange }
          >
          {arrSegundo.map((_,index) => <option key={'segundo' + index } value={index}>{index}</option>)}
        </select>
      </label>
    </form>
  );
}