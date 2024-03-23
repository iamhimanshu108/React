function Pokemon({ name , image}) {
    return (
        <div>
            <div>{name}</div>
            <div><img src={image}></img></div>
        </div>
    )
}

export default Pokemon;