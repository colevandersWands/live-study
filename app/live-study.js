export default class LiveStudy {
  constructor(exercises, title) {
    this.exercises = exercises;
    this.title = title;
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
  renderExercises(exercises) {
    const virDir = exercises || this.exercises;

    const detailsEl = document.createElement('details');
    const summaryEl = document.createElement('summary');
    summaryEl.innerHTML = virDir.path;
    const loadAllButton = document.createElement('button');
    loadAllButton.innerHTML = 'load exercises';
    loadAllButton.onclick = () => {
      virDir.exercises.forEach(exercise => exercise.load());
      loadAllButton.innerHTML = 'exercises are loaded';
      loadAllButton.onclick = () => console.log('exercises are loaded');
    };
    summaryEl.appendChild(loadAllButton);
    detailsEl.appendChild(summaryEl);

    const subListEl = document.createElement('ul');
    if (virDir.dirs) {
      virDir.dirs.forEach(subDir => {
        const subDirEl = this.renderExercises(subDir);
        const li = document.createElement('li');
        li.appendChild(subDirEl);

        subListEl.appendChild(li);
      });
    };
    if (virDir.exercises) {
      virDir.exercises.forEach(exercise => {
        const exerciseEl = exercise.render();
        const li = document.createElement('li');
        li.appendChild(exerciseEl);
        subListEl.appendChild(li);
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


    const subListEl = document.createElement('ul');

    // if (this.exercises.dirs) {
    //   this.exercises.dirs.forEach(exerciseDir => {
    //     const dirsList = this.renderExercises(exerciseDir);
    //     const li = document.createElement('li');
    //     li.appendChild(dirsList);
    //     subListEl.appendChild(li);
    //   });
    // };

    // if (this.exercises.exercises) {
    //   this.exercises.exercises.forEach(exercise => {
    //     const exerciseEl = exercise.render();
    //     const li = document.createElement('li');
    //     li.appendChild(exerciseEl);
    //     subListEl.appendChild(li);
    //   });
    // };

    const renderedExercises = this.renderExercises();
    const unWrapped = renderedExercises.lastChild;
    container.appendChild(unWrapped);

    // if (this.exercises.exercises) {
    //   container.appendChild(document.createElement('br'));
    //   container.appendChild(document.createElement('br'));
    //   this.exercises.exercises.forEach(exercise => {
    //     container.appendChild(exercise.render());
    //   });
    // };

    return container;
  }
}
