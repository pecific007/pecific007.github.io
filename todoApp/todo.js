document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('#list');
    const template = document.querySelector('#template');
    const addForm = document.querySelector('#taskForm');
    const addButton = document.querySelector('#addnew');
    const noTask = document.querySelector('#noTasks');

    let noTaskContent = noTask.innerHTML;
    let tasks = [];
    let done_tasks = ["false"]

    function showForm() {
        addForm.dataset.display = "block"
        addForm.querySelector('#taskText').focus();
        addForm.addEventListener('keyup', (event) => {
            if (event.key == "Escape") {addForm.dataset.display = "none"}
        })
    }

    addButton.addEventListener('click', () => {
        showForm();
    });
    addForm.querySelector('#close_dialog').addEventListener('click', () => {
        addForm.dataset.display = "none";
    });

    list.addEventListener('click', showForm);

    addForm.querySelector('#addTask').addEventListener('click', () => {
        if (noTask.style.display !== "none") {
            noTask.style.display = "none";
        }
        getTask();
        addForm.dataset.display = "none";
        addToList();
        len = tasks.length;
        done_tasks.push("false");
        addForm.querySelector('#taskText').value = "";
    });


    function getTask() {
        let task = addForm.querySelector('#taskText').value;
        if (task != "") {
            tasks.push(task);
        }
        else {
            list.innerHTML = "";
        }
        list.removeEventListener('click', showForm);
    }

    function addToList() {
        if(list.innerHTML == ""){
            let el = document.createElement('p');
            el.innerHTML = noTaskContent;
            list.appendChild(el)
            return;
        }

        list.innerHTML = "";
        for (let i = 0; i < tasks.length; i++) {
            list.innerHTML += template.innerHTML;
        }

        let i = 0;
        list.querySelectorAll('.listTask').forEach(task => {
            task.querySelector('.text').innerHTML = tasks[i];
            task.querySelector('.text').dataset.linethrough= done_tasks[i];
            i++;
        })
    }

    document.addEventListener('click', (event) => {
        let done = event.target;
        let par = done.parentElement;
        if (done.className === "done") {
            par.style.animationFillMode = "backwards";
            par.style.animationDirection = (done.previousElementSibling.dataset.linethrough == "true") ? "reverse" : "normal";

            if(done.previousElementSibling.dataset.linethrough == "false") {
                par.style.animationName = "";
                void par.offsetWidth;
                par.style.animationName = "done";
                par.style.animationPlayState = "running";
                done.previousElementSibling.dataset.linethrough = "true";
            }
            else if (done.previousElementSibling.dataset.linethrough == "true") {
                par.style.animationName = "";
                void par.offsetWidth;
                par.style.animationName = "done";
                par.style.animationPlayState = "reverse";
                par.style.animationPlayState = "running";
                done.previousElementSibling.dataset.linethrough = "false";
            }

            let i = 0;
            list.querySelectorAll('li').forEach((li) => {
                if (li.querySelector('.text').dataset.linethrough == "true") {
                    done_tasks[i] = "true";
                } else if (li.querySelector('.text').dataset.linethrough == "false") {
                    done_tasks[i] = "false";
                }
                i++;
            })
            par.style.animationDirection = "normal";
        }
        else if (done.className === "remove") {
            par.style.animationDirection = "normal";

            let index = 0;
            for (index ; index < tasks.length; index++) {
                if (tasks[index] == par.querySelector('.text').innerHTML) {
                    break;
                }
            }
            tasks.splice(index, 1);
            done_tasks.splice(index, 1);

            par.style.animationName = "delete";
            par.style.animationPlayState = "running";
            par.style.animationFillMode = "forwards";
            par.addEventListener('animationend', () => {
                addToList();
                if (list.childNodes.length == 0) {
                    let el = document.createElement('p');
                    el.innerHTML = noTaskContent;
                    list.appendChild(el)
                }
            })
            par.style.animationDirection = "normal";
        }
    });

});
