import './sources.css';

export interface SourcesData {
    id: string,
    name: string,
}

class Sources {
    draw(data: Array<SourcesData>, letter: string): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        (document.querySelector('.sources') as HTMLElement).innerHTML = '';

        data.forEach((item: Readonly<SourcesData>) => {
            if (item.name[0] === letter) {
                const sourceClone: Element = sourceItemTemp.content.cloneNode(true) as Element;

                (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
                (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);
                fragment.append(sourceClone);
            }
        });

        document.querySelector('.sources').append(fragment);
    }
}

export default Sources;
