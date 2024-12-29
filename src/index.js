import ReactDOM from "react-dom/client"

import "primereact/resources/themes/lara-light-indigo/theme.css" //theme
import "primereact/resources/primereact.min.css" //core css
import "primeicons/primeicons.css" //icons

import "./index.css"
import "./navbar/navbar.css"
import "./post/post.css"
import "./post/post-list/post-list.css"

import Nav from "./navbar/navbar"
import Post from "./post/post"
import PostList from "./post/post-list/post-list"

const nav = ReactDOM.createRoot(document.getElementById("nav"))
nav.render(<Nav />)

const post = ReactDOM.createRoot(document.getElementById("post"))
post.render(<Post />)

const postList = ReactDOM.createRoot(document.getElementById("post-list"))
postList.render(<PostList />)
