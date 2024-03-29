const Reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PEGAWAI':
            return {
                ...state,
                pegawai: action.payload
            };
        case 'ADD_PEGAWAI':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        case 'EDIT_PEGAWAI':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        case 'REMOVE_PEGAWAI':
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload)
            };
        case 'SET_ERROR':
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default Reducer;