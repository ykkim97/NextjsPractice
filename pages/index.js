import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Header, Divider, Loader } from "semantic-ui-react";
import ItemList from '../src/components/ItemList';

export default function Home() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;

  function getData() {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data);
        setList(res.data);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className={styles['index-Container']}>
      <Head>
        <title>HOME | 나야나</title>
        <meta name='description' content='나야나 뷰티쇼핑입니다.'></meta>
      </Head>
      {isLoading && (
        <div className={styles['loading-Container']}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
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
      )}
    </div>
  )
}
