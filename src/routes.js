import React from "react"
import { Route } from "react-router"

import AppContainer from "./AppContainer"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import PageLoading from "./layouts/PageLoading"
import Homepage from "./layouts/Homepage"
import Tag from "./layouts/Tag"
import Actors from "./layouts/Actors"
import Post from "./layouts/Post"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={ {
      Page,
      PageError,
      PageLoading,
      Homepage,
      Post,
    } }
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="actors" component={ Actors }/>
    <Route path="tag/:tag" component={ Tag }/>
    <Route path="*" component={ PageContainer }/>
  </Route>
)
