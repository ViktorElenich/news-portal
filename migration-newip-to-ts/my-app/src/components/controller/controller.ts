import AppLoader from './appLoader';
import { CallbackType } from './loader';

class AppController extends AppLoader {
    getSources<T>(callback: CallbackType<T>): void {
        super.getResp({endpoint: 'sources', }, callback);
    }
    
    getNews<T>(e: Event, callback: CallbackType<T>): void {
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
