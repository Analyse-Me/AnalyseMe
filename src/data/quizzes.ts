import { QuizTag, QuizTagCategory, QuizThumb } from './types/select'

export const tags: { [key: string]: QuizTag } = {
  Political: {
    Name: QuizTagCategory.POLITICAL,
    Icon: 'landmark',
    Color: '#00647D',
  },
  Economic: {
    Name: QuizTagCategory.ECONOMIC,
    Icon: 'coins',
    Color: '#008E0B',
  },
  Philosophical: {
    Name: QuizTagCategory.PHILOSOPHICAL,
    Icon: 'brain',
    Color: '#8B3E91',
  },
  Psychological: {
    Name: QuizTagCategory.PSYCHOLOGICAL,
    Icon: 'users',
    Color: '#A50034',
  },
  Others: {
    Name: QuizTagCategory.OTHERS,
    Icon: 'question',
    Color: '#E0950B',
  },
}

export const quizzes: QuizThumb[] = [
  {
    Title: 'Political Compass',
    Desc: 'The Political Compass is a test which uses responses to a set of 62 propositions to rate political ideology in a political spectrum with two axes: economic (left–right) and social (authoritarian–libertarian).',
    Tags: [tags.Political, tags.Economic],
    ID: 'political_compass',
  },
  {
    Title: 'Political Ideas',
    Desc: 'One of the largest in the world, multi-vector political test showing your views on many axes, compass, matches ideology or thinkers.',
    Tags: [tags.Political, tags.Economic, tags.Philosophical, tags.Others],
    ID: 'political_ideas',
  },
  {
    Title: 'Economic Freedom Analysis',
    Desc: 'A political test that represents your views on the economy - the market, taxation or state intervention - and matches the school of economics.',
    Tags: [tags.Economic],
    ID: 'economic_freedom_analysis',
  },
  {
    Title: 'Personal Freedom Analysis',
    Desc: 'An online test of your approach to very broadly understood personal freedom.',
    Tags: [tags.Political, tags.Philosophical, tags.Others],
    ID: 'personal_freedom_analysis',
  },
  {
    Title: '8Values',
    Desc: "The 8values Political Quiz measures individuals' political values, including Equality, Nation, Liberty, Tradition, Markets, World, Authority, and Progress.",
    Tags: [tags.Political, tags.Economic],
    ID: '8values',
  },
  {
    Title: '9Axes',
    Desc: '9Axes, based off of 8values is a political quiz that attempts to assign percentages on nine different political axes.',
    Tags: [tags.Political, tags.Economic],
    ID: '9axes',
  },
]
