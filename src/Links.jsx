import React from 'react'

const Links = ({links}) => {
  return <section className='link-section'>
  {links.map((link,index)=>{
    const {url,text}=link;
    return <article key={index}>
      <a href={url}><p className='text-p'>{text}</p></a>
    </article>
  })}
  
</section>
}

export default Links