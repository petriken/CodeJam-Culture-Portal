import React from 'react';
import './CommonPage.css';
import CommonPageItems from '../components/CommonPageItems/CommonPageItems';
import SearchPanel from '../components/SearchPanel/SearchPanel';
import Layout from "../components/layout";

function CommonPage() {
  return (
    <Layout>
      <div className="commonpage-container">
        <SearchPanel />
        <CommonPageItems />
      </div>
    </Layout>
  )
}

export default CommonPage;


