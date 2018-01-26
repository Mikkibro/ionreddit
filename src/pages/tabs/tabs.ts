import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { RedditPage } from '../reddits/reddit';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RedditPage;
  tab2Root = AboutPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
