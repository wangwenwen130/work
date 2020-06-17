import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import modules from "./modules/index";
import { RootState } from "./types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules
};

export default new Vuex.Store(store);
