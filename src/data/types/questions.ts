export interface Question<T> {
  question: string
  effect: QuizEffects & T
}

export interface Ideology<T> {
  name: string
  stats: QuizEffects & T
}

export interface QuizEffects {
  [key: string]: number
}
