import { Inter } from 'next/font/google'

import "../scss/normalize.css";
import "../scss/global.scss";

export const metadata = {
  title: "Капитал-Строй - плитка, керамогранит и строительные материалы в Краснодарском крае",
  description: "Компания «Капитал-Строй» является ведущим поставщиком качественной плитки и керамогранита на рынке Краснодарского края. Наша компания предлагает широкий ассортимент строительных материалов от известных производителей, гарантируя высокое качество продукции и профессиональный подход к каждому заказу.Особое преимущество нашей компании - собственная логистическая служба, оснащенная современным автопарком и специализированным манипулятором для погрузки и разгрузки товара. Это позволяет нам обеспечивать быструю и надежную доставку материалов по всему Краснодарскому краю, минимизируя риски повреждения продукции при транспортировке. Собственный автопарк машин в том числе манипуляторы для быстрой и оперативной доставки вашего заказа.Наша команда профессионалов всегда готова предоставить консультации по подбору материалов, рассчитать необходимые количества и организовать оперативную поставку товара прямо к вашей стройплощадке или на склад.",
  keywords: ['купить', 'плитка', 'керамогранит', '60x60', '60х120', '73,5х73,5', '30х90', '30х60', '59х59', 'KING STAR EU', 'KING STAR LUX', 'PARNIAN NN', 'Borj', 'FIROZE', 'BRIK', 'BASTAN', 'Alpino', 'KIMIA', 'Матовая', 'Глянцевая', 'Полированная', 'Sugar']
}

const inter = Inter({ subsets: ['cyrillic'] })


export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
