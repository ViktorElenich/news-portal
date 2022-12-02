export type CallbackType<T> = (data: T) => void;

enum Errors {
    Unauthorized = 401,
    NotFound = 404
}

class Loader {

    baseLink: string;
    
    options: {
        apiKey: string,
    };

    constructor(baseLink: string, options: {apiKey: string}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint = "string", options = {} },
        callback: CallbackType<T> = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response{
        if (!res.ok) {
            if (res.status === Errors.Unauthorized || res.status === Errors.NotFound)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Record<string, unknown>, endpoint: string): string {
        const urlOptions = { ...this.options, ...options} as {[key: string]: string};
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: CallbackType<T>, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
