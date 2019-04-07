<a name="String"></a>

## String
JavaScript build-in string object

**Kind**: global variable  

* [String](#String)
    * [.strip()](#String+strip) ⇒ <code>string</code>
    * [.parts()](#String+parts) ⇒ <code>Array.&lt;string&gt;</code>
    * [.words()](#String+words) ⇒ <code>Array.&lt;string&gt;</code>
    * [.capitalize(lowerRest)](#String+capitalize) ⇒ <code>string</code>
    * [.decapitalize(lowerRest)](#String+decapitalize) ⇒ <code>string</code>
    * [.camelCase(upperRest)](#String+camelCase) ⇒ <code>string</code>
    * [.snakeCase()](#String+snakeCase) ⇒ <code>string</code>
    * [.kebabCase()](#String+kebabCase) ⇒ <code>string</code>
    * [.titleCase()](#String+titleCase) ⇒ <code>string</code>
    * [.format(arguments)](#String+format) ⇒ <code>string</code>
    * [.linkify([target])](#String+linkify) ⇒ <code>string</code>
    * [.stripTags()](#String+stripTags) ⇒ <code>string</code>

<a name="String+strip"></a>

### string.strip() ⇒ <code>string</code>
Strips all non-word or non-whitespace characters from the string.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - Stripped string  
**Example**  
```js
"Hello, world!".strip();  // "Hello world"
```
<a name="String+parts"></a>

### string.parts() ⇒ <code>Array.&lt;string&gt;</code>
Splits string by the whitespace

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>Array.&lt;string&gt;</code> - Stripped string  
**Example**  
```js
"Hello, world!".parts();  // ["Hello,", "world!"]
```
<a name="String+words"></a>

### string.words() ⇒ <code>Array.&lt;string&gt;</code>
Extracts words from the string

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>Array.&lt;string&gt;</code> - Extracted words  
**Example**  
```js
"Hello, world!".words();  // ["Hello", "world"]
```
<a name="String+capitalize"></a>

### string.capitalize(lowerRest) ⇒ <code>string</code>
Capitalizes first letter of the string

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - Capitalized string  

| Param | Type | Description |
| --- | --- | --- |
| lowerRest | <code>boolean</code> | Lowercase rest of the string if <code>true</code> |

**Example**  
```js
"hello World".capitalize();      // "Hello World"
"hello world".capitalize(true);  // "Hello world"
```
<a name="String+decapitalize"></a>

### string.decapitalize(lowerRest) ⇒ <code>string</code>
Decapitalizes first letter of the string

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - Decapitalized string  

| Param | Type | Description |
| --- | --- | --- |
| lowerRest | <code>boolean</code> | Lowercase rest of the string if <code>true</code> |

**Example**  
```js
"Hello World".capitalize();  // "hello World"
```
<a name="String+camelCase"></a>

### string.camelCase(upperRest) ⇒ <code>string</code>
Converts the string to camelCased.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - camelCased string  

| Param | Type | Description |
| --- | --- | --- |
| upperRest | <code>boolean</code> | Uppercase rest of the string if <code>true</code> |

**Example**  
```js
"Hello World".camelCase();    // "helloWorld"
"Hello, World!".camelCase();  // "helloWorld"
```
<a name="String+snakeCase"></a>

### string.snakeCase() ⇒ <code>string</code>
Converts the string to snake_case.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - snake_cased string  
**Example**  
```js
"Hello World".snakeCase();    // "hello_world"
"Hello, World!".snakeCase();  // "hello_world"
```
<a name="String+kebabCase"></a>

### string.kebabCase() ⇒ <code>string</code>
Converts the string to kebab-case.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - kebab-cased string  
**Example**  
```js
"Hello World".kebabCase();    // "hello-world"
"Hello, World!".kebabCase();  // "hello-world"
```
<a name="String+titleCase"></a>

### string.titleCase() ⇒ <code>string</code>
Converts the string to Title Case.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - kebab-cased string  
**Example**  
```js
"hello world".titleCase();    // "Hello World"
"hello, world!".titleCase();  // "Hello, World!"
```
<a name="String+format"></a>

### string.format(arguments) ⇒ <code>string</code>
String formatting function. Can be used with object or positional arguments.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - kebab-cased string  

| Param | Type | Description |
| --- | --- | --- |
| arguments | <code>object</code> \| <code>string</code> | Positional or unpositional arguments |

**Example**  
```js
// Unpositional named arguments
"rgb({r}, {g}, {b})".format({r: 10, g: 20, b: 30});  // "rbg(10, 20, 30)"

// Positional named arguments
"rgb({r}, {g}, {b})".format(10, 20, 30);             // "rbg(10, 20, 30)"

// Positional arguments
"rgb({}, {}, {})".format(10, 20, 30);                // "rbg(10, 20, 30)"
```
<a name="String+linkify"></a>

### string.linkify([target]) ⇒ <code>string</code>
String linkify function. Replaces text links with HTML links.

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - linkified string  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [target] | <code>string</code> | <code>&quot;\&quot;_blank\&quot;&quot;</code> | Specifies where to open link. Options are "_target", "_self", "_parent", "_top" or name of the frame. |

**Example**  
```js
"My email address is john@doe.com".linkify();
// "My email address is <a ref="mailto:john@doe.com" target="_blank">john@doe.com</a>"

"This is link to google: www.google.com".linkify();
// "This is link to google: <a ref="http://www.google.com" target="_blank">www.google.com</a>"
```
<a name="String+stripTags"></a>

### string.stripTags() ⇒ <code>string</code>
Strips all HTML tags from the string

**Kind**: instance method of [<code>String</code>](#String)  
**Returns**: <code>string</code> - Stripped string  
**Example**  
```js
'<div>This is <b style="color: red;">HTML</b></div>'.stripTags();
// "This is HTML"
```
