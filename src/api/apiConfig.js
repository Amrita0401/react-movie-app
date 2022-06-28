const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4ea0431ded326f9fc1976acfae8faa64',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;