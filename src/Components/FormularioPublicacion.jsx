// src/components/FormularioPublicacion.js


function FormularioPublicacion() {
    return (
        <div id="formulario-publicacion">
            <h2>Publicar Nuevo Hilo</h2>
            <form>
                <label htmlFor="titulo">Título:</label>
                <input type="text" id="titulo" name="titulo" />
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje"></textarea>
                <button type="submit">Publicar</button>
            </form>
        </div>
    );
}

export default FormularioPublicacion;