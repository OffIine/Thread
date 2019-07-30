import Thread, { __ } from '../Thread'

let th = new Thread('Alex')

th.Filter(
  ({ x, y }, a, b) => {
    return a !== b && !!x && !!y
  },
  { coords: __ }
)

th.On(
  (v) => {
    alert(JSON.stringify(v))
  },
  { yeah: __ }
)

th.Connect('Tyler')

th.Add(
  {
    yeah: { man: 123 },
    coords: { x: 2, y: 4 }
  }
)
