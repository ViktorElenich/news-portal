import './news.css';

export interface IData {
    source: {
        name: string,
        id: string,
    },
    author: string,
    content: string,
    urlToImage: string,
    publishedAt: string,
    title: string,
    description: string,
    url: string
}
export interface IDataNews{
    status: string,
    totalResults?: number,
    articles?: Array<IData>,
}

class News {
    draw(data: Array<IData>): void {
        const news: IData[] = data.length >= 10 ? data.filter((_item: IData, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item: IData, idx: number) => {
            const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);

            if (idx % 2) newsClone.querySelector('.news__item').classList.add('alt');

            newsClone.querySelector<HTMLElement>('.news__meta-photo').style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            newsClone.querySelector('.news__meta-author').textContent = item.author || item.source.name;
            newsClone.querySelector('.news__meta-date').textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            newsClone.querySelector('.news__description-title').textContent = item.title;
            newsClone.querySelector('.news__description-source').textContent = item.source.name;
            newsClone.querySelector('.news__description-content').textContent = item.description;
            newsClone.querySelector('.news__read-more a').setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        document.querySelector('.news').innerHTML = '';
        document.querySelector('.news').appendChild(fragment);
    }
}

export default News;

