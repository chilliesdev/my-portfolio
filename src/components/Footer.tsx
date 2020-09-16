import React from 'react'
import { contacts as contactDetails } from '../data/contacts'

import GithubIcon from '../assets/Github.svg'
import LinkedinIcon from '../assets/Linkedin.svg'

import StyledFooter from '../styles/StyledFooter'
import FooterInner from '../styles/FooterInner'
import FooterHeading from '../styles/FooterHeading'
import FooterIconWrapper from '../styles/FooterIconWrapper'

import FooterIcon from '../styles/FooterIcon'
import FooterContactWrapper from '../styles/FooterContactWrapper'
import FooterContact from '../styles/FooterContact'
import DotIcon from '../styles/DotIcon'

const Footer: React.FC = () => (
  <StyledFooter>
    <FooterInner>
      <FooterHeading>Contacts</FooterHeading>
      <FooterIconWrapper>
        <FooterIcon src={GithubIcon} />
        <FooterIcon src={LinkedinIcon} />
      </FooterIconWrapper>
      <FooterContactWrapper>
        {contactDetails.map((contact, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={idx}>
            <FooterContact>{contact}</FooterContact>
            {idx < contactDetails.length - 1 && <DotIcon />}
          </React.Fragment>
        ))}
      </FooterContactWrapper>
    </FooterInner>
  </StyledFooter>
)

export default Footer
