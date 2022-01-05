import { QuizEffects } from './questions'

export interface _Compass extends QuizEffects {
  econ: number
  govt: number
  scty: number
}

export interface _8Values extends QuizEffects {
  econ: number
  dipl: number
  govt: number
  scty: number
}

export interface _8Axes extends QuizEffects {
  fed: number
  dem: number
  glo: number
  mil: number
  fre: number
  equ: number
  sec: number
  pro: number
  mul: number
}

export interface _Soulgraphy_PI extends QuizEffects {
  econ_soci: number
  econ_regu: number
  econ_prot: number
  state_glob: number
  state_peac: number
  state_fede: number
  state_demo: number
  society_indi: number
  society_prog: number
  society_secu: number
  society_revo: number
  law_free: number
  law_reso: number
  law_ecol: number
}
