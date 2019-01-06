import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SectionPage from './SectionPage'
import ArticlePage from './ArticlePage'
import AuthorPage from './AuthorPage'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const PageContent = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/sections/:section' component={SectionPage}/>
      <Route path='/:year/:month/:day/:slug' component={ArticlePage} />
      <Route path='/author/:authName' component={AuthorPage} />
    </Switch>
  </main>
)

export default PageContent;


//need to add in functionality to get more articles (pagination on section pages)