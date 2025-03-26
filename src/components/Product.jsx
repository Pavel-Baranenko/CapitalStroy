'use client'
import Image from 'next/image'
import React, { useId } from 'react'

export default function Product({ info }) {
  const [open, setOpen] = React.useState(false)

  const [popup, setPopup] = React.useState(false);
  const [name, setName] = React.useState();
  const [phone, setPhone] = React.useState();
  const [mail, setMail] = React.useState();
  const [message, setMessage] = React.useState();
  const [error, setError] = React.useState();

  const Send = async () => {
    setError('')
    if (name, phone) {
      setPopup(false)
      setOpen(false)
    } else setError('Запоните все необходимые поля')
  }


  return (
    <>
      <div className="container">
        <div className="product__page">
          <div className="product__top">
            <div className="product__img-wrap">
              <Image
                src={`/${info.imageSrc}`}
                width={500}
                height={500}
                sizes="(max-width: 1080px) calc(100svw - 20px), calc(100svw - 20px)"
                style={{ objectFit: "cover", aspectRatio: 1 }}
                alt="Picture of the author"
                className='product__img'
              />
            </div>

            <div className="product__heading">
              <h1>{info.category} {info.collection} {info.article}</h1>
              <div className="product__buy">
                <button className="red-btn" onClick={() => setOpen(true)}>Заказать</button>
              </div>
              <div className="product__params">
                <h6>Характеристики</h6>
                <div className="product__params-list">
                  {Object.keys(info.params).map(e => {
                    return (
                      <div className="product__params-item" key={useId()}>
                        <span>{e}</span>
                        <p>{info.params[e]}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open &&
        <div className="popup">
          <div className="popup__wrap" onClick={() => { setOpen(null); setPopup(false) }}></div>
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
                <img src={`/${info.imageSrc}`} alt="" />
                <div className="popup__product-info">
                  <span>{info.category} {info.article} {info.collection} {info.params['Размер']} {info.params['Покрытие']}</span>
                  <p>Кол-во в уп., м2/шт {info.params['Кол-во в уп., м2/шт']}</p>
                  <p>Кол-во на поддоне, м2 {info.params['Кол-во на поддоне, м2']}</p>
                </div>
              </div>
              <div className="popup__buttons">
                <button className='red-btn' onClick={() => setPopup(true)}>Отправить на почту</button>
                <a href={`https://wa.me/79676652524?text=Хочу%20заказать%20${info.category}%20${info.article}%20${info.collection}%20${info.params['Размер']}%20${info.params['Покрытие']}`} className='red-btn red-link'>Написать в ватсап</a>
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
