import './FAQ.css'
import FAQItem from '../components/FAQItem'

const data = {
  title: 'FAQ (Perguntas frequentes)',
  perguntas: [
    {
      title: 'Pergunta 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, quisquam. Autem nisi ipsam assumenda doloremque, pariatur magni, alias est facilis aut dolores repudiandae voluptatum commodi totam. Impedit ad dicta saepe. '
    },
    {
      title: 'Pergunta 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo animi voluptatem dicta sunt dignissimos quae ea voluptas delectus quod. Eum consequatur odit tenetur commodi quasi labore vero voluptatum facere. '
    },
    {
      title: 'Pergunta 3',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ad aliquid iure id nulla at iste architecto corrupti aut, quisquam sequi, dignissimos fugit adipisci expedita esse totam eius quos. Quidem. '
    },
    {
      title: 'Pergunta 4',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum quibusdam est dignissimos, nihil omnis atque neque. Voluptate officiis eveniet provident ex. At eaque illo commodi. Eligendi est in officia? '
    },
    {
      title: 'Pergunta 5',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum ipsa ullam laudantium unde nostrum voluptatibus tenetur magnam eius quasi assumenda quis et atque beatae quos, ratione facere voluptatum delectus. '
    },
  ]
}

export default function FAQ() {
  return (
    <>
      <div className="FAQ">
        <h1>{ data.title }</h1>
        <ul>
          {data.perguntas.map((quest, i) => {
            return (
              <FAQItem key={i} itemTitle={quest.title} itemContent={quest.content} />
            )
          })}
        </ul>
      </div>
    </>
  )
}