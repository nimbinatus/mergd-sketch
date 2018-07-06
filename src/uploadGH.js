/*jshint esversion: 6 */
export default function(context) {
  const originalElement = context.this;
  const selectedLayers = context.selection;
  const selectedCount = selectedLayers.length;

  context.document.showMessage(`${originalElement} is the original element.`);

  if (selectedCount === 0) {
    context.document.showMessage('No layers are selected.');
  } else {
    context.document.showMessage(`${selectedLayers} layers selected.`);
  }
}
