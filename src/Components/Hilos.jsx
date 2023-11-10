


function Hilos() {
    return (
        <div id="hilos">
            <h2>Últimos Hilos</h2>
            {/*  JavaScript */}
            <div className="hilo">
                <h3>Título del Hilo 1</h3>
                {/* Mensajes Component dentro de este hilo */}

                <div className="mensaje">
                    <p>Contenido del mensaje 1</p>
                    {/* Más detalles y botones de interacción aquí */}
                </div>
                {/* ... más mensajes ... */}
            </div>
            {/* ... más hilos ... */}
        </div>
    );
}

export default Hilos;