import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from "axios"
import Item from '../../src/components/Item'
import styles from './Post.module.css';
import { Loader } from 'semantic-ui-react';
import Head from 'next/head';

const Post = ({item}) => {
    return <div className={styles['item-container']}>
        <>
            {/* item이 있는지 없는지 확인한다. */}
            {item && (
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name='description' content={item.description} ></meta>
                    </Head>
                    <Item item={item}/>
                </>
            )}
        </>
    </div>
}

export default Post

// Server Side Rendering (SSR)
export async function getServerSideProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props : {
            item : data,
        }
    }
}