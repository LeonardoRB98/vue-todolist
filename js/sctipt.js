// - creare una lista di cose da fare e mostrarla in pagina con Vue; OK
// - aggiungere un campo di input e un pulsante per aggiungere
// nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.

let app = new Vue ({
  el: '#container',
  data: {
    tasks: ['fare la spesa', 'Guardare la partita di calcio', 'Chiamare medico', 'Andare dal meccanico'],
    newTask: '',
  },
  methods: {
    newTaskPush: function() {
      this.tasks.push(this.newTask);
      this.newTask = '';
    },
    removeTask: function(i) {
      console.log(this.tasks.splice(i, 1));
      console.log(i);
    }
  }
})
