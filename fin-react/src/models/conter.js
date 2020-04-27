export default {
    namespace:'conter',
    state:10,
    reducers:{
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        }
    }
}