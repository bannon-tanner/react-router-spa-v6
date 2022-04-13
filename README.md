# Upgrading React Router from v5 to v6

React Router section from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Key Concepts

`<Switch>` becomes `<Routes>`

No longer pass components to `<Route>` as children, instead they get passed to the `element` prop
```js
// v5
<Route path="/welcome">
  <Welcome />
</Route>

// v6
<Route path="/welcome" element={<Welcome />} />
```

`exact` is no longer needed
Now has a better algorithm for picking the best path to be loaded

`activeClassName` prop from v5 in the `<NavLink>` component no longer works
- `className` now takes a function that gives an argument 'navData' about the current link
  - 'navData' has an `isActive` property

`Redirect` no longer exists as a component
- changed to `Navigate`

nested routes must be wrapped with `Routes` now if used within components
- can add the nested route to the parent Route
- allows you to add all route definitions in one place
- paths in nested routes are now *relative* 

if using nested routes in the main Routes file, must tell React where you want the nested content to be inserted with the `Outlet` component

imperative navigation - `useHistory` doesn't exist anymore
- replaced by `useNavigate`

`Prompt` no longer exists, have to implement own feature for this
