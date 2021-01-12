
const TaskManager = require('../js/taskManager');
const assert = require('assert');

describe("TaskManager", () => {
  it("should add a task", function () {
    //Setup
    const taskManager = new TaskManager(0);
    let len = taskManager.tasks.length;
    //Exercise
    taskManager.addTask();
    //Verify
    assert.ok(len < taskManager.tasks.length);
  });
})







