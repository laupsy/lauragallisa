// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/laura/lauragallisa/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-jsx": () => import("/Users/laura/lauragallisa/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-work-jsx": () => import("/Users/laura/lauragallisa/src/pages/work.jsx" /* webpackChunkName: "component---src-pages-work-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/laura/lauragallisa/.cache/data.json")

