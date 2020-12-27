// Libs
import React from 'react'

// Components
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import FaqBlock from './FaqBlock'

// Styles
import './FaqAccordion.scss'

// Images
import downArrow from '../../assets/icons/down-arrow.svg'

const FaqAccordion = () => {
  return (
    <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className="accordion-btn">
            <span>Общие вопросы</span>
            <img src={downArrow} alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <FaqBlock title="Зачем это все?" isMultiple={true}>
            Вызывающе, дорого, престижно - понятия, которыми руководствуются
            рабы моды. Наша продукция это жест неуважения людям гламурного
            рассудка.
          </FaqBlock>
          <FaqBlock title="Почему так дорого?" isMultiple={true}>
            Мы используем одни из самых дорогих тканей, материалов в наших
            изделиях, когда весь рынок нацелен на дешевое производство.
          </FaqBlock>
          <FaqBlock
            title="Будет ли еще товар помимо футболок, свитшотов и тд?"
            isMultiple={true}
          >
            Все зависит от спроса, производство качественных вещей очень
            дорогое, потому мы тысячу раз подумаем надо ли оно. Пока в планах
            кепки и рюкзак.
          </FaqBlock>
          <FaqBlock
            title="Что в вашем товаре уникального от других?"
            isMultiple={true}
          >
            Смелость, в первую очередь. Нам плевать что написано на футболке,
            главное - удобство. Мы уделяем внимание ко всем мелочам - наши бирки
            тому подтверждение. Также, к товарам B.O.M.J идет живая подпись
            дизайнера, что показывает наше неравнодушие к покупателю.
          </FaqBlock>
          <FaqBlock title="Что по качеству?" isMultiple={true}>
            Мы не делаем то, чего сами бы не носили.
          </FaqBlock>
          <FaqBlock
            title={`Что такое "трек-номер" и где его искать?`}
            isMultiple={true}
          >
            Трек-номер - это номер, с помощью которого вы можете отслеживать
            местоположение вашей посылки, найти его вы всегда можете в личном
            кабинете на сайте, а так же на вашей электронной почте после
            отправки посылки.
          </FaqBlock>
          <FaqBlock title="Сколько доставка идет?" isMultiple={true}>
            По России, СНГ и Европе 2 - 3 недели без учета выходных, праздников
            и форс-мажорных обстоятельств. По Украине 1-3 дня, потому что слава.
          </FaqBlock>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton className="accordion-btn">
            <span>Доставка и оплата</span>
            <img src={downArrow} alt="" />
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <FaqBlock title="Информация" isMultiple={true}>
            Оплатить свой заказ вы можете в разделе «Корзина», выбрав
            соответствующий товар.
          </FaqBlock>

          <FaqBlock>Следуйте по инструкциям.</FaqBlock>
          <FaqBlock>
            Оплата осуществляется банковскими картами Visa или MasterСard. QIWI,
            WebMoney, Яндекс Деньги и многими другими способами.
          </FaqBlock>
          <FaqBlock>
            <i>
              *Платежная система interkassa может требовать дополнительно
              комиссию за перевод.
            </i>
          </FaqBlock>
          <FaqBlock>
            После покупки товара идет проверка и оформление вашего заказа
            администрацией и в течение 48 часов ваш заказ будет обработан. С
            статусом "Заказ принят".
          </FaqBlock>
          <FaqBlock>
            Отправка заказов осуществляется в течение 7 рабочих дней после
            принятия их администратором.
          </FaqBlock>
          <FaqBlock>
            Доставка по Украине осуществляется компанией «Нова Пошта». Посылка
            доставляется в течение 1-3 рабочих дней с даты отправки заказа.
            Посылку следует забрать в течение 5-ти дней с момента доставки. По
            прошествии 5-ти дней компанией Новая Почта взымается доплата за
            хранение отправления.
          </FaqBlock>
          <FaqBlock>
            Доставка по России осуществляется службами доставки: «Почта России».
            «Почта России» осуществляет доставку до почтового отделения, индекс
            которого Вы укажите при оформлении заказа.
          </FaqBlock>
          <FaqBlock>
            <i>
              *Почта России не уведомляет о прибытии посылки, вам нужно ее
              отслеживать самому по трек коду.
            </i>
          </FaqBlock>
          <FaqBlock>
            Доставка за пределы Украины осуществляется компанией «Укрпочта»
            Посылка доставляется в течение 10-20 рабочих дней с даты отгрузки
            заказа.
          </FaqBlock>
          <FaqBlock>
            <i>*Срок отправки посылки будет зависеть от выбранных товаров.</i>
          </FaqBlock>
          <FaqBlock>
            <i>
              *При заказе вещи за границу, так как наше местонахождение в
              Украине, почта считает размеры и вес посылки. Соответственно, чем
              тяжелее посылка - тем дороже доставка. Например, при заказе шапки
              и свитшота, корзина будет суммировать доставку двух вещей, так как
              шапка имеет свой вес, и к ней добавился свитшот, который тяжелее.
            </i>
          </FaqBlock>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default FaqAccordion
