# babel-plugin-remove-data-test-id-attribute

Removes `data-test-id` attribute from jsx html elements.

The `data-test-id` is normally added for testing as a helper attribute to quickly grab an element by id and simualte events or do other stuff. The `data-test-id` not required in the production builds and should be removed in production builds.

Usage -

```
$ npm i -D babel-plugin-remove-data-test-id-attribute
```

In your .babelrc file, or whereever you setup babel preferences, add the plugin to the plugins array, inside the production environment -

```
{
    "env": {
    "production": {
      "plugins": ["babel-plugin-remove-data-test-id-attribute" ]
    }
  }
}
```

E.g. - If your jsx code looks like this

```
<div data-id="pqr" data-test-id='abc'>
    abc
	<p>para</p>
    <Custom data-test-id='blah' />
</div>
```

When the code is passed through this plugin, it will change to -

```
<div data-id="pqr">
    abc
	<p>para</p>
    <Custom />
</div>
```
