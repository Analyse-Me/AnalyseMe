export interface QuizThumb {
  Title: string
  Tags: QuizTag[]
  ID: string
}

export enum QuizTagCategory {
  POLITICAL = 'political',
  ECONOMIC = 'economic',
  PHILOSOPHICAL = 'philosophical',
  PSYCHOLOGICAL = 'psychological',
  OTHERS = 'others',
}

export interface QuizTag {
  Name: QuizTagCategory
  Icon: string
  Color: string
}
