import Link from 'next/link';
import { Grid, Image } from 'semantic-ui-react';
import styles from "./ItemList.module.css";

export default function ItemList({ list }) {
    return <div className={styles['container']}>
        <Grid columns={3}>
            <Grid.Row >
                {list.map((item, index) => (
                    <Grid.Column key={index}>
                        <Link href={`/detail/${item.id}`}>
                            <div className={styles['wrap']}>
                                <img src={item.image_link} alt={item.name} className={styles['img-item']}/>
                                <strong className={styles['tit-item']}>{item.name}</strong>
                                <span className={styles['txt-info']}>
                                    {item.category} {item.product_type}
                                </span>
                                <strong className={styles['num-price']}>${item.price}</strong>
                            </div>
                        </Link>
                    </Grid.Column>
                ))}
            </Grid.Row>
        </Grid>
    </div>
}