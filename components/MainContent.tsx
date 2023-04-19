import Navigation from "./Navigation";
import styles from "@/styles/components/MainContent.module.css";

const MainContent = () => {
    return (
        <section className={styles.mainContent}>
            <Navigation />
            <section className={styles.mainContentSection}></section>
        </section>
    )
}

export default MainContent;