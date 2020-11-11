# JIJI FRAMEWORK SYNTAX
<img src="https://github.com/jguyet/jiji-framework-syntax-vsce/raw/master/docs/jiji-framework-logo.png" with="70" height="70">

> [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=Jguyet.jiji-framework-syntax)

Adds syntax highlight support for code of jiji framework

## Installation

- Install `jiji-framework-syntax` from extensions (`ctrl + shift + x`)

## Usage

Manage syntax for using Jiji Framework [Jiji-js.io](https://jiji-js.io)

Syntax html inner back quotes previoused by comment `/* html */`
Example :
````js
module.exports = /* html */`
<div></div>
`;
````

Syntax js inner double braket code execution `{{ }}`
````js
module.exports = /* html */`
<div>{{ this.title }}</div>
`;
````

Syntax js double quotes inner properties of tag `click="this.xyz"`
````js
module.exports = /* html */`
<div click="this.title = 'abc'" >{{ this.title }}</div>
`;
````

<img src="https://github.com/jguyet/jiji-framework-syntax-vsce/raw/master/docs/1.png">

## Requirements

- Visual Studio Code v1.19.0 recommended
- Using Jiji-framework [Jiji-js.io](https://jiji-js.io)

## Keybindings
- `ctrl+shift+p` - Search `insert jiji Controller`

## Note
The plugin was inspired by [es6-string-html](https://github.com/0x00000001A/es6-string-html)

## Donation
[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate?hosted_button_id=9N8N5AFMAHKUE)
