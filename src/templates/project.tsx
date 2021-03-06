import React, { useRef, useState } from 'react'
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
import ProjectListItem from '../styles/ProjectListItem'
import ProjectListNumbering from '../styles/ProjectListNumbering'
import ProjectListText from '../styles/ProjectListText'
import { skills } from '../data'
import GalleryWrapper from '../styles/GalleryWrapper'
import GalleryImage from '../styles/GalleryImage'
import useImageResolution from '../hooks/useImageResolution'
import useOnScrollFadeAnimation from '../hooks/useOnScrollFadeAnimation'
import Recommended from '../components/Recommended'

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
        allTech: {
          categoryId: number
          skillId: number
          custom?: string
        }[]
        source: string
        url: string
        features: string[]
        gallery:
          | {
              caption: string
              url: string
            }[]
          | null
      }
    }
  }
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ data }) => {
  const { title, allTech, source, url, features, gallery, image } = data.markdownRemark.frontmatter

  const adjustNumbering = (i: number) => (i < 10 ? `0${i + 1}` : i + 1)

  const getSkillDetails = (skillDetailsData: { categoryId: number; skillId: number; custom?: string | undefined }) => {
    if (skillDetailsData.categoryId !== 0 || skillDetailsData.skillId !== 0) {
      const temp = skills.filter(category => category.id === skillDetailsData.categoryId)
      const result = temp[0].details.filter(skill => skill.id === skillDetailsData.skillId)

      return result.length > 0 ? result[0].title : 'ERR: Tech Not found'
    }

    return skillDetailsData.custom
  }

  const TitleSectionRef = useRef<HTMLDivElement>(null)
  const TechSectionRef = useRef<HTMLDivElement>(null)
  const FeatureSectionRef = useRef<HTMLDivElement>(null)
  const GallerySectionRef = useRef<HTMLDivElement>(null)

  const PageThreahold = 0.6

  useOnScrollFadeAnimation({
    ref: TitleSectionRef,
    threshold: PageThreahold,
    identifier: '.title-section'
  })

  useOnScrollFadeAnimation({
    ref: TechSectionRef,
    threshold: PageThreahold,
    identifier: '.tech-section'
  })

  useOnScrollFadeAnimation({
    ref: FeatureSectionRef,
    threshold: PageThreahold,
    identifier: '.feature-section'
  })

  useOnScrollFadeAnimation({
    ref: GallerySectionRef,
    threshold: PageThreahold,
    identifier: '.gallery-section'
  })

  const [fullGalleryImageView, setFullGalleryImageView] = useState<boolean>(false)

  return (
    <IndexLayout>
      <Page>
        <Container margin="lg">
          <Hero background={image}>{title}</Hero>
          <Section ref={TitleSectionRef}>
            <Heading className="title-section">{title}</Heading>
            <SectionCol className="title-section">
              {source ? (
                <SourceWrapper>
                  <Icon src={useRelativePath('Github.svg')} />
                  <SourceLink href={source} target="_blank" rel="noreferrer">
                    view source code on github
                  </SourceLink>
                </SourceWrapper>
              ) : null}
              {/* eslint-disable-next-line react/no-danger */}
              <ProjectContent dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
              <Button color="accent" to={url} target="_blank" rel="noreferrer">
                Live Preview
              </Button>
            </SectionCol>
          </Section>
          {allTech ? (
            <Section ref={TechSectionRef}>
              <Heading className="tech-section">Technologies</Heading>
              <ProjectList className="tech-section">
                {allTech.map((tech, idx) => {
                  const skillDetails = getSkillDetails(tech)

                  return (
                    <ProjectListItem>
                      <ProjectListNumbering>{adjustNumbering(idx)}</ProjectListNumbering>
                      <ProjectListText large>{skillDetails || 'ERR: Tech not found!'}</ProjectListText>
                    </ProjectListItem>
                  )
                })}
              </ProjectList>
            </Section>
          ) : null}
          {features ? (
            <Section ref={FeatureSectionRef}>
              <Heading className="feature-section">Features</Heading>
              <ProjectList className="feature-section">
                {features.map((feature, idx) => (
                  <ProjectListItem flex>
                    <ProjectListNumbering>{adjustNumbering(idx)}</ProjectListNumbering>
                    <ProjectListText>{feature}</ProjectListText>
                  </ProjectListItem>
                ))}
              </ProjectList>
            </Section>
          ) : null}
          {gallery ? (
            <Section ref={GallerySectionRef}>
              <SectionCol className="gallery-section" size="lg">
                <Heading>Gallery</Heading>
              </SectionCol>
              <GalleryWrapper className="gallery-section">
                {gallery.map(galleryImage => (
                  <GalleryImage
                    source={useRelativePath(galleryImage.url)}
                    resolution={useImageResolution(galleryImage.url)}
                    caption={galleryImage.caption}
                  />
                ))}
              </GalleryWrapper>
            </Section>
          ) : null}
          <Section display="block">
            <Recommended />
          </Section>
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
        allTech {
          categoryId
          skillId
          custom
        }
        source
        url
        features
        gallery {
          caption
          url
        }
      }
    }
  }
`
