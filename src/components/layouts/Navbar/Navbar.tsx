import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import { capitalize } from '../../../utils/Capitalize';


const navMenu = [
    {title: "cars", path: "/cars"},
    {title: "contact", path: "/contact"},
    {title: "about", path: "/about"},
]

const Navbar = () => {
    return (
        <nav>
            <div className={`container ${styles["nav-body"]}`}>
                <h1>Caravel</h1>
                <ul className={styles["nav-list"]}>
                   {
                        navMenu.map((item, index) => (
                            <li className={styles["nav-list-item"]} key={index}>
                                <Link to={item.path}>
                                    {capitalize(item.title)}
                                </Link>
                            </li>
                        ))
                   }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar