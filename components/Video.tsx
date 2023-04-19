import styles from "@/styles/components/Video.module.css";
import ReactPlayer from 'react-player/youtube';
import AccountDisplay from "./AccountDisplay";

type VideoProps = {
    link: string,
    title: string,
    description: string
}

const Video = ({link, title, description} : VideoProps) => {
    return (
        <div className={styles.video}>
            <ReactPlayer url={link} width="37.5%" height="100%" style={{borderRadius: "10px"}} playing={true} />
            <div className={styles.videoInfo}>
                <h1 className={styles.videoInfoTitle}>{title}</h1>
                <p className={styles.videoInfoText}>{description}</p>
                <div>
                    <AccountDisplay />
                </div>
            </div>
        </div>
    )
}

export default Video;