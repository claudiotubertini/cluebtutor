export class App {
  configureRouter(config, router){
    config.title = 'Clueb Tutor';
    config.map([
      { route: '', moduleId: 'no-selection', title: 'Select'},
      { route: 'books/:id', 
      moduleId: 'book-detail', name: 'books' }
    ]);

    this.router = router;
  }
}
