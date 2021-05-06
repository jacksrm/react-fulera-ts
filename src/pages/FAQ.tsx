import './FAQ.css'
import FAQItem from '../components/FAQItem'
import { useEffect, useState } from 'react'
import api from '../connections/api'

export default function FAQ() {
  const [faqData, setFaqData] = useState<TFAQ>({ title: '', perguntas: [] })
  useEffect(() => {
    api.get('FAQ').then(({ data }) => setFaqData(data))
  }, [])

  return (
    <>
      <div className="FAQ">
        <h1>{ faqData.title }</h1>
        <ul>
          {faqData.perguntas.map((quest, i) => {
            return (
              <FAQItem key={i} itemTitle={quest.title} itemContent={quest.content} />
            )
          })}
        </ul>
      </div>
    </>
  )
}