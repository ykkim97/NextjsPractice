import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import { Header, Divider} from "semantic-ui-react";
import ItemList from '../src/components/ItemList';

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;

  function getData() {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data);
        setList(res.data);
      })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <Head>
        <title>HOME | 나야나</title>
      </Head>
      <Header as='h2'>
        Best 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0,9)} />
      <Header as='h2'>
        새 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  )
}
