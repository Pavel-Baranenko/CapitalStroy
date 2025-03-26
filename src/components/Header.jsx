'use client'
import Link from 'next/link';
import React from 'react'

let scrollTop = 0;

export default function Header() {
  const [scroll, setScroll] = React.useState(false);
  const [open, setOpen] = React.useState(false);

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
    } else setError('Запоните все необходимые поля')
  }

  const handleScroll = () => {
    if (scrollTop > window.scrollY) {
      setScroll(true)
    } else {
      setScroll(false)
    }
    scrollTop = window.scrollY
  }


  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <header className={`header ${scroll ? 'fix' : ""}`}>
        <div className="container">
          <div className="header__inner">
            <a href="/" className="header__logo">
              <img src="/img/logo-red.svg" alt="Капитал-Строй логотип компании" />
            </a>
            <nav className="header__navbar">
              <Link href="/about" className="header__link">О нас</Link>
              <Link href="/#catalog" className="header__link">Каталог</Link>
              <Link href="/contacts" className="header__link">Контакты</Link>
            </nav>
            <div className="header__contacts">
              <a href="tel:89182281932" className="header__phone">+7 918 228-19-32</a>
              <button className="red-btn" onClick={() => setPopup(true)}>Заказать звонок</button>
            </div>
            <button className="header-mobile-btn" onClick={() => setOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`header__menu${open ? ' open' : ""}`}>
        <div className="header__menu-top">
          <a href="/" className="header__logo">
            <img src="/img/logo-red.svg" alt="Капитал-Строй логотип компании" />
          </a>
          <button className="header__menu-close" onClick={() => setOpen(false)}></button>
        </div>
        <nav className="header__navbar">
          <Link href="/about" className="header__link">О нас</Link>
          <Link href="/#catalog" className="header__link">Каталог</Link>
          <Link href="/contacts" className="header__link">Контакты</Link>
        </nav>
        <div className="header__contacts">
          <a href="tel:89182281932" className="header__phone">+7 918 228-19-32</a>
          <button className="red-btn" onClick={() => setPopup(true)}>Заказать звонок</button>
        </div>
      </div>
      {popup &&
        <div className="popup">
          <div className="popup__wrap" onClick={() => setPopup(false)}></div>
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
        </div>
      }
    </>
  )
}
