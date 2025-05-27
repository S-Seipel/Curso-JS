 
function requestHandler(req, res) {
    User.findById(req.userId)
        .then(function(user) {
            return Task.findById(user.taskId);
        })
        .then(function (tasks){
            tasks.completed = true;
            return tasks.save();
        })
        .then(function() {
            res.send('Task Complete');
        })
        .catch(function(errors){
            res.send(errors);
        })
}