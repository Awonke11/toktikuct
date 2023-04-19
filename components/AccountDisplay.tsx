import useProfileImage from "@/hooks/useProfileImage";
import Link from "next/link";
import styles from "@/styles/components/AccountDisplay.module.css";

const AccountDisplay = () => {
    const profileCredentails = useProfileImage("Awonke Mnotoza")
    return (
        <Link href="/" className={styles.accountDisplay}>
            <div className={styles.accountDisplayProfile}>{profileCredentails}</div>
            <div className={styles.accountDisplayInfo}>
                <h2 className={styles.accountDisplayInfoTitle}>Awonke Mnotoza</h2>
                <p className={styles.accountDisplayInfoText}>visit account</p>
            </div>
        </Link>
    )
}

export default AccountDisplay;