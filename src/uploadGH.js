/*jshint esversion: 6 */
var api = require('sketch');
var UI = require('sketch/ui');


export default function(context) {
  const originalElement = context.this;
  const selectedLayers = context.selection;
  const selectedCount = selectedLayers.length;

  UI.message("It's alive 🙌");
  UI.alert('my title', 'Hello World!');
  context.document.showMessage(`${originalElement} is the original element.`);

  // if (selectedCount === 0) {
  //   context.document.showMessage('No layers are selected.');
  // } else {
  //   context.document.showMessage(`${selectedLayers} layers selected.`);
  // }
}
