import Navigation from "@/components/Navigation";
import Link from "next/link";
import styles from "@/styles/components/UserNavigation.module.css";

const UserNavigation = () => {
    return (
        <section className={styles.userNavigation}>
            <Link href="/" className={styles.userNavigationLink}>
                <h1 className={styles.userNavigationLinkText}>TokTik</h1>
            </Link>
            <Navigation />
            <h1 className={styles.userNavigationTitle}>Logout</h1>
        </section>
    )
}

export default UserNavigation;