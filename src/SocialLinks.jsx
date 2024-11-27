import React from 'react'
const SocialLinks = ({social}) => {
  return <section className='social-links'>
    {social.map((link)=>{
      const {url,icon}=link;
      return <article>
        <a href={url} style={{color:"#49a6e9"}}>{icon}</a>
      </article>
    })}
  </section>
}

export default SocialLinks