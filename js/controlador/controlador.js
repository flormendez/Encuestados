/*
 * Controlador
 */
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
  editarPregunta: function(id, textoEditado) {
    if (typeof id == "number" && typeof textoEditado == "string") {
      this.modelo.editarPregunta(id, textoEditado);
    }
  },
  borrarTodas: function() {
    this.modelo.borrarTodas();
  },
  agregarVoto: function(nombrePregunta, respuestaSeleccionada) {
    if (
      typeof nombrePregunta == "string" &&
      typeof respuestaSeleccionada == "string"
    ) {
      modelo.sumarVoto(nombrePregunta, respuestaSeleccionada);
    }
  }
};
