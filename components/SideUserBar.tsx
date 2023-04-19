import Link from "next/link";
import AccountView from "./AccountView";
import styles from "@/styles/components/SideUserBar.module.css";

const SideUserBar = () => {
    return (
        <section className={styles.sideUserBar}>
            <Link href="/" className={styles.sideUserBarLink}>
                <h1 className={styles.sideUserBarLinkText}>TokTik</h1>
            </Link>
            <AccountView />
        </section>
    )
}

export default SideUserBar;