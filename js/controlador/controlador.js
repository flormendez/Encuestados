/*
 * Controlador
 */

 //debería validar los datos para que los incorrectos ni lleguen al modelo. Hacer función controlar Datos? 
 
var Controlador = function(modelo) {
  this.modelo = modelo;
};

Controlador.prototype = {
  agregarPregunta: function(pregunta, respuestas) {
    this.modelo.agregarPregunta(pregunta, respuestas);
  },

  borrarPregunta: function(id) {
    this.modelo.borrarPregunta(id);
  },

  editarPregunta: function(id, nuevoTexto) {
    this.modelo.editarPregunta(id, nuevoTexto);
  },

  borrarTodo: function() {
    this.modelo.borrarTodo();
  },

  agregarVoto: function(nombrePregunta, respuestaSeleccionada){
    this.modelo.sumarVoto(nombrePregunta, respuestaSeleccionada);
  }
};
