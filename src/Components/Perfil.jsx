import React from 'react';

function Perfil() {
    const imagenPerfilUrl = 'https://i.pinimg.com/564x/b5/d6/2d/b5d62d12b352e911fddf251e856350d7.jpg';

    return (
        <div id="perfil" className="perfil-container">
            <h2 className="perfil-title">Perfil de Usuario</h2>
            <img
                src={imagenPerfilUrl}
                alt="Imagen de perfil"
                className="perfil-avatar"
            />
            <div className="perfil-details">
                <p>Nombre: Usuario Ejemplo</p>
                <p>Email: usuario@example.com</p>
                {/* Agrega más detalles del perfil según tus necesidades */}
            </div>
        </div>
    );
}

export default Perfil;


