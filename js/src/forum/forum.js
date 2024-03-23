import { extend } from 'flarum/extend';
import app from 'flarum/app';
import SettingsPage from './components/SettingsPage';

app.initializers.add('siegnal/loader-settings', () => {
  extend(SettingsPage.prototype, 'accountItems', SettingsPage);
});