import ReactOnRails from 'react-on-rails';

// In this case, our client and server bundle for Post component is the same
import Post from '../bundles/Post';

// This is how react_on_rails can see the Post in the browser.
ReactOnRails.register({
  Post,
});
