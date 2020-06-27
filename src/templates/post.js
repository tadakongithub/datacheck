import React from "react"
import { graphql } from "gatsby"

 export default function Post  ({data})  {
    const {markdownRemark} = data
    const { frontmatter, html } = markdownRemark
    return (
        <div>
            <h1>{frontmatter.title}</h1>
            <time>{frontmatter.date}</time>
            <div dangerouslySetInnerHTML={{ __html: html}} />
        </div>
    )
}


export const myQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: {slug : {eq : $slug}}) {
            html
            frontmatter {
                date
                slug
                title
                category
            }
        }
    }
`