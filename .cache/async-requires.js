// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-jsx": () => import("/Users/lauragallisa/lauragallisa/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/lauragallisa/lauragallisa/.cache/data.json")

