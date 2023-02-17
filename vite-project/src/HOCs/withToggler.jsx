// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

export function withToggler(component) {
    return function(props) {
        return (
            <Toggler />
        )
    }
}