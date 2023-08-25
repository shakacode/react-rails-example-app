var React = require("react")
var PropTypes = require("prop-types")
class Post extends React.Component {
  render () {
    return (
      <article className="post">
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </article>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};
module.exports = Post
