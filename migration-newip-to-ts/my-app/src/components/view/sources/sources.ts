import './sources.css';

export interface SourcesData {
    id: string,
    name: string,
}

class Sources {
    draw(data: Array<SourcesData>): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item: SourcesData) => {
            const sourceClone: Node = <HTMLElement>sourceItemTemp.content.cloneNode(true);

            (<HTMLElement>sourceClone).querySelector('.source__item-name').textContent = item.name;
            (<HTMLElement>sourceClone).querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
