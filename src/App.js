import React, { Component } from 'react';

import './App.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotatedBurgerMenu: 'burger-menu-init',
      shownNavSections: 'nav-sections',
      mobileNavbackground: 'mobile-nav-background',
      width: window.innerWidth,
      mobileNavButton: 'mobile-nav-button-init' };

    this.rotateBurgerMenu = this.rotateBurgerMenu.bind(this);
    this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.mobileNavTrigger = this.mobileNavTrigger.bind(this);
    this.logWindow = this.logWindow.bind(this);
  }

  logWindow() {
    console.log(window);
  }

  componentDidMount() {  
    window.addEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      rotatedBurgerMenu: 'burger-menu-init',
      shownNavSections: 'nav-sections',
      mobileNavbackground: 'mobile-nav-background',
      width: window.innerWidth,
      mobileNavButton: 'mobile-nav-button' });

  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  rotateBurgerMenu() {
    if (this.state.rotatedBurgerMenu === 'burger-menu-init' || this.state.rotatedBurgerMenu === 'burger-menu')
    this.setState({
      rotatedBurgerMenu: 'rotated-burger-menu',
      shownNavSections: 'nav-sections shown-nav-sections' });

  }

  closeBurgerMenu() {
    this.setState({
      rotatedBurgerMenu: 'burger-menu',
      shownNavSections: 'nav-sections hidden-nav-sections' });

  }

  mobileNavTrigger() {
    if (this.state.mobileNavButton === 'mobile-nav-button-init' || this.state.mobileNavButton === 'mobile-nav-button')
    this.setState({
      mobileNavbackground: 'mobile-nav-background shown-mobile-nav-background',
      mobileNavButton: 'closing-mobile-nav',
      shownNavSections: 'nav-sections shown-nav-sections' });else


    this.setState({
      mobileNavbackground: 'mobile-nav-background hidden-mobile-nav-background',
      mobileNavButton: 'mobile-nav-button',
      shownNavSections: 'nav-sections hidden-nav-sections' });

  }

  render() {
    return (
      <>
        <section className="navigation-bar">
          <nav>
            <div className={this.state.mobileNavbackground}></div>

            <div className={this.state.shownNavSections}>
              <ul>
                <li> <a href="#">About Me</a></li>
                <li> <a href="#">My Work</a></li>
                <li> <a href="#">Contact Me</a></li>
                <li> <a href="#">Blog</a></li>
                <li> <a href="#">Contributions</a></li>
                <li>
                  <div className="close-btn" onClick={this.closeBurgerMenu}>
                    <div className="close-btn-slice"></div>
                    <div className="close-btn-slice"></div>
                  </div>
                </li>
              </ul>
            </div>

            <div className={this.state.rotatedBurgerMenu} onClick={this.rotateBurgerMenu} >
              <div className="burger-menu-slice"></div>
              <div className="burger-menu-slice"></div>
              <div className="burger-menu-slice"></div>
              <div className="burger-menu-slice"></div>
            </div>

            <div className={this.state.mobileNavButton} onClick={this.mobileNavTrigger}>
              <div className="mobile-nav-button-slice"></div>
              <div className="mobile-nav-button-slice"></div>
              <div className="mobile-nav-button-slice"></div>
            </div>
          </nav>
        </section>
      </>
    )
  }
};

function App() {
  return (
    <>
      <Navigation/>
    </>
  );
}

export default App;
