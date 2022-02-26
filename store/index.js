export const state = () => ({
  name: ''
});

export const getters = () => ({
  getName (state) {
    return state.name;
  }
});

export const mutations = () => ({
  SET_NAME (state, payload) {
    state.name = payload;
  }
});

export const actions = () => ({

});