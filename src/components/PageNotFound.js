import background from '../imports/wall.jpg';

const PageNotFound = () => {
    return(
        <div style={{ backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'}}>
            <div>
                <h1>Page Not Found!</h1>
            </div>
        </div>
    )
}

export default PageNotFound;