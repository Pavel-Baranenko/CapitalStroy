'use client'
import React, { useId } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import { products } from '../products.js';




const brands = [...new Set(products.map(item => item.collection))]
const sizes = [...new Set(products.map(item => item.params['Размер']))]
const covering = [...new Set(products.map(item => item.params['Покрытие']))]

let searchParams = {
  'Покрытие': [],
  'Размер': [],
  collection: []
}

export default function Catalog() {
  const [relatedProducts, setRelatedProducts] = React.useState(products)
  const [load, setLoad] = React.useState(false)
  const [selected, setSelected] = React.useState(null)

  const [popup, setPopup] = React.useState(false);
  const [name, setName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [mail, setMail] = React.useState();
  const [message, setMessage] = React.useState();
  const [error, setError] = React.useState();
  const [offset, setOffset] = React.useState(32);


  const Send = async () => {
    setError('')
    if (name, phone) {
      setPopup(false)
      setSelected(null)
    } else setError('Запоните все необходимые поля')
  }

  const filter = async () => {
    let search = true
    let searchedItems = products
    if (searchParams.collection.length == 0 && searchParams['Размер'].length == 0 && searchParams['Покрытие'].length == 0) {
      search = false
    }
    if (search) {
      let newList = []
      products.forEach(product => {
        let add = true
        if (searchParams['Покрытие'].length > 0) {
          if (!searchParams['Покрытие'].includes(product.params['Покрытие'])) add = false
        }
        if (searchParams['Размер'].length > 0) {
          if (!searchParams['Размер'].includes(product.params['Размер'])) add = false
        }
        if (searchParams.collection.length > 0) {
          if (!searchParams.collection.includes(product.collection)) add = false
        }
        if (add) newList.push(product)
      });
      searchedItems = newList
    }
    setRelatedProducts(searchedItems)
  }

  const SelectSize = async (size) => {
    if (searchParams['Размер'].includes(size)) {
      searchParams['Размер'] = searchParams['Размер'].filter(e => e != size)
    } else {
      searchParams['Размер'].push(size)
    }
    setLoad(!load)
  }

  const SelectBrand = async (brand) => {
    if (searchParams.collection.includes(brand)) {
      searchParams.collection = searchParams.collection.filter(e => e != brand)
    } else {
      searchParams.collection.push(brand)
    }
    setLoad(!load)
  }

  const SelectCovering = async (covering) => {
    if (searchParams['Покрытие'].includes(covering)) {
      searchParams['Покрытие'] = searchParams['Покрытие'].filter(e => e != covering)
    } else {
      searchParams['Покрытие'].push(covering)
    }
    setLoad(!load)
  }

  React.useEffect(() => {
    filter()
  }, [load])

  return (

    <>
      <section className="catalog">
        <div className="container">
          <div className="catalog__inner">
            <div className="filter">
              {/* <span>
              Цена,
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_14_50)">
                  <path d="M9.66667 10C12.424 10 14.6667 7.75733 14.6667 5C14.6667 2.24267 12.424 0 9.66667 0H3.33334V8.66667H1.33334V10H3.33334V11.3333H1.33334V12.6667H3.33334V16H4.66667V12.6667H10.6667V11.3333H4.66667V10H9.66667ZM4.66667 1.33333H9.66667C11.6887 1.33333 13.3333 2.97867 13.3333 5C13.3333 7.02133 11.6887 8.66667 9.66667 8.66667H4.66667V1.33333Z" fill="black" />
                </g>
                <defs>
                  <clipPath id="clip0_14_50">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <div className="price-inputs">
              <input type="text" placeholder='от' />
              <input type="text" placeholder='до' />
            </div> */}
              <div className="select">
                <div className="select__top">
                  <span>Бренды и коллекции</span>
                  {/* <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M8.57542 3.76302C8.53281 3.72006 8.48212 3.68596 8.42627 3.66269C8.37041 3.63942 8.31051 3.62744 8.25 3.62744C8.1895 3.62744 8.12959 3.63942 8.07374 3.66269C8.01789 3.68596 7.96719 3.72006 7.92459 3.76302L5.82542 5.86218C5.78281 5.90514 5.73212 5.93924 5.67627 5.96251C5.62041 5.98578 5.56051 5.99776 5.5 5.99776C5.4395 5.99776 5.37959 5.98578 5.32374 5.96251C5.26789 5.93924 5.21719 5.90514 5.17459 5.86218L3.07542 3.76302C3.03281 3.72006 2.98212 3.68596 2.92627 3.66269C2.87041 3.63942 2.81051 3.62744 2.75 3.62744C2.6895 3.62744 2.62959 3.63942 2.57374 3.66269C2.51789 3.68596 2.46719 3.72006 2.42459 3.76302C2.33922 3.84889 2.29131 3.96506 2.29131 4.08614C2.29131 4.20723 2.33922 4.32339 2.42459 4.40927L4.52834 6.51302C4.78615 6.77051 5.13563 6.91514 5.5 6.91514C5.86438 6.91514 6.21386 6.77051 6.47167 6.51302L8.57542 4.40927C8.66078 4.32339 8.7087 4.20723 8.7087 4.08614C8.7087 3.96506 8.66078 3.84889 8.57542 3.76302Z" fill="black" />
                </svg> */}
                </div>
                <div className="check__list">
                  {brands.map(e => {
                    const id = useId()
                    return (
                      <div className="checkbox-wrap" key={useId()}>
                        <input type="checkbox" id={id} />
                        <label htmlFor={id} onClick={() => SelectBrand(e)}>{e}</label>
                      </div>
                    )
                  })}
                </div>
                <div className="check__list">
                  {/* <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key='content'
                      initial='collapsed'
                      animate='open'
                      exit='collapsed'
                      variants={{
                        open: { opacity: 1, height: 'auto' },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      className={styles.list__inner}
                      style={{ overflow: 'hidden' }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {OptionCities.map((item) => {
                        <button key={item}
                          className={styles.list__item}
                          onClick={() => { setSelected(item); setIsOpen(false) }}
                        >{item}</button>
                      })}
                    </motion.div>
                  )}

                </AnimatePresence> */}
                </div>
              </div>
              <div className="select">
                <span>
                  Размер, см
                </span>
                <div className="check__list">
                  {sizes.map(e => {
                    const id = useId()
                    return (
                      <div className="checkbox-wrap" key={useId()}>
                        <input type="checkbox" id={id} />
                        <label htmlFor={id} onClick={() => SelectSize(e)}>{e}</label>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="select">
                <div className="select__top">
                  <span>Покрытие</span>
                  {/* <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M8.57542 3.76302C8.53281 3.72006 8.48212 3.68596 8.42627 3.66269C8.37041 3.63942 8.31051 3.62744 8.25 3.62744C8.1895 3.62744 8.12959 3.63942 8.07374 3.66269C8.01789 3.68596 7.96719 3.72006 7.92459 3.76302L5.82542 5.86218C5.78281 5.90514 5.73212 5.93924 5.67627 5.96251C5.62041 5.98578 5.56051 5.99776 5.5 5.99776C5.4395 5.99776 5.37959 5.98578 5.32374 5.96251C5.26789 5.93924 5.21719 5.90514 5.17459 5.86218L3.07542 3.76302C3.03281 3.72006 2.98212 3.68596 2.92627 3.66269C2.87041 3.63942 2.81051 3.62744 2.75 3.62744C2.6895 3.62744 2.62959 3.63942 2.57374 3.66269C2.51789 3.68596 2.46719 3.72006 2.42459 3.76302C2.33922 3.84889 2.29131 3.96506 2.29131 4.08614C2.29131 4.20723 2.33922 4.32339 2.42459 4.40927L4.52834 6.51302C4.78615 6.77051 5.13563 6.91514 5.5 6.91514C5.86438 6.91514 6.21386 6.77051 6.47167 6.51302L8.57542 4.40927C8.66078 4.32339 8.7087 4.20723 8.7087 4.08614C8.7087 3.96506 8.66078 3.84889 8.57542 3.76302Z" fill="black" />
                </svg> */}
                </div>
                <div className="check__list">
                  {covering.map(e => {
                    const id = useId()
                    return (
                      <div className="checkbox-wrap" key={useId()}>
                        <input type="checkbox" id={id} />
                        <label htmlFor={id} onClick={() => { SelectCovering(e) }}>{e}</label>
                      </div>
                    )
                  })}
                </div>

              </div>
            </div>
            <div className="grid-wrap">
              <div className="grid" id='catalog'>
                {relatedProducts.length > 0 ?
                  <AnimatePresence>
                    {(relatedProducts.slice(0, offset)).map((e, index) => {
                      let str = (e.article.toLowerCase()).replace(/\s+/g, '-');
                      return (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ duration: 0.1 }}
                          className="grid__item"
                          key={index}
                        >
                          <Link href={`/product/${str}`}>
                            <img src={e.imageSrc} alt="" />
                          </Link>
                          <Link href={`/product/${str}`} className="description">
                            {e.category} {e.article} {e.collection} {e.params['Размер']}
                          </Link>
                          <button className="buy red-btn" onClick={() => setSelected(e)}>Заказать</button>
                        </motion.div>
                      )
                    })}
                  </AnimatePresence>
                  : <span className='not-found'>Товаров не найдено</span>
                }
              </div>

              <div className="grid-pagination">
                {Array.from({ length: Math.round(relatedProducts.length / 32) }).map((_, index) => {
                  return (
                    <button
                      className={`pagination-btn ${offset / 32 == (index + 1) ? "active-btn" : ""}`}
                      key={`pagination-btn-${index}`}
                      onClick={() => setOffset(32 * (index + 1))}
                    >{index + 1}</button>
                  )
                }
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected &&
        <div className="popup">
          <div className="popup__wrap" onClick={() => { setSelected(null); setPopup(false) }}></div>
          {popup ?
            <div className="popup__content">
              <span className="popup__heading">Заказать звонок</span>
              <div className="popup__tel">
                <div className="required">
                  <input type="text" value={name} placeholder='ФИО' name='fio' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="required">
                  <input type="text" value={phone} placeholder='Телефон' name='phone' onChange={(e) => setPhone(e.target.value)} />
                </div>
                <input type="text" value={mail} placeholder='Почта' name='email' onChange={(e) => setMail(e.target.value)} />
                <textarea type="text" value={message} placeholder='Сообщение' name='message' onChange={(e) => setMessage(e.target.value)} />
                {error &&
                  <span className='error-text'>{error}</span>
                }
                <button className='red-btn' onClick={Send}>Отправить</button>
              </div>
            </div>
            :
            <div className="popup__content">
              <span className="popup__heading">Эксрпесс заказ</span>
              <div className="popup__product">
                <img src={selected.imageSrc} alt="" />
                <div className="popup__product-info">
                  <span>{selected.category} {selected.article} {selected.collection} {selected.params['Размер']} {selected.params['Покрытие']}</span>
                  <p>Кол-во в уп., м2/шт {selected.params['Кол-во в уп., м2/шт']}</p>
                  <p>Кол-во на поддоне, м2 {selected.params['Кол-во на поддоне, м2']}</p>
                </div>
              </div>
              <div className="popup__buttons">
                <button className='red-btn' onClick={() => setPopup(true)}>Отправить на почту</button>
                <a href={`https://wa.me/79676652524?text=Хочу%20заказать%20${selected.category}%20${selected.article}%20${selected.collection}%20${selected.params['Размер']}%20${selected.params['Покрытие']}`} className='red-btn red-link'>Написать в ватсап</a>
              </div>
              <p className="popup__contacts-heading">Контакты представителей компании</p>
              <div className="popup__contacts">
                <div className="popup__contacts-item">
                  <span>Кантлоков Азамат Султанович <span className="status">Менеджер по продажам</span></span>
                  <a href='tel:89897802681'>8 (989) 780-26-81</a>
                  <a href='tel:89618592842'>8 (961) 859-28-42</a>
                </div>
                <div className="popup__contacts-item">
                  <span>Колодезная Юлия Александровна <span className="status">Менеджер по продажам</span></span>
                  <a href='tel:89284230910'>8 (928) 423-09-10</a>
                </div>
                <div className="popup__contacts-item">
                  <span>Рябоконь Юрий Николаевич <span className="status">Директор</span></span>
                  <a href='tel:89182281932'>8 (918) 228-19-32</a>
                  <a href='tel:89094460845'>8 (909) 446-08-45</a>
                </div>
                <div className="popup__contacts-item">
                  <span>Романенко Даниил Иванович <span className="status">Коммерческий директор</span></span>
                  <a href='tel:89676652524'>8 (967) 665-25-24</a>
                </div>
              </div>
            </div>
          }
        </div>
      }
    </>
  )
}
