import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

const SearchInput = () => {
  const [search, setSearch] = useState('')

  return (
    <span className="p-input-icon-right">
      <i className="pi pi-search" />
      <InputText value={search} onChange={(e) => setSearch(e.target.value)} />
    </span>
  )
}

const PostResult = (props) => {
  return (
    <li className="post-result">
      <p className="title">{props.title}</p>
      <p>{props.description}</p>
    </li>
  )
}

export default class PostList extends React.Component {
  render() {
    return (
      <div className="post-list">
        <Button
          icon="pi pi-bars"
          className="p-button-rounded p-button-info"
          aria-label="Search"
        />
        <section>
          <SearchInput />
          <ul className="list">
            <PostResult title="Resultado 1" description="lorem ipsum..." />
            <PostResult title="Resultado 2" description="lorem ipsum..." />
          </ul>
        </section>
      </div>
    )
  }
}
