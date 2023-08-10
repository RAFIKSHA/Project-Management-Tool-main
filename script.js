document.getElementById('contentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var titleInput = document.getElementById('title');
  var contentInput = document.getElementById('content');

  var title = titleInput.value;
  var content = contentInput.value;

  var contentItem = document.createElement('div');
  contentItem.className = 'content-item';
  contentItem.innerHTML = '<h3>' + title + '</h3><p>' + content + '</p>';

  document.getElementById('contentList').appendChild(contentItem);

  titleInput.value = '';
  contentInput.value = '';
});
