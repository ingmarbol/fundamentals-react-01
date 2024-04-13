import PropTypes from 'prop-types'

export const FirstApp = ( {title, subTitle, name} ) =>{
    //console.log(props);

    return(
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
        
    )
}
//Definimos después del nombre del Functional Component
//con la p minúscula de propTypes
FirstApp.propTypes = {
    //Aquí ya usamos el paquete que definimos con la letra
    //Mayúscula de PropTypes, y podemos poner cosas como el tipo de la propiedad
    //o la obligatoriedad.
    title: PropTypes.string.isRequired,  //Tipo String y Es Requerido
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Marco Bolaños',
    subTitle: 'No hay subtítulo',
    title: 'No hay título'
}

