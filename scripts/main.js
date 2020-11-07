'use strict';

var vscode = require('vscode');

function activate(context) {
    context.subscriptions.push(
      vscode.commands.registerCommand("jiji.insertController", () => insertString())
    )
}

function deactivate() {
// nothing to dispose
}

/**
 * Structure of controller
 */
function insertString () {
    const string = `{
            path: "/", controller: {
                constructor: (controller, callback, detectChange) => {
                },
                innerHTML: \`\`
            }
        }`;
    const editor = vscode.window.activeTextEditor
    const selections = editor.selections

    editor.edit((editBuilder) => {
        selections.forEach((selection) => {
        editBuilder.replace(selection, '')
        editBuilder.insert(selection.active, string)
        })
    })
}
  
module.exports = {
    activate: activate,
    deactivate: deactivate
}