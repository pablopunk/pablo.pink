import React, { FunctionComponent } from 'react'
import { PageProps } from 'types/page'
import { BlokComponent } from 'storyblok/components/BlokComponent'
import useStoryblok from 'storyblok/hooks/useStoryblok'
import { useRouter } from 'next/router'
import Loading from 'components/Loading'

const Page: FunctionComponent<PageProps> = ({ page }) => {
  const story = useStoryblok(page)
  const { isFallback } = useRouter()

  if (isFallback) {
    return (
      <span className="flex items-center justify-center w-full">
        <Loading />
      </span>
    )
  }

  return (
    <>
      {story.content?.body?.map((blok) => (
        <BlokComponent blok={blok} key={blok._uid} />
      ))}
    </>
  )
}

export default Page
