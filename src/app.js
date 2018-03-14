export class App {
  configureRouter(config, router){
    config.title = 'Clueb Tutor';
    config.map([
      { route: '', moduleId: 'no-selection', title: 'Select'},
      { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' }
    ]);

    this.router = router;
  }
}
