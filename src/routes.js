import React from "react"
import { Route } from "react-router"

import AppContainer from "./AppContainer"
import { PageContainer as PhenomicPageContainer } from "phenomic"

import Page from "./layouts/Page"
import PageError from "./layouts/PageError"
import PageLoading from "./layouts/PageLoading"
import Homepage from "./layouts/Homepage"
import Post from "./layouts/Post"
import Archive from "./layouts/Archive"
import Tag from "./layouts/Tag"

const PageContainer = (props) => (
  <PhenomicPageContainer
    { ...props }
    layouts={ {
      Page,
      PageError,
      PageLoading,
      Homepage,
      Post,
      Archive,
    } }
  />
)

export default (
  <Route component={ AppContainer }>
    <Route path="tag/:tag" component={ Tag } />
    <Route path="*" component={ PageContainer } />
    <Route path="/huong-dan" component={ Tag }/>
  </Route>
)
