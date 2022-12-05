import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Header, Divider, Loader } from "semantic-ui-react";
import ItemList from '../src/components/ItemList';

export default function Home({ list }) {
  return (
    <div className={styles['index-Container']}>
      <Head>
        <title>HOME | 나야나</title>
        <meta name='description' content='나야나 뷰티쇼핑입니다.'></meta>
      </Head>
      <>
        <Header as='h2' className={styles['listTitle']}>
          Best 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(0,9)} />
        <Header as='h2' className={styles['listTitle']}>
          새 상품
        </Header>
        <Divider />
        <ItemList list={list.slice(9)} />
      </>
    </div>
  )
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props : {
      list : data,
      name : process.env.name,
    }
  }
}