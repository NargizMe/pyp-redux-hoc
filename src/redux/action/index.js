export const emptyFavoriteAction = () => {
    return { type: 'EMPTY_FAVORITES'}
}

export const addToFavoriteAction = (payload) => {
    return { type: 'ADD_TO_FAVORITES', payload }
}

export const deleteSpecific = (payload) => {
    return { type: 'DELETE_SPECIFIC', payload }
}