/**
 * Remove `data-test-id` attribute from jsx elements
 * The `data-test-id` is normally added for testing as a helper attribute to
 * quickly grab an element by id and simualte events or do other stuff
 * It's not required in the production builds
 * @param {*} babel
 */
module.exports = function(babel) {
  const { types: t } = babel

  return {
    name: "ast-transform", // not required
    visitor: {
      JSXAttribute(path) {
        var node = path.node
        console.log(node)
        if (node.name.name === "data-test-id") {
          path.remove()
        }
      }
    }
  }
}
