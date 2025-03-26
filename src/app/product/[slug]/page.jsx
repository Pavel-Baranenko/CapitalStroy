import React from 'react'
import Header from "../../../components/Header"
import Product from "../../../components/Product"
import { products } from '../../../products'


export const generateMetadata = async ({ params }) => {
  const slug = (await params).slug
  const info = products.find(e => (e.article.toLowerCase()).replace(/\s+/g, '-') == slug)

  return {
    title: `${info.category} ${info.collection} ${info.article} ${info.params['Покрытие']} ${info.params['Размер']}`,
    description: `Купить плитку ${info.category} Коллекция ${info.collection} артикл ${info.article} Покрытие ${info.params['Покрытие']} Размер ${info.params['Размер']} Количество в упаковке, м2/шт ${info.params['Кол-во в уп., м2/шт']} Кол-во на поддоне, м2 ${info.params['Кол-во на поддоне, м2']} с доставкой в Краснодаре, по Краснодарскому краю`
  };
};

export default async function ProductPage({ params }) {
  const slug = (await params).slug
  const product = products.find(e => (e.article.toLowerCase()).replace(/\s+/g, '-') == slug)

  return (
    <>
      <Header />
      <Product info={product} />
    </>
  )
}
