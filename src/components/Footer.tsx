import React from 'react'
import { contacts as contactDetails, profiles } from '../data'

import StyledFooter from '../styles/StyledFooter'
import FooterInner from '../styles/FooterInner'
import FooterHeading from '../styles/FooterHeading'
import FooterIconWrapper from '../styles/FooterIconWrapper'
import FooterContactWrapper from '../styles/FooterContactWrapper'
import FooterContact from '../styles/FooterContact'

import Icon from '../styles/Icon'
import DotIcon from '../styles/DotIcon'
import useRelativePath from '../hooks/useRelativePath'

const Footer: React.FC = () => (
  <StyledFooter>
    <FooterInner>
      <FooterHeading>Contacts</FooterHeading>
      <FooterIconWrapper>
        {profiles.map(({ id, url, icon }) => (
          <a key={id} href={url} target="_blank" rel="noreferrer">
            <Icon src={useRelativePath(icon)} />
          </a>
        ))}
      </FooterIconWrapper>
      <FooterContactWrapper>
        {contactDetails.map((contact, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={idx}>
            <FooterContact>{contact}</FooterContact>
            {idx < contactDetails.length - 1 && <DotIcon contact />}
          </React.Fragment>
        ))}
      </FooterContactWrapper>
    </FooterInner>
  </StyledFooter>
)

export default Footer
