import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from "axios"
import Item from '../../src/components/Item'
import styles from './Post.module.css';
import { Loader } from 'semantic-ui-react';
import Head from 'next/head';

const Post = ({ item, name }) => {
    const router = useRouter();
    console.log(router.isFallback);

    if (router.isFallback) {
        return (
            <div className={styles['loading-Container']}>
                <Loader active inline="centered">
                    Loading...
                </Loader>
            </div>
        )
    }

    return <div className={styles['item-container']}>
        <>
            {/* item이 있는지 없는지 확인한다. */}
            {item && (
                <>
                    <Head>
                        <title>{item.name}</title>
                        <meta name='description' content={item.description} ></meta>
                    </Head>
                    {name} 환경입니다.
                    <Item item={item}/>
                </>
            )}
        </>
    </div>
}

export default Post

export async function getStaticPaths() {
    const apiUrl = process.env.apiUrl;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        // paths : [
        //     { params : { id : '740' } },
        //     { params : { id : '730' } },
        //     { params : { id : '729' } },
        // ],
        paths : data.map((item) => ({
            params : {
                id : item.id.toString(),
            }
        })),
        fallback: true
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props : {
            item : data,
            name : process.env.name,
        }
    }
}