import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import { NextSeo } from 'next-seo'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <>
    <NextSeo
      title={`${heading} - My Trips`}
      description="A simple project to show in a map the places I want to visit and show more information, such as photos when clicked."
    />
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>{heading}</S.Heading>

      <S.Body>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </S.Body>
    </S.Content>
  </>
)

export default PageTemplate
