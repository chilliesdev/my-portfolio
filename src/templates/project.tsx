import * as React from 'react'
import { graphql } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'
import Section from '../styles/Section'
import SectionCol from '../styles/SectionCol'
import SourceLink from '../styles/SourceLink'
import SourceWrapper from '../styles/SourceWrapper'
import Icon from '../styles/Icon'
import useRelativePath from '../hooks/useRelativePath'
import Button from '../styles/Button'
import Heading from '../styles/Heading'
import ProjectContent from '../styles/ProjectContent'
import ProjectList from '../styles/ProjectList'
import ProjectFeatureItem from '../styles/ProjectFeatureItem'
import ProjectListNumbering from '../styles/ProjectListNumbering'
import ProjectListText from '../styles/ProjectListText'

interface ProjectTemplateProps {
  data: {
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        id: number
        description: string
        image: string
        slug: string
        title: string
        tech: string
        allTech: number[]
        source: string
        url: string
        features: string[]
      }
    }
  }
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ data }) => {
  const { id, description, image, slug, title, tech, allTech, source, url, features } = data.markdownRemark.frontmatter

  const adjustNumbering = (i: number) => (i < 10 ? `0${i + 1}` : i + 1)

  return (
    <IndexLayout>
      <Page>
        <Container margin="lg">
          <Hero background="home.jpg">{title}</Hero>
          <Section>
            <Heading>{title}</Heading>
            <SectionCol>
              <SourceWrapper>
                <Icon src={useRelativePath('Github.svg')} />
                <SourceLink href={source} target="_blank">
                  view source code on github
                </SourceLink>
              </SourceWrapper>
              {/* eslint-disable-next-line react/no-danger */}
              <ProjectContent dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
              <Button color="accent" to={url} target="_blank">
                Live Preview
              </Button>
            </SectionCol>
          </Section>
          {features ? (
            <Section>
              <Heading>Features</Heading>
              <ProjectList>
                {features.map((feature, idx) => (
                  <ProjectFeatureItem>
                    <ProjectListNumbering>{adjustNumbering(idx)}</ProjectListNumbering>
                    <ProjectListText>{feature}</ProjectListText>
                  </ProjectFeatureItem>
                ))}
              </ProjectList>
            </Section>
          ) : null}
        </Container>
      </Page>
    </IndexLayout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplateQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        id
        description
        image
        slug
        title
        tech
        allTech
        source
        url
        features
      }
    }
  }
`
