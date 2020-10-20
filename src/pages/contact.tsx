import React from 'react'

import IndexLayout from '../layouts'
import Page from '../components/Page'
import Container from '../components/Container'
import Section from '../styles/Section'
import Heading from '../styles/Heading'
import Form from '../styles/Form'
import Input from '../components/Input'
import Button from '../styles/Button'

const ContactPage: React.FC = () => {
  return (
    <IndexLayout>
      <Page>
        <Container margin="lg">
          <Section>
            <Heading>Let's Get In touch</Heading>
            <Form>
              <Input placeholder="enter your name">name</Input>
              <Input placeholder="enter a subject">subject</Input>
              <Input placeholder="enter your email">email address</Input>
              <Input placeholder="how can I help you today" large>
                message
              </Input>
              <Button to="#" color="accent">
                submit
              </Button>
            </Form>
          </Section>
        </Container>
      </Page>
    </IndexLayout>
  )
}
export default ContactPage
