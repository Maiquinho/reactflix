const API_KEY = 'f3a96c7145fe8e93338ce04522febf96';
const API_BASE = 'https://api.themoviedb.org/3';



async function basicFetch(endpoint){
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();

    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?api_key=${API_KEY}&with_companies=213&language=pt-BR`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?api_key=${API_KEY}&language=pt-BR`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-BR`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-BR`)
            },
        ]
    }
}