export const ExerciseFormUI = ({handleSubmit}:any) => (
    <form onSubmit={handleSubmit}>
        <fieldset>
            <h2>Tiempo de Calentamiento</h2>
            <label>
                Minutos
                <input type="number" name= "warmingUpMinutes" />
            </label>
            <label>
                Segundos
                <input type="number" name= "warmingUpSeconds" />
            </label>
        </fieldset>
        <fieldset>
            <h2>Tiempo de Ejercicio</h2>
            <label>
                Minutos
                <input type="number" name= "exerciseMinutes" />
            </label>
            <label>
                Segundos
                <input type="number" name= "exerciseSeconds" />
            </label>
        </fieldset>
        <fieldset>
            <h2>Tiempo de Descanso</h2>
            <label>
                Minutos
                <input type="number" name="restMinutes" />
            </label>
            <label>
                Segundos
                <input type="number" name="restSeconds" />
            </label>
        </fieldset>
        <fieldset>
            <h2>Series</h2>
            <label>
                #
                <input type="number" name="series" />
            </label>
        </fieldset>
        <fieldset>
            <input type="submit" value="Agregar registro" />
        </fieldset>
    </form>
)