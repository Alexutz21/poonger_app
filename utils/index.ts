import type { NextPage } from 'next';
import axios from 'axios';
import Home from '../pages';


export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const createOrGetUser = async (response:
  any, addUser: any) => {
  
};
  
export const getServerSideProps = async () => {
  const response = await axios.get('https://localhost:3000/api/post');
  console.log(response.data.name);
  return {
    props:{}
  }
}
export default Home;