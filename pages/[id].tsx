import Head from "next/head";
import styles from "@/styles/UserPage.module.css";
import UserNavigation from "@/components/UserNavigation";
import Video from "@/components/Video";
import {useState} from "react";
import {BsCircle, BsFillCircleFill } from "react-icons/bs";
import dynamic from "next/dynamic";
import UserView from "@/components/UserView";

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

const UserPage = () => {
    const [select, setSelect] = useState<number>(0);
    return (
        <>
            <Head>
                <title>User Page</title>
            </Head>
            <main className={styles.userPage}>
                <UserNavigation />
                <section className={styles.userPageContent}>
                    <UserView width={"30%"} />
                    <section className={styles.userPageContentVid}>
                        <Video link={videosList[select].link} title={videosList[select].title} description={videosList[select].description} />
                        <div className={styles.userPageContentVidSelect}>
                            {videosList.map((v, index) => {
                                return <div key={index}>
                                    {(select === index) ? <BsFillCircleFill /> : <BsCircle onClick={() => setSelect(index)} />}
                                </div>
                            })}
                        </div>
                    </section>
                </section>
            </main>
        </>
    )
}

export default dynamic (() => Promise.resolve(UserPage), {ssr: false})