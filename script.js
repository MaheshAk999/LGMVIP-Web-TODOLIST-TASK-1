
$("document").ready(function(){              
                $("#button").click(function(){
                    let a=document.getElementById("but").value
                if(a=='')
                {
                    alert("Please enter something")
                }
                else 
                {
                    var li = document.createElement("li")
                    li.innerHTML=a
                    var hi=document.createElement("span")
                    hi.innerHTML='X'
                    li.appendChild(hi);                   
                    $("<style>").text("span {  font-size:24.5px; color: #e74c3c;  background-color: antiquewhite; border: 1px solid #e74c3c; cursor:pointer; background-color:cement; position: absolute;right: 0;top: 0;  padding: 12px 16px 12px 16px; } ").appendTo("head")
                        $("<style>").text("span:hover {  color: #fff; box-shadow: 0 0 40px 40px #e74c3c inset; } ").appendTo("head")
                    document.getElementById("table").appendChild(li)
                    }
                    $("span").click(function(){
                        $(this).hide()
                        $(this).parent('li').hide()
                    })
                    
                })   
            })