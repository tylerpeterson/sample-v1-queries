var nicks = require('./ad-hoc-nicknames').teamIndexingWD;
var tasksQuery = require('./tasks-for-owner');
var query = [];
var fs = require('fs');

nicks.forEach(function (nick) {
  var copy = JSON.parse(JSON.stringify(tasksQuery));

  copy.with["$memberNick"] = nick;
  query.push(copy);
});

fs.writeFileSync('./generated/tasks-for-owners-of-ad-hoc-group.json', JSON.stringify(query, 0, 2));
