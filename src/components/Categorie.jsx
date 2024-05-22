import React from 'react'

const Categorie = () => {
    const hovColBtnLink = "text-white hover:text-amber-600 cursor-pointer"
  return (
    <div class="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 class="title-font font-medium text-green-500 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
            <li>
                <a class={hovColBtnLink}>First Link</a>
            </li>
            <li>
                <a class={hovColBtnLink}>Second Link</a>
            </li>
            <li>
                <a class={hovColBtnLink}>Third Link</a>
            </li>
            <li>
                <a class={hovColBtnLink}>Fourth Link</a>
            </li>
        </nav>
    </div>
  )
}

export default Categorie
