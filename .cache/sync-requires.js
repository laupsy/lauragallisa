const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/laura/lauragallisa/.cache/dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/laura/lauragallisa/src/pages/index.jsx"))),
  "component---src-pages-work-jsx": hot(preferDefault(require("/Users/laura/lauragallisa/src/pages/work.jsx")))
}

