import Thread, { _ } from '../Thread'

let th = new Thread('Alex')

th.Filter(
  ({ x, y }, a, b) => {
    return a !== b && !!x && !!y
  },
  { pos: _ }
)

th.On(
  (msg) => {
    alert(JSON.stringify(msg['Tyler']))
  },
  { msg: _ }
)

th.Connect('Tyler')

th.Add(
  {
    msg: {
      'Alex': 'hey!',
      'Tyler': 'yo..',
    },
    pos: {
      'Alex': { x: 2, y: 4 },
      'Tyler': { x: 1, y: 5 }
    }
  }
)
