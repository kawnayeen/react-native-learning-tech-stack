/**
 * Created by kawnayeen on 4/17/17.
 */
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
