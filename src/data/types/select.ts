export interface QuizThumb {
  Title: string
  Desc: string
  Tags: QuizTag[]
  ID: string
}

export enum QuizTagCategory {
  POLITICAL = 'Political',
  ECONOMIC = 'Economic',
  PHILOSOPHICAL = 'Philosophical',
  PSYCHOLOGICAL = 'Psychological',
  OTHERS = 'Others',
}

export interface QuizTag {
  Name: QuizTagCategory
  Icon: string
  Color: string
}
