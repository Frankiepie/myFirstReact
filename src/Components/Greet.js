const Greet = (props) => {
    return (
        <div>
            <h1>Yawa ka{props.name}</h1>
            {props.children}
        </div>
    )
}
export default Greet