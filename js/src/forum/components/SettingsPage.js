import { extend } from 'flarum/extend';
import SettingsPage from 'flarum/components/SettingsPage';
import Button from 'flarum/components/Button';
import UserLoaderSettingsModal from './UserLoaderSettingsModal';

export default function() {
  extend(SettingsPage.prototype, 'accountItems', function(items) {
    items.add(
      'userLoader',
      Button.component({
        className: 'Button',
        onclick: () => app.modal.show(UserLoaderSettingsModal),
      }, app.translator.trans('siegnal-loader.forum.settings.button'))
    );
  });
}