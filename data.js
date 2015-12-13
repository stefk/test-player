import choices from './choice/samples'
import clozes from './cloze/samples'

export default {
  title: 'Lorem',
  questions: [
    {
      question: choices[0],
      selectedIds: [],
      enableChoice: true,
      enableSubmit: false
    },
    {
      question: choices[1],
      selectedIds: [],
      enableChoice: true,
      enableSubmit: false
    },
    {
      question: clozes[0],
      enableFill: true,
      enableSubmit: false,
      tokens: [
        {
          type: 'text',
          data: 'Foo bar '
        },
        {
          type: 'hole',
          data: {
            id: '1',
            size: 10,
            placeholder: ''
          }
        },
        {
          type: 'text',
          data: ' baz '
        },
        {
          type: 'hole',
          data: {
            id: '2',
            size: 12,
            placeholder: 'quz'
          }
        },
      ],
      filledHoles: [
        {
          id: '1',
          text: ''
        },
        {
          id: '2',
          text: ''
        }
      ]
    }
  ]
}
