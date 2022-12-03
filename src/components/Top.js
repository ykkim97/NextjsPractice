import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
import styles from "./Top.module.css";

export default function Top() {
    return <div>
        <header className={styles['top-container']}>
            <div className={styles['top-logo-container']}>
                <div className={styles['top-logo-img-container']}>
                    <img 
                        src="/images/bird.jpg" 
                        alt="logo"
                        className={styles['top-logo']}
                    />
                </div>
                <Header as='h1'>나야나</Header>
            </div>
            <Gnb />
        </header>
        
    </div>
}