# MoldJS

## JavaScript String object - expanded

Goal of the MoldJS project is to expand JavaScript string functionality by providing powerful shutcut methods. MoldJS expands String prototype keeping string manipulation simple. MoldJS is light-weight and has zero dependencies.

## Documentation

Documentation can be found by clicking [here](https://github.com/juhoen/moldjs/blob/master/DOCUMENTATION.md).

## Some examples

**Simple formatting**

```js
"{greeting} world!".format("Hello"); // => "Hello world"
```

**String manipulation**

```js
"hello world".titleCase(); // => "Hello World"
"Hello World".camelCase(); // => "helloWorld"
"Hello World".capitalize(); // => "Hello World"
```

**Splitting**
```js
"Hello, world!".parts() // => ["Hello,", "world!"]
"Hello, world!".words() // => ["Hello", "world"]
```

**Other**
```js
"Text with email address john.doe@example.com".linkify()
// => 'Text with email address <a href="mailto:john.doe@example.com">john.doe@example.com</a>'

"Text with link https://enala.co".linkify()
// => 'Text with link <a href="https://enala.co">https://enala.co</a>'

'<div class="sample"><p>This is <b>text</b>!</p></div>'.stripTags()
// => "This is text!"
```
