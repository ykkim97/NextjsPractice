import { Icon } from "semantic-ui-react";
import styles from "./Error404.module.css";

export default function Error404() {
    return <div className={styles['Error404-Container']}>
        <Icon name="warning circle" color="red"/>
        404 Error : 페이지를 찾을 수 없습니다.
    </div>
}