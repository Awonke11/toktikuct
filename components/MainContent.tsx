import Navigation from "./Navigation";
import styles from "@/styles/components/MainContent.module.css";
import Video from "./Video";
import {useState} from "react";
import {BsCircle, BsFillCircleFill } from "react-icons/bs"

const videosList = [
    {
        title: "Video Title",
        description: "some description",
        link: "https://youtube.com/shorts/0hMo6xNiZP8?feature=share"
    },
    {
        title: "Video Title 2",
        description: "some description",
        link: "https://youtube.com/shorts/S8om4sh-2ow?feature=share"
    },
    {
        title: "Video Title 3",
        description: "some description",
        link: "https://youtube.com/shorts/gVS5wQc1KLU?feature=share"
    },
]

const MainContent = () => {
    const [select, setSelect] = useState<number>(0)
    return (
        <section className={styles.mainContent}>
            <Navigation />
            <section className={styles.mainContentSection}>
                <Video link={videosList[select].link} title={videosList[select].title} description={videosList[select].description} />
                <div className={styles.mainContentSectionSelect}>
                    {videosList.map((v, index) => {
                        return <div key={index}>
                            {(select === index) ? <BsFillCircleFill /> : <BsCircle onClick={() => setSelect(index)} />}
                        </div>
                    })}
                </div>
            </section>
        </section>
    )
}

export default MainContent;