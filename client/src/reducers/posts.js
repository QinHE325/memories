export default (posts = [], action) => {
    switch (action.Type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}