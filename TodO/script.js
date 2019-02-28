


    var toDo = function () {
        var item = document.getElementById("input").value;

        var isEmpty =  item === null || item  === undefined || item === " " || item === '';

        if (isEmpty){
            return;
            console.log("frist : " , item);
        }else{
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(item));
            ul.appendChild(li);
            li.classList.add("list-group-item","list-group-item-warning");
            document.getElementById("input").value = " ";
            li.onclick = removeItem;
            console.log("second : " , item);
        }

    };


    var button = document.getElementById('enter');
    button.addEventListener('click', function () {
        toDo();
    });


    document.body.onkeyup = function (event) {
        if (event.keyCode === 13) {
            toDo();
        }else{
            return false
        }
    };

    function removeItem(event) {
        event.target.parentElement.removeChild(event.target);
        console.log(event.target);
    }













