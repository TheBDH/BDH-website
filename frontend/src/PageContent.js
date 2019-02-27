import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TopicPage from './TopicPage'
import PreviewPage from './PreviewPage'
import Tips from './Tips'
import Questions from './Questions'

import { HomePage, SectionPage, ArticlePage, AuthorPage, JoinPage, SubscriptionsPage, WebPolicyPage, CommentsPolicyPage, FindPaperPage, StaffListPage, ArchivesPage, AboutPage, ContactPage, SeriesPage } from "./index"
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const PageContent = () => (
  <main>
    <Switch>
      /* Dynamic pages that fetch from the API*/
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/sections/:section' component={SectionPage}/>

      <Route exact path='/:year/:month/:day/:slug' component={ArticlePage} />
      <Route exact path='/authors/:authName' component={AuthorPage} />
      <Route exact path='/topics/:topicName' component={TopicPage} />

      /* Static pages whose content doesn't change */
      <Route path='/archives' component={ArchivesPage} />


      <Route path='/join' component={JoinPage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/contact' component={ContactPage} />
      <Route path='/series' component={SeriesPage} />


      <Route path='/print-subscriptions' component={SubscriptionsPage} />
      <Route path='/web-policy' component={WebPolicyPage} />
      <Route path='/comments-policy' component={CommentsPolicyPage} />
      <Route path='/find-paper' component={FindPaperPage} />
      <Route path='/staff-list' component={StaffListPage} />

      /* Staff list page and preview page */
      <Route path='/staff-list/:year/:semester' component={StaffListPage} />

      <Route path='/tips' component={Tips}/>
      <Route path='/questions' component={Questions}/>
      //<Route path='/cms/pages/:id/edit/preview/' component={PreviewPage} />

    </Switch>
  </main>
)

export default PageContent;


//need to add in functionality to get more articles (pagination on section pages)


//     path('staff-list/<int:year>/<str:semester>', views.staff_list, name='staff-list'),
//     path('staff-list', views.current_staff_list, name='current-staff-list'),
