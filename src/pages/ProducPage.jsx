import React from 'react'
import ProductDetails from '../components/product/ProductDetails'
import ProductNavigate from '../components/product/ProductNavigate'
import TabsBtns from '../components/shop/ProducsTabs/TabsBtns'
import DescripTabs from '../components/product/DescriptionTabs/DescripTabs'

const ProducPage = () => {
  return (
    <div>
      <ProductNavigate />
      <ProductDetails />
      <DescripTabs/>
      <div className="mt-12">
        <TabsBtns />
      </div>
    </div>
  );
}

export default ProducPage