import { createStore } from 'vuex'

import AuthModule from './modules/auth'
import ResultsModule from './modules/results'

const store = {
  modules: {
    AuthModule,
    ResultsModule,
  },
}

export default createStore(store)
