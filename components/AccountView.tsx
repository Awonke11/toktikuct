import useProfileImage from "@/hooks/useProfileImage";
import Link from "next/link";
import styles from "@/styles/components/AccountView.module.css";

const AccountView = ({width, show} : {width: string, show?: boolean}) => {
    const profileImage = useProfileImage("Awonke Mnotoza");
    return (
        <div className={styles.accountView} style={{width: width}}>
            <div className={styles.accountViewProfile}>{profileImage}</div>
            <h4 className={styles.accountViewTitle}>Awonke Mnotoza</h4>
            <p className={styles.accountViewProfession}>Full-Time student</p>
            <p style={{display: `${(show === undefined) ? "flex" : "none"}`}} className={styles.accountViewDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos ratione, repellat magni vitae fuga!</p>
            <div className={styles.accountViewStatus}>
                <div className={styles.accountViewStatusContent}>
                    <h4 className={styles.accountViewStatusContentNumber}>12</h4>
                    <p className={styles.accountViewStatusContentText}>Posts</p>
                </div>
                <div className={styles.accountViewStatusContent}>
                    <h4 className={styles.accountViewStatusContentNumber}>12</h4>
                    <p className={styles.accountViewStatusContentText}>Followers</p>
                </div>
            </div>
            <Link href="/some" className={styles.accountViewButton}>See account</Link>
        </div>
    )
}

export default AccountView;