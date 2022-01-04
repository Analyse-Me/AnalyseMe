export interface Question<T> {
  question: string
  effect: QuizEffects & T
}

export interface QuizEffects {
  [key: string]: number
}

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace Quiz {
  export interface Compass extends QuizEffects {
    econ: number
    govt: number
    scty: number
  }
}

export interface Ideology<T> {
  name: string
  stats: QuizEffects & T
}

export default Quiz
