import useProfileImage from "@/hooks/useProfileImage";
import Link from "next/link";
import styles from "@/styles/components/UserView.module.css";

const UserView = ({width, show} : {width: string, show?: boolean}) => {
    const profileImage = useProfileImage("Awonke Mnotoza");
    return (
        <div className={styles.userView} style={{width: width}}>
            <div className={styles.userViewProfile}>{profileImage}</div>
            <h4 className={styles.userViewTitle}>Awonke Mnotoza</h4>
            <p className={styles.userViewProfession}>Full-Time student</p>
            <p style={{display: `${(show === undefined) ? "flex" : "none"}`}} className={styles.userViewDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quos ratione, repellat magni vitae fuga!</p>
            <div className={styles.userViewStatus}>
                <div className={styles.userViewStatusContent}>
                    <h4 className={styles.userViewStatusContentNumber}>12</h4>
                    <p className={styles.userViewStatusContentText}>Posts</p>
                </div>
                <div className={styles.userViewStatusContent}>
                    <h4 className={styles.userViewStatusContentNumber}>12</h4>
                    <p className={styles.userViewStatusContentText}>Followers</p>
                </div>
            </div>
            <Link href="/" className={styles.userViewButton}>Delete Account</Link>
        </div>
    )
}

export default UserView;