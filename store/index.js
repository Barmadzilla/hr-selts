export const state = () => ({
    width: 0,
});

export const mutations = {
    add(state, w) {
        state.width = w;
    },
};
