var cal = document.getElementById('display');

            function toScreen(item){
              cal.value+=item;
              if(item==='c'){
                cal.value='';
              }
            }

             function answer(){
               item=cal.value;
               item=eval(item);
               cal.value=item;
             }

             function power(){
               item=cal.value;
               item=Math.sqrt(item);
               cal.value=item;
             }

             function backspace(){
               var num = cal.value;
               var length = num.length-1;
               var result = num.substring(0,length);
               cal.value = result;
             }
