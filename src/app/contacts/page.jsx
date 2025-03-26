import React from 'react'
import Header from '../../components/Header'
import Map from '../../components/Map'

export const metadata = {
  title: 'Контакты представителей компании ООО Капитал-Строй',
  description: 'Контакты представителей компании ООО Капитал-Строй'
}


export default function Contacts() {


  return (
    <>
      <Header />
      <section className="contacts">
        <div className="container">
          <h6>Контакты представителей компании</h6>
          <div className="contacts__inner">
            <div className="contacts__grid">
              <p className="contacts__grid-item">
                <span>Кантлоков Азамат Султанович <span className="status">Менеджер по продажам</span></span>
                <a href='tel:89897802681'>8 (989) 780-26-81</a>
                <a href='tel:89618592842'>8 (961) 859-28-42</a>
              </p>
              <p className="contacts__grid-item">
                <span>Колодезная Юлия Александровна <span className="status">Менеджер по продажам</span></span>
                <a href='tel:89284230910'>8 (928) 423-09-10</a>
              </p>
              <p className="contacts__grid-item">
                <span>Рябоконь Юрий Николаевич <span className="status">Директор</span></span>
                <a href='tel:89182281932'>8 (918) 228-19-32</a>
                <a href='tel:89094460845'>8 (909) 446-08-45</a>
              </p>
              <p className="contacts__grid-item">
                <span>Романенко Даниил Иванович <span className="status">Коммерческий директор</span></span>
                <a href='tel:89676652524'>8 (967) 665-25-24</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Map />
    </>
  )
}
