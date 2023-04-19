import {AiOutlineMenu} from "react-icons/ai";
import {FiSidebar} from "react-icons/fi";
import {RxDividerVertical} from "react-icons/rx";
import {BsSearch} from "react-icons/bs";
import styles from "@/styles/components/Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <AiOutlineMenu className={styles.navigationToggle} />
            <div className={styles.navigationContent}>
                <input 
                    type="search" 
                    placeholder="Search for a account..." 
                    className={styles.navigationContentInput}
                />
                <RxDividerVertical className={styles.navigationContentLine} />
                <BsSearch className={styles.navigationContentSearch} />
            </div>
            <FiSidebar className={styles.navigationToggle} />
        </nav>
    )
}

export default Navigation;