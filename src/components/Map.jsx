'use client'

import React from 'react'

export default function Map() {

  return (
    <section className="map">

      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae6cccd5ab2d99edb7c1014570879cb0741b00665a4c339d3ae177ddbf665c928&amp;source=constructor" width="100%" height="650" frameBorder="0"></iframe>

      <div className="map__info">
        <h6>ООО «Капитал-строй»</h6>
        <span>Адрес:</span>
        <p>Краснодар, 350059, ул.Ялтинская 73,
          микрорайон Хлопчато-бумажный Комбинат, 3 этаж, 10 кабинет</p>
        <span>Телефон</span>
        <p>+7 918 228-19-32</p>
        <span>Почта</span>
        <p>info@capital-stroy.ru</p>
        <span>ИНН</span>
        <p>2312273423</p>
      </div>
    </section>
  )
}
