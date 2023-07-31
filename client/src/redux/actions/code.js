import { start, end, error, ALike, like } from "../reducers/code";

export const likePost = (codeId) => async (dispatch) => {
    dispatch(like(codeId))
    // try {
    //     dispatch(start())
    //     dispatch(ALike(codeId))
    //     dispatch(end())
    // }
    // catch (e) {
    //     dispatch(error(e.message))
    // }
}
