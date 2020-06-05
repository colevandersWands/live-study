export default class LiveStudy {

  title = 'Live Study';
  exercises = {};

  constructor(exercises, config) {
    this.exercises = exercises;
    this.title = config.title;
  }

  async loadAll(dir) {
    dir = dir || this.exercises;
    if (dir.dirs) {
      dir.dirs.forEach(subDir => this.loadAll(subDir));
    };
    if (dir.exercises) {
      for (let exercise of dir.exercises) {
        try {
          const msg = '--- ' + exercise.path.abs + ' ---';
          eval(await exercise.load(msg));
        } catch (err) {
          console.error(err);
        };
      };
    };
  }

  renderExercises(virDir = this.exercises) {

    const detailsEl = document.createElement('details');
    detailsEl.style = 'margin-top: 1%; margin-bottom: 1%;';

    const summaryEl = document.createElement('summary');
    summaryEl.innerHTML = virDir.path;
    detailsEl.appendChild(summaryEl);

    const subListEl = document.createElement('ul');
    if (virDir.dirs) {
      virDir.dirs.forEach(subDir => {
        const subDirEl = this.renderExercises(subDir);
        subListEl.appendChild(subDirEl)
        // const li = document.createElement('li');
        // li.appendChild(subDirEl);
        // subListEl.appendChild(li);
      });
    };
    if (virDir.exercises) {
      virDir.exercises.forEach(exercise => {
        const exerciseEl = exercise.render();
        const exerciseContainer = document.createElement('div');
        exerciseContainer.style = 'margin-top: 1%; margin-bottom: 1%;';
        exerciseContainer.appendChild(exerciseEl);
        subListEl.appendChild(exerciseContainer)
        // const li = document.createElement('li');
        // li.appendChild(exerciseEl);
        // subListEl.appendChild(li);
      });
    };
    detailsEl.appendChild(subListEl);
    return detailsEl;
  }

  render() {
    const container = document.createElement('div');

    const header = document.createElement('h1');
    header.innerHTML = this.title;
    container.appendChild(header);

    const renderedExercises = this.renderExercises();
    const unWrapped = renderedExercises.lastChild;
    const divContainer = document.createElement('div');
    for (let child of Array.from(unWrapped.children)) {
      divContainer.appendChild(child);
    }
    container.appendChild(divContainer)

    return container;
  }
}
