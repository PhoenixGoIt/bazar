'use client'
import { Inter } from "next/font/google";
import "./globals.scss";
import "./scss/index.scss"
import Link from "next/link";
import {  useState } from "react";
import { Provider } from "react-redux";
import store from './redux/store'
const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode
}

export default function RootLayout({children}: Props) {

  const [input, setInput] = useState<string>('')
  const [isVisible, seiIsVisible] = useState<boolean>(false)
  function handleInputChange(e: string) : void {
    setInput(e)
  }
  function handleClick() {
    seiIsVisible(!isVisible)
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="layout">
        <div className="t">
          {/* <div className="layer1_container">
            <div className="location_wrapper">
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 10.8182C9.88071 10.8182 11 9.71925 11 8.36364C11 7.00803 9.88071 5.90909 8.5 5.90909C7.11929 5.90909 6 7.00803 6 8.36364C6 9.71925 7.11929 10.8182 8.5 10.8182Z" stroke="#666666" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            <a href="https://maps.app.goo.gl/ixt7Z2DMWu9V8Pc76" rel="noopener noreferrer" target="blank">Store Location: Lincoln- 344, Illinois, Chicago, USA</a>
            </div>
          </div> */}
          <div className="layer2_container container">

              <Link className="logo_Link" href={'/'}><h1 className="logo">Bazar</h1></Link>

              <form className="input_form">
                  <input className="input_search" value={input} onChange={(e) => handleInputChange(e.currentTarget.value)}/>
                  <button className="search_button" type="button">Search</button>
              </form>
              <ul className="layer2_list">
              <svg className="card_svg" width="45" height="50" viewBox="0 0 40 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3333 17.6667H7.08333L4.25 33.25H29.75L26.9167 17.6667H22.6667M11.3333 17.6667V13.4167C11.3333 10.2871 13.8704 7.75 17 7.75V7.75C20.1296 7.75 22.6667 10.2871 22.6667 13.4167V17.6667M11.3333 17.6667H22.6667M11.3333 17.6667V21.9167M22.6667 17.6667V21.9167" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <li className="card"> 
                  <p className="card_text">shoping card:</p>
                  <div className="card_sum">{`$67`}</div>
                </li>
              </ul> 
          </div>
          <div className="layer3_container">
            <div className="layer3_wrapper container">
            <div className={`menu_container  ${isVisible ? 'active' : ''}`} onClick={() => handleClick()}>
                  <svg className="categories_svg" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 16H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6.66667H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 25.3333H28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <button type="button" className="All_Categories">All Categories</button>
                </div>
              <nav className="layer3_nav">
                <ul className="layer3_list">
                  <li><Link className="layer3_list_item li-text" href={"/"}>Home</Link></li>
                  <li><Link className="layer3_list_item li-text" href={"/shop"}>Shop</Link></li>
                  <li><Link className="layer3_list_item li-text" href={"/about"}>About us</Link></li>
                  <li><Link className="layer3_list_item li-text" href={"/contact"}>Contact us</Link></li>
                </ul>
              </nav>
              <ul className="option_list list">
                <li className="language_container">
                  <select defaultValue={"Eng"} className="language_select select">
                    <option value={"Eng"} className="language_option">Eng</option>
                    <option value={"Rus"} className="language_option">Rus</option>
                  </select>
                </li>
                <li className="currency_container">
                  <select defaultValue={"USD"} className="currency_select select">
                    <option value={"USD"} className="currency_option">USD</option>
                    <option value={"EUR"} className="currency_option">EUR</option>
                    <option value={"CAD"} className="currency_option">CAD</option>
                  </select>
                  <span className="spec"></span>
                </li>
                <div className="sing_in li-text">Sing In</div>
                <div>/</div>
                <div className="sing_up li-text">Sing Up</div>
              </ul>
              </div>
              </div>  
              <div className="container">
              <div className={`categories_container ${isVisible ? '' : 'hidden'}`}>
                <ul className="categories_list">
                  <Link className="categories_item" href={"/categories/laptops-and-computers"}>
                  <div className="categories_item_wrapper">
                    <li>Laptops and Computers</li>
                  </div>
                  </Link>
                  <Link  className="categories_item"href={"/categories/smartphone-tv-and-electronics"}>
                  <div className="categories_item_wrapper">
                    <li>Smartphone, TV and electronics</li>
                  </div>
                  </Link>
                  <Link className="categories_item" href={"/categories/goods-For-gamer"}>
                  <div className="categories_item_wrapper">
                    <li>Goods For Gamer</li>
                  </div>
                  </Link>
                  <Link className="categories_item" href={"/categories/cildren-goods"}>
                  <div className="categories_item_wrapper">
                    <li>Children Goods</li>
                  </div>
                  </Link>
                  <Link className="categories_item" href={"/categories/animal-products"}>
                  <div className="categories_item_wrapper">
                    <li>Animal products</li>
                  </div>
                  </Link>
                  <Link className="categories_item" href={"/categories/school-office-books"}>
                  <div className="categories_item_wrapper">
                    <li>School, Office, books</li>
                  </div>
                  </Link>
                  <Link className="categories_item" href={"/categories/clothes"}>
                  <div className="categories_item_wrapper">
                    <li>Clothes</li>
                  </div>
                  </Link>
                  <Link className="categories_item" href={"/categories/home-goods"}>
                  <div className="categories_item_wrapper">
                    <li>Home Goods</li>
                  </div>
                  </Link>
                  <Link className="categories_item" href={"/categories/sale-up"}>
                  <div className="categories_item_wrapper">
                    <li>Sale Up</li>
                  </div>
                  </Link>
                  <Link className="categories_item" href={"/categories/view-all-category"}>
                  <div className="categories_item_wrapper">
                    <li>View all Category</li>
                  </div>
                  </Link>
                </ul>
                
              </div>
              </div>
        </div>
          
        </header>
        <Provider store={store}>
        {children}
      </Provider>
      </body>
    </html>
  );
}
