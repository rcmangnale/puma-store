import React from 'react'
import Item from './utils/Item'
import Title from './utils/Title' 

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  // console.log(endpoint)
  return (
   <>
      <div className='puma-container'>
        <Title title={title} />
        <div className={`grid items-center justify-items-center grid-cols-3 gap-7 lg:gap-5 pt-5  ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}>
          {items?.map((item, i) => (
            <Item {...item} key={i} ifExists={ifExists} />
          ))}
        </div>
      </div>
   </>
  )
}

export default Sales