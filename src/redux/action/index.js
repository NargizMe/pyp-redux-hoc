export const emptyFavoriteAction = () => {
    return { type: 'EMPTY_FAVORITES', payload: '' }
}

export const addToFavoriteAction = (payload) => {
    return { type: 'ADD_TO_FAVORITES', payload }
}