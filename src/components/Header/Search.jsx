import React from 'react';
import { Input } from 'antd';
import { SearchOutlined  } from '@ant-design/icons';
import './Search.css'
const Search = () => {
    return (
         <Input placeholder="Search Here" className='serach' prefix={<SearchOutlined  />} />
    );
};

export default Search;
