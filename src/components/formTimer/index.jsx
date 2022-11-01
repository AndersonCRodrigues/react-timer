export const FormTimer = ({tempo, handleChangeTime}) => {

  const arrHora = Array(11).fill('');
  const arrMinuto = Array(60).fill('');
  const arrSegundo = Array(60).fill('');

  return (
    <form>
      <label htmlFor="hora">
        Horas:
        <select
          name="hora"
          id="hora"
          onChange={ handleChangeTime }
          value={ tempo.hora || 0 }>
          {arrHora.map((_,index) => <option key={'hora' + index } value={index}>{index}</option>)}
        </select>
      </label>
      <label htmlFor="hora">
        Minutos:
        <select
          name="minutos"
          id="minutos"
          onChange={ handleChangeTime }
          value={ tempo.minutos || 0 }>
          {arrMinuto.map((_,index) => <option key={'minutos' + index } value={index}>{index}</option>)}
        </select>
      </label>
      <label htmlFor="hora">
        Segundos:
        <select
          name="segundo"
          id="segundo"
          onChange={ handleChangeTime }
          value={ tempo.segundo || 0 }>
          {arrSegundo.map((_,index) => <option key={'segundo' + index } value={index}>{index}</option>)}
        </select>
      </label>
    </form>
  );
}