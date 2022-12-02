import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDataNews } from '../view/news/news';
import { SourcesData } from '../view/sources/sources';

class App {

    controller: AppController;

    view: AppView;
    
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(letter: string): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: IDataNews) => this.view.drawNews(data)));
        this.controller.getSources((data: {sources: SourcesData[]}) => this.view.drawSources(data, letter));
    }
}

export default App;
