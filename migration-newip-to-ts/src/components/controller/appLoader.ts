import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi-production-server.onrender.com/', {
            apiKey: '6d3791bc369849d5aae9d1fd6b8b7cd6',
        });
    }
}

export default AppLoader;
