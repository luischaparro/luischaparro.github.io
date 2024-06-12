import React from 'react'

const Categorie = (props) => {
  const hovColBtnLink = "text-white hover:text-amber-600 cursor-pointer"
  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
      <h2 className="title-font font-medium text-green-500 tracking-widest text-sm mb-3">{props.categorie}</h2>
      <nav className="list-none mb-10">
        <li>
          <a href={props.link} className={hovColBtnLink}>{props.text}</a>
        </li>
      </nav>
    </div>
  )
}

export { Categorie };
