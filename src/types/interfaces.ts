interface INews {
    status: string;
    totalResults: number;
    articles: Array<Content>;
}

type Content = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: {
        id: string,
        name: string
    };
    title: string;
    url: string;
    urlToImage: string;
};

interface INewsItem {
    status?: string;
    sourses?: Array<Article>;
}

type Article = {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export { INews, INewsItem, Content, Article}