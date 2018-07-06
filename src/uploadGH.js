/*jshint esversion: 6 */
var sketch = require('sketch');
var UI = require('sketch/ui');


export default function(context) {
  var document = sketch.getSelectedDocument();
  var selected = document.selectedLayers;
  var counted = selected.length;

  // var repoPath = UI.getStringFromUser("What repo is this for?", 'rackerlabs/design-system');
  //
  // UI.message(`${repoPath} was chosen.`);

  if (selected.isEmpty) {
    UI.message('Nothing selected.');
  } else {
    sketch.export(selected.layers, {
      output: '~/Desktop/SketchOutputs',
      formats: 'png, jpg, svg',
      scales: '1, 2, 3',
    });

    UI.message(`Export completed. Selection was ${counted}.`);
  }
}
