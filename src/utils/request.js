export const request = (resource, query) => fetch(`https://api.giphy.com/v1/gifs${resource}?api_key=gZlFYwmC7QZSHq5OnQu5R8tsSwQn9GP3&q=${query}&limit=25&offset=0&rating=g&lang=en`);