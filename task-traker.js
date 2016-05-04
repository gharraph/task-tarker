
$(document).ready(function() {
  var taskListDiv = $(".task-list div");
	taskListDiv.html(insertTaskListHTML());

  $("form.task-form").submit(function(event) {
    event.preventDefault();
		var form = $(this);
		var taskName = form.find('input[name="name"]').val();
		var taskDate = form.find('input[name="date"]').val();
		var taskAssigned = form.find('input[name="assigned"]').val();

		initialData.unshift({ name: taskName, date: taskDate, assigned: taskAssigned });

		taskListDiv.html(insertTaskListHTML());
    });
});

initialData = [
	{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
	{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
	{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
	{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
	{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
	{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
	{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
];

function insertTaskListHTML() {
	var taskListHTML = "";
	for(var i = 0; i < initialData.length; i++) {
		taskListHTML += "<div>";
		taskListHTML += "<span>" + initialData[i].name + "</span>";
		taskListHTML += "<span>" + initialData[i].date + "</span>";
		taskListHTML += "<span>" + initialData[i].assigned + "</span></div>";
	}
	return taskListHTML;
}
