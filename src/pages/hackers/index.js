import React from 'react'
import Link from 'gatsby-link'
import Article from '../../components/article/article'

import hackersNav from './hackers-nav.yaml'

class IndexRoute extends React.Component {
  render() {
    const { markdownRemark } = this.props.data

    return (
      <Article
        links={hackersNav}
        docOnGithub={`${markdownRemark.frontmatter.path}.md`}
      >
        <h1>{markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Article>
    )
  }
}

export default IndexRoute

export const pageQuery = graphql`
  query hackersIndexQuery {
    markdownRemark(frontmatter: { bookIndexFor: { eq: "hackers" } }) {
      html
      frontmatter {
        path
        title
        bookIndexFor
      }
    }
  }
`
