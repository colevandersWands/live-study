import Exercise from './exercise.js';
import LiveStudy from './live-study.js';

const title = 'Event Loop';

fetch('./exercises/index.json')
  .then(res => res.json())
  .then(index => {
    const exercisesDir = Exercise.populate(index);
    const liveStudyApp = new LiveStudy(exercisesDir, title);
    const view = liveStudyApp.render();
    document.getElementById('root').appendChild(view);
  })
  .catch(err => console.error(err));

