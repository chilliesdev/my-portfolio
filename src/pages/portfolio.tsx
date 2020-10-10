import React from 'react'
import useAllProjects, { AllProjectsProps } from '../hooks/useAllProjects'

import IndexLayout from '../layouts'
import Page from '../components/Page'
import Hero from '../components/Hero'
import Container from '../components/Container'
import Section from '../styles/Section'
import ProjectIcon from '../components/ProjectIcon'

const PortfolioPage: React.FC = () => {
  const AllProjects: AllProjectsProps = useAllProjects()

  return (
    <IndexLayout>
      <Page>
        <Container margin="lg">
          <Hero background="home.jpg">Portfolio</Hero>
          <Section>
            {AllProjects.allMarkdownRemark.edges.map(({ node }) => {
              const { id, title, description, image, slug, tech } = node.frontmatter

              return (
                <ProjectIcon
                  key={id}
                  title={title}
                  image={image}
                  details={{
                    description,
                    slug,
                    tech
                  }}
                />
              )
            })}
          </Section>
        </Container>
      </Page>
    </IndexLayout>
  )
}
export default PortfolioPage
