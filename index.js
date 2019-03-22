
          //global vars
            var blockview = document.getElementById("sec2");
            blockview.style.display = "none";
            var newPost;
            var inputText,inputText2,inputText3;
            var i=0; //count

            //func capt -> addData
            function capturar(){
                blockview.style.display = "block";
                function Post(user, desc, imagen){
                this.user = user;
                this.desc = desc;
                this.imagen = imagen;
                }
                 inputText = document.getElementById("inputText").value;
                 inputText2 = document.getElementById("inputText2").value;
                 inputText3 = document.getElementById("inputText3").value;

                newPost = new Post(inputText,inputText2,inputText3);
                i++;
                getfecha();
                addData();
               
            }
            //necesitas un i para los comments para identificarlos. wait asi no fak rip
          
           
            var arrayPost=[];
            //func agregar post al html
            function addData(){
                arrayPost.push(newPost);
                console.log(arrayPost);
                document.getElementById("sec2").innerHTML += '<div class="postcard"><p>Nombre:'+newPost.user+'</p>'+
                '<p>Descripcion:'+newPost.desc+'</p><br>'+
               'Imagen:<img src="'+newPost.imagen+'" id="imgs" style="max-height:150px"/><br>'+
                'Fecha: <p></p> <br>'+'<button type="button" id="'+i+'" onClick="showComment()">Comentarios</button></div>';
            }
           
                var getfecha=function(){
                    var d = new Date();
                   console.log(d);
                   return d;
                }
               
                
/* estoy manco para esto */

            
