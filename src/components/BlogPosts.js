import React from 'react'

import './BlogPosts.css'

export default function BlogPosts() {
   return(
      <div className="blog-post">
         <div className="post-image">
            <img src="/posts/post1.jpg" alt="Como deixar a casa nova com sua cara?" />
         </div>
         <div className="post-content">
            <a href="/"><h2>Como deixar a casa nova com sua cara?</h2></a>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            <a href="/" className="post-page">continuar lendo</a>
         </div>
      </div>
   )
}