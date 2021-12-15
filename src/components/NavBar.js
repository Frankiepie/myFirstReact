const NavBar = () => {
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/myfirstreact">Lonely Toons</a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/myfirstreact">My Home</a>
                            <a class="nav-link" href="/myfirstreact/employees">Members</a>
                            <a class="nav-link" href="/myfirstreact/add">Add Member</a>
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Sad Times</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar