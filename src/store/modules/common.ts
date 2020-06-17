import { Commit, ActionTree, MutationTree } from "vuex";
import { PanelShow, RootState } from "../types";
import { Module } from "vuex";

const state: PanelShow = {
  showSMap: false,
  showAMap: false,
  showModelo: false
};

const getters = {};

const mutations: MutationTree<PanelShow> = {
  amapStatus(state: PanelShow, payload: boolean) {
    state.showAMap = payload;
  }
};

const actions: ActionTree<PanelShow, any> = {
  setAmapStatus: (context: { commit: Commit }, payload: boolean) => {
    context.commit("setMapType", payload);
  }
};

const common: Module<PanelShow, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default common;
