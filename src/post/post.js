import React from "react"
import { Image } from "primereact/image"
import { Carousel } from "primereact/carousel"
import { Card } from "primereact/card"

const Images = () => {
  const images = ["code1.png", "code2.png", "code3.png", "code4.png"]

  const imageTemplate = (image) => {
    return (
      <div className="image">
        <Image src={`assets/${image}`} />
      </div>
    )
  }

  return (
    <Carousel
      value={images}
      numVisible={1}
      numScroll={1}
      itemTemplate={imageTemplate}
    />
  )
}

export default class Post extends React.Component {
  render() {
    return (
      <Card className="post" title="CONVERTIR FECHA">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non dui
          tempor, blandit adipiscing arcu, etiam fermentum, at quisque.
          Sollicitudin nulla augue lacus, fusce. Arcu leo mauris amet ac.
          Commodo eget morbi leo, at in.
        </p>
        <Images />
      </Card>
    )
  }
}
