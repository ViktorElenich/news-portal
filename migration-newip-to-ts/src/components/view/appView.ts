import News, { IData, IDataNews } from './news/news';
import Sources, { SourcesData } from './sources/sources';

export class AppView {

    news: News;
    
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDataNews): void {
        const values: IData[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: {sources: Array<SourcesData>}, letter: string): void {
        const values: SourcesData[] = data?.sources ? data?.sources : [];
        this.sources.draw(values, letter);
    }
}

export default AppView;
