import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import SectionPage from './SectionPage'
import ArticlePage from './ArticlePage'
import AuthorPage from './AuthorPage'

import JoinPage from './JoinPage'
import SubscriptionsPage from './SubscriptionsPage'
import WebPolicyPage from './WebPolicyPage'
import CommentsPolicyPage from './CommentsPolicyPage'
import FindPaperPage from './FindPaperPage'
import StaffListPage from './StaffListPage'
import ArchivesPage from './ArchivesPage'

import PreviewPage from './PreviewPage'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const PageContent = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/sections/:section' component={SectionPage}/>
      <Route exact path='/:year/:month/:day/:slug' component={ArticlePage} />
      <Route exact path='/author/:authName' component={AuthorPage} />

      <Route path='/archives' component={ArchivesPage} />
      <Route path='/join' component={JoinPage}/>
      <Route path='/print-subscriptions' component={SubscriptionsPage} />
      <Route path='/web-policy' component={WebPolicyPage} />
      <Route path='/comments-policy' component={CommentsPolicyPage} />
      <Route path='/find-paper' component={FindPaperPage} />
      <Route path='/staff-list' component={StaffListPage} />

      <Route path='/staff-list/:year/:semester' component={StaffListPage} />
      //<Route path='/cms/pages/:id/edit/preview/' component={PreviewPage} />
    </Switch>
  </main>
)

export default PageContent;


//need to add in functionality to get more articles (pagination on section pages)


//     path('staff-list/<int:year>/<str:semester>', views.staff_list, name='staff-list'),
//     path('staff-list', views.current_staff_list, name='current-staff-list'),
