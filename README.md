# Multi-Page SPA with React Router

React Router section from [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Key Concepts

- Client-Side Routing
  - JS web app that loads in the browser and only change what is displayed on the screen using JS
  - does not fetch individual HTML pages from the server
- React-Router
  - Wrap index.js root App Component render in `<BrowserRouter></BrowserRouter>`
  - To Route to a normal page in App.js:
    ```js
    <Route path="/">
      <Component />
    </Route>
    ```
- Would be a bad form to do a normal header component with navigation because it would cause the app to reload and lose all application state
  - instead use the `Link` component supplied by react-router-dom
  - use `NavLink` to add css class on active link
- Add dynamic routes with params (e.g. `"/products/:productId"`)
  - useParams()
    - sends back an object with key:value pairs where key is the dynamic segment leading to that page
- `<Switch>` allows only one route to be matched at a time
  - as of react-router v5, it matches the first one it finds
    - unless you add the `exact` prop
- not limited to defining Routes in one component, can add them wherever you want
- use `<Redirect>` with something such as `path='/' exact` to automatically go to another page such as `/welcome`
