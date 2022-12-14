import { Link, Outlet } from "react-router-dom";
import { MainContext, useContext } from '../context';

const Layout = () => {
    const { isData } = useContext(MainContext);
    const { isDataComments } = useContext(MainContext);
    const { isDataUsers } = useContext(MainContext);
    return (
        <div className="menu">
            <nav>
                <ul>
                    <li className={isData ? 'bg-success' : 'bg-danger text-white'}>
                        <Link to="/">Todos</Link>
                    </li>
                    <li className={isDataUsers ? 'bg-success' : 'bg-danger text-white'}>
                        <Link to="/users">Users</Link>
                    </li>
                    <li className={isDataComments ? 'bg-success' : 'bg-danger text-white'}>
                        <Link to="/comments">Comments</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>

    )
}

export default Layout;