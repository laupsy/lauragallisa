const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/lauragallisa/lauragallisa/src/pages/index.jsx")))
}

