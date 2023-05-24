# react-plugin

[Live link](https://react-plugin.vercel.app/)

# WEEK2 THEORY TASKS

## Monday Meeting Tasks

### Can interface/type be used in non typescript react project?

Technically, an interface can't be used in a non typescript react project, but type definitions can be done.

Through the react inbuilt propTypes property, component prop types can be explicitly defined, as well as the `required` status of the prop.

By specifying that a prop is `required`, the dev would receive an error in the console during run-time when an expected prop is missing.

Example:

```
import propTypes from "prop-types";

export const Component = ({prop1, prop2}) => {
// rest of component logic

return <button> ... </button>
}

Component.propTypes = {
    prop1: propTypes.string.required,
    prop2: propTypes.string
}
```

To make known which props are optional, entering a default value to the prop within the component creates a fallback for the prop except dev enters a desired value for a prop with default value.

Example:

```
export const Component = ({prop1 = "hello1", prop2 = "hello2"}) => {
// rest of component logic

return <button> ... </button>
```

In conclusion, getting missing expected prop errors during run-time isn't the best as such errors can be received during development if it were to be a typescript project with compulsory prop interfaces.
