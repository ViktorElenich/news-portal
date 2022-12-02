import App from "../app/app";
import './pagination.css';

class Pagination  {
  private _app: App;
  public letter: string;

  constructor() {
    this._app = new App();
    this.letter = '';
  }

  showPagination() {
    const letters = document.querySelector('.pagination') as HTMLElement;
    letters.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('alphabet__letter')) {
        const list: NodeListOf<Element> = document.querySelectorAll('.alphabet__letter');
        list.forEach((el: Element) => {
          el.classList.remove('active');
        });
        target.classList.add('active');
        this.letter = target.textContent as string;
        this._app.start(this.letter);
      }
    })
  }
}

export default Pagination;