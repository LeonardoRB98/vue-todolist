// - creare una lista di cose da fare e mostrarla in pagina con Vue; OK
// - aggiungere un campo di input e un pulsante per aggiungere
// nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo
// item anche premendo il tasto Invio della tastiera, dopo aver scritto
//  il testo nel campo di input.
// Consiglio del giorno: per alcuni task, potrebbe essere necessario
//  fare delle ricerche e capire come lavorano alcune funzioni o
//  direttive leggendo
// le documentazioni ufficiali ed analizzando i relativi esempi.
// al click di un bottono parte un setInterval che fa il push di una nuovo
// task ogni 5 secondi poi crea un pulsante per stopparolo
let app = new Vue ({
  el: '#container',
  data: {
    tasks: ['fare la spesa', 'Guardare la partita di calcio', 'Chiamare medico', 'Andare dal meccanico'],
    newTask: '',
    enter: 13,
  },
  methods: {
    newTaskPush: function() {
      this.tasks.push(this.newTask);
      this.newTask = '';
    },
    removeTask: function(i) {
      this.tasks.splice(i, 1);
    },
    addtaskByKeycode:  function () {
      if (event.which == this.enter) {
        this.newTaskPush();
      }
    }
  }
})
