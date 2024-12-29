import React, { useState } from "react"
import { InputSwitch } from "primereact/inputswitch"
import { Image } from "primereact/image"

class NavbarBrand extends React.Component {
  render() {
    return (
      <div className="navbar-brand">
        <Image src="assets/owl.svg" alt="logo" width="50" />
        <a href="index.html">BLOG CODE</a>
      </div>
    )
  }
}

const DarkThemeSwitch = () => {
  const [darkTheme, setDarkTheme] = useState(false)

  return (
    <div className="navbar-theme">
      <span className="material-symbols-rounded">light_mode</span>
      <InputSwitch
        checked={darkTheme}
        onChange={(e) => setDarkTheme(e.value)}
      />
      <span className="material-symbols-rounded">dark_mode</span>
    </div>
  )
}

class NavbarOptions extends React.Component {
  render() {
    return (
      <div className="navbar-options">
        <Image src="assets/usa.svg" alt="Idioma" width="32" />
        <DarkThemeSwitch />
        <div className="navbar-user">
          <span className="material-symbols-rounded">account_circle</span>
        </div>
      </div>
    )
  }
}

export default class Nav extends React.Component {
  render() {
    return (
      <div className="p-menubar">
        <div className="p-menubar-start">
          <NavbarBrand />
        </div>
        <div className="p-menubar-end">
          <NavbarOptions />
        </div>
      </div>
    )
  }
}
