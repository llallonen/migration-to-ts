import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '29210863f1514d0d986dc4f1be0b0062',
        });
    }
}

export default AppLoader;
