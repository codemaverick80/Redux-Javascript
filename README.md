# Redux-Javascript

How to use Redux with vanilla JavaScript

**requirement:** Nodejs

#### create a directory

```bash
mkdir redux-javascript
```

#### navigate into directory

```bash
cd redux-javascript
```

#### initialize the package.json

```bash
npm init --yes
```

#### install redux

```bash
npm install redux
```

#### open it in vs code

```bash
code .
```

#### run

```bash
node index

node ReducerComplexObject
```

#### What is Redux?

Redux is a pattern and library for managing and updating application state, using events called "actions".

#### Three Core Concepts in Redux

| Cake Shop Scenario | Redux   | Purpose                             |
| ------------------ | ------- | ----------------------------------- |
| Shop               | Store   | Holds the state of your application |
| Cake Ordered       | Action  | Describes what happened             |
| Shopkeeper         | Reducer | Ties the store and actions together |
|                    |         |                                     |

Store

Actions

Reducer

#### Three Principles in Redux

**First Principle<u></u>**

"The global state of your application is stored as an object inside a single store"

we have to maintain our application state in single object which would be managed by the Redux store

<u>Cake Shop scenario -</u> - Let's assume we are tracking the number of cakes on the shelf

```javascript
// All of the application's state should be stored as an object not as a variable(s).

{
  numberOfCakes: 10;
}
```

**Second Principle**
"The only way to change the state is to **dispatch** an action, an object that describes what happened"

To update the state of your app, you need to let Redux know about that with an action. we are not allowed to directly update the state object.

<u>Cake Shop scenario -</u>

action - CAKE_ORDERED => action is simple object that contains a type property describing the event

```javascript
{
  type: "CAKE_ORDERED";
}
```

**Third Principle**
"To specify how the state tree is updated based on actions, you write pure reducers"

Reducer - (previousState, action)=> newState

Reducer : it is a pure function that takes previousState and action as input arguments and returns new state

```javascript

const reducer(state=initialState,action) => {
	switch(action.type){
		case 'CAKE_ORDERED':
			return {
					numberOfCakes: state.numberOfState - 1
			}
	}
}

```

**JavaScript App**

A simple JavaScript application.

**Redux Store (State) :**

The state of the application maintained separately in the Redux Store. our application is always subscribed to this Redux store. our application is NOT allowed to change state directly.

One store for the entire application

Responsibilities: - Holds application state. - Allows access to state via getState() - Allows state to be updated via dispatch(action) - Registers listeners via subscribe(listener)

**Action**

if our application has to update the state then it has to emit or dispatch an action.

**Reducer**

Once an action has been dispatched, the reducer handle that action and update the current state.

### Redux Middleware

- Middleware is the suggested way to extend Redux with custom functionality.
- Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.
- Use middleware for logging, crash reporting, performing asynchronous tasks etc.

NPM package: `redux-logger`

# ReactToolkit with JavaScript

### Redux concerns

    - Redux requires too much boilerplate code:
    	- Action
    	- Action Object
    	- Action Creator
    	- Switch statement in a reducer
    - A lot of other packages have to be installed to work with Redux
    	- Redux-thunk
    	- Immer
    	- Redux-devtools

### Redux Toolkit

### React Redux Toolkit

```bash
npm create vite@latest react-reduxtoolkit


# select react
# select typescript

cd react-reduxtoolkit

npm install

npm install axios @reduxjs/toolkit
```
