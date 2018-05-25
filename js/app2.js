var IMDB = (function () {
 
//Parte Privada
    var peliculas = [];    
 
    function existePelicula (arrayARecorrer, idIngresado) {
             
        for (var i = 0; i < arrayARecorrer.length; i++) {
            if( arrayARecorrer[i].id === id) {
                return i;
            }
        }
        return false
    }
//Parte Publica
    return {
        verPeliculas: function () {
            console.log(peliculas);
        },
        agregarPelicula: function (id, titulo) {
            for (var i = 0; i < peliculas.length; i++) {
                if (peliculas[i].id === id) {
                    console.log('Ya hay una pelicula creada con ese ID');
                    return;
                } 
            }
 
            var nuevaPelicula 
            nuevaPelicula = {
            id:id,
            titulo:titulo
            }
            peliculas.push(nuevaPelicula);  
             
        },
        eliminarPelicula: function (idIngresado) {
            var posicion = existePelicula(idIngresado);
            if(existePelicula === false) {
                console.log('No hay ninguna película creada con ese ID');
            } else { 
                console.log('Borrando película en posicion ' + posicion);
                peliculas.splice(posicion,1);
                console.log('Se eliminó la película');
            }
        },
        guardarPeliculas: function () { 
            var arrayEnString = JSON.stringify(peliculas);
            localStorage.setItem( 'Películas guardadas' , arrayEnString );
            console.log('Lista de películas guardadas en el LocalStorage!');
        },
        recuperarPeliculas: function () {
 
            var peliculasRecuperadas = localStorage.getItem('Películas guardadas');
 
            console.log(peliculasRecuperadas);
 
            var nuevoArray = JSON.parse(peliculasRecuperadas);
             
            console.log(nuevoArray);
 
            noticias = nuevoArray;
        }
    }
})()