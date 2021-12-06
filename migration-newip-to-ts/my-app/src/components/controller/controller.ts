import { IDataNews } from '../view/news/news';
import { SourcesData } from '../view/sources/sources';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: (data?: {sources: Array<SourcesData>}) => void): void {
        super.getResp({endpoint: 'sources', }, callback);
    }
    
    getNews(e: Event, callback: (data?: IDataNews ) => void): void {
        let target: HTMLElement = <HTMLElement>e.target;
        const newsContainer: HTMLElement = <HTMLElement>e.currentTarget;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
