1. What problem does the context API help solve?

  Context provides a way to pass data through the component tree without having to pass props down manually at every level. i.e. No Prop Drilling



2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  a.) Store -- is a centralized place to hold the state of an application -- hence also being the 'single source of truth' -- you can find all state here, in store and you can access it anywhere in the App.

  b.) actions take in data and dispatch that data to the reducers

  c.) reducers take that data and make a copy of state, update state, and then pass it back to the app



3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Component state could be form data, like input text, Application state is state that needs to be accessed on multiple levels of the app.



4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk is a middleware that extends the stores abilities and lets you write async logic that interacts with the store -- it allows us to write action creators that return functions instead of actions



5. What is your favorite state management system you've learned and this sprint? Please explain why!

  Redux is probably my favorite so far just because of the satisfaction of finally hitting that ah-ha moment, and the difficulty that it took to learn it. Now that we know it, it seems very useful.