let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante encantada de aprender y enfrentar nuevos desafíos en campos de mi interes.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
