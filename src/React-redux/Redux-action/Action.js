
export const GET_SLUG = 'GET_SLUG'


export const getDataSlug = (slug) => {
    return (dispatch) => {
        dispatch({
            type: GET_SLUG,
            payload:{
                slug: slug

            }
        })
    }
}