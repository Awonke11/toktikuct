import AccountDisplay from "./AccountDisplay";
import styles from "@/styles/components/OtherSideBar.module.css";

const OtherSideBar = () => {
    return (
        <section className={styles.otherSideBar}>
            <h2 className={styles.otherSideBarTitle}>Logout</h2>
            <div className={styles.otherSideBarContent}>
                <h1 className={styles.otherSideBarContentTitle}>Other accounts</h1>
                <div className={styles.otherSideBarContentAccounts}>
                    <AccountDisplay />
                    <AccountDisplay />
                </div>
            </div>
        </section>
    )
}

export default OtherSideBar;