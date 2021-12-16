const Greet = (props) => {
    return (
        <div>
            <h1>waddup {props.name}</h1>
            {props.children}
        </div>
    )
}
export default Greet