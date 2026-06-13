import ProductList from '@/components/ProductList';
import React from 'react'

const products = async ({searchParams, } : {searchParams: Promise<{category: string}>;}) => {
  const category = (await searchParams).category;
  return (
    <div className=''>

          <ProductList category={category} params="products"/>
    </div>
  )
}

export default products
