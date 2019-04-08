# MoldJS - JavaScript String expanded

Goal of the MoldJS project is to expand JavaScript string functionality by providing powerful shutcut methods. MoldJS expands String prototype keeping string manipulation simple. MoldJS is light-weight and has zero dependencies.

## Documentation

Documentation can be found by clicking [here](https://github.com/juhoen/moldjs/blob/master/DOCS.md).

## Some examples

**Simple formatting**

```js
"{} world!".format("Hello");                           // => "Hello world"
"rbg({r}, {g}, {b})".format({ r: 10, g: 20, b: 20 });  // => "rbg(10, 20, 30);"
```

**String manipulation**

```js
"hello world".titleCase();  // => "Hello World"
"hello world".camelCase();  // => "helloWorld"
"hello world".capitalize(); // => "Hello world"
```

**Splitting**

```js
"Hello, world!".parts(); // => ["Hello,", "world!"]
"Hello, world!".words(); // => ["Hello", "world"]
```

**Other**

```js
"Text with email address john.doe@example.com".linkify();
// => 'Text with email address <a href="mailto:john.doe@example.com">john.doe@example.com</a>'

"Text with link https://enala.co".linkify();
// => 'Text with link <a href="https://enala.co" target="_blank">https://enala.co</a>'

'<div class="sample"><p>This is <b>text</b>!</p></div>'.stripTags();
// => "This is text!"
```
