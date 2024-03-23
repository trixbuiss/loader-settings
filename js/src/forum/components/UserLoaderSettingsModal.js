import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button';

export default class UserLoaderSettingsModal extends Modal {
  className() {
    return 'UserLoaderSettingsModal Modal--small';
  }

  title() {
    return app.translator.trans('loader.forum.settings.title');
  }

  content() {
    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <Button
              className="Button Button--primary Button--block"
              onclick={() => alert('Download Loader')}
            >
              {app.translator.trans('siegnal-loader.forum.settings.download_button')}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}