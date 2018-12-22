/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
  this.preguntaBorrada = new Evento(this);
  this.preguntaEditada = new Evento(this);
  this.votoSumado = new Evento(this);
  this.preguntasBorradas = new Evento(this);
};

Modelo.prototype = {
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    if (this.preguntas.length > 0) {
      for (var i = 0; i < this.preguntas.length; i++) {
        if (this.ultimoId < this.preguntas[i].id) {
          this.ultimoId = this.preguntas[i].id;
        }
      }
    }
    return this.ultimoId;
  },
  extraerPreguntas: function() {
    if (localStorage.getItem("preguntas") != null) {
      return JSON.parse(localStorage.getItem("preguntas"));
    } else {
      return [];
    }
  },
  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;
    var nuevaPregunta = {
      textoPregunta: nombre,
      id: id,
      cantidadPorRespuesta: respuestas
    };
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  borrarPregunta: function(id) {
    var index = this.preguntas.indexOf(id);
    this.preguntas.splice(index, 1);
    this.guardar();
    this.preguntaBorrada.notificar();
  },

  editarPregunta: function(id, nuevoTexto) {
    var preguntaAEditar;
    this.preguntas.forEach(function(pregunta, index) {
      if (pregunta.id == id) {
        preguntaAEditar = index;
      }
    });
    this.preguntas[preguntaAEditar].textoPregunta = nuevoTexto;
    this.guardar();
    this.preguntaEditada.notificar();
  },

  borrarTodo: function() {
    this.preguntas = [];
    this.guardar();
    this.preguntasBorradas.notificar();
  },

  //falta sumar voto
  //falta agregar respuesta
  //no anda local storage

  //se guardan las preguntas
  guardar: function() {
    localStorage.setItem("preguntas", JSON.stringify(this.preguntas));
  }
};
