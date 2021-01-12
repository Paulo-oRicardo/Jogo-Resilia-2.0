 
 let primeiroBotao = document.getElementById("buttonFirst");
   primeiroBotao = addEventListener("click", function(){
       aparecer('box', 'inline-block')
       remove("buttonFirst");
       first()
   })
      // Criar um function para isso


   //Escolher o poder do mago 

function first(){
   changeText("Em um pelo dia na floresta de Chinatown, dois doendes falavam sobre um grande tesouro no topo da montanha, ambos falavam com as vozes tremulas, pois era impossível chegar ao local. Esse lugar é no monte JAVASCRIPT");
   createButton();
   
   let next = getElement('next');
   next.addEventListener("click",function(){
      power();
   })
}

//Colocar o fontAwesome emoji nos emelemtos 
function power(){
   changeText("Antes de ir em sua jornanda precisa escolher um elementos para poder aplicar as suas magias!");
   createBloc("Fogo", "Água","fas fa-fire","fas fa-tint","red","blue");
  let options = document.getElementsByName("choice");
   let next = getElement('next');
  next.addEventListener ("click" , function(){
   
   for( var i = 0; i < options.length; i++){
      if(options[i].checked){
         choice = options[i].id;
      }
   }
   if(choice == '0'){
        //Criar um icone, para ficar no canto da tela com o poder, ai pega pelo id do icone, Se fire power of fire
   aparecer('fire', 'inline-block')
   second();
   }
   else if(choice == '1'){
   aparecer('water','inline-block')
   second();
   }
  remove("inputs")
console.log(remove("inputs"))

 })
}
 //---------------------------------------
function second(){
   changeText("Em direção a montanha você se depera com um goblin, preste a te atacar, precisa reagir rápido e pensar no que fazer");
   createBloc("Correr", "Atacar","fas fa-running","fas fa-fist-raised");
   let options = document.getElementsByName("choice");
   let next = getElement('next');
   next.addEventListener("click", function(){
    
      for( var i = 0; i < options.length; i++){
         if(options[i].checked){
         
            choice = options[i].id;
         }
      }
      if(choice == '0'){
       death("O globin te acha e esfaqueia");
      }
      if(choice == '1'){
      third();
      }
 
   })
}

//----------------------------------------------------

 function third(){
   trocaimage("url('../images/mapa.jpg')");
    changeText("Você usa sua mágia e derrota o goblin. Ao se aproximar dele, acha um mapa em sua bolsa. O título desse mapa é JAVASCRIPT, nele contém o caminho certo para essa montanha.");
    let next = getElement('next');
   next.onclick = function(){
      fouth();
   }
 }
//------------------------------------------

 function fouth(){
     changeText("Você precisa decifrar o mapa, e para isso será necessário realizar um desafio matemático. \r Você já andou 2600m em 50 min. Em quanto tempo você andaria 6200m? ");
    inputText("Dica: 3 Digitos");
    let form = getElement("formInputText");
    next.addEventListener("click", function(){
      if( form.resultado.value == 119){
         golemUm();
      }
      else{
         //adicionar a opção de voltar

      }
    })
 }
//----------------------------
 function golemUm(){
   trocaimage("url('../images/golem.jpg')");
   changeText("Com o mapa decifrado, você caminha até o Portão da lógica, protegido pelo golem chamado PROGRAMAÇÃO. Para passar por aqui será necessário responder um pergunta de lógica. Não erre, se não seu caminho acaba aqui");
   let next = getElement('next')
   next.addEventListener("click", function(){
      golemDois();
   })
  
}
    //---------------------------------------------

 function golemDois(){
   trocaimage("url('../images/golem.jpg')");
   changeText("No caminho de casa até o mercado, uma senhora conta 10 árvores a sua direita. Após as compras, ela volta para casa e conta 10 árvores a sua esquerda. Quantas árvores ela viu no total nesse dia?  ");
   createBigBloc("10","20","15","5");
   let options = document.getElementsByName("choice");
   let next = getElement('next')
 next.addEventListener("click", function(){
   //Mudar para o radio button mesmo
    for(let i = 0; i<options.length; i++){
      if(options[i].checked){
         choice = options[i].id;
      }
      }
      if(choice == '0'){

         golemThree();
      }
      else{
      death("Você foi esmagado");
      }
      remove('inputs')
   })
 }
 //----------------------------------------

 function golemThree (){
    trocaimage("url('../images/golem.jpg')");
    changeText("Parabéns você passou no teste, é digno de passar pelos portões. Além da honra em passar, lhe darei mais um prêmio");
    let next = getElement('next');
    
    next.addEventListener("click", function(){
       lutaMagoOne();
    })
 }
 //---------------------------------------

 function lutaMagoOne(){
    trocaimage("url('../images/mago.jpg')");
    changeText("Passando o golem, você chega a entrada da montanha. Mas de repente chega outro mago para te desafiar. O tesouro pode ser apenas de um, derrote-o para pegar a sua recompensa");
    createBloc('Desviar','Atacar');
   let options = document.getElementsByName("choice");

    let next = getElement('next');
    next.addEventListener("click", function(){
      for(let i = 0; i<options.length; i++){
         if(options[i].checked){
            choice = options[i].id;
         }
         }
         if(choice == '0'){
           lutaMago1D();
         }
         if(choice == '1'){
            changeText("Você tenta atacar com uma bola de fogo, mas o mago é implacável.");
            lutaMago2D();
         }
         remove('inputs');
         console.log(remove('inputs'));
    })
   }
 
 //-----------------------------------



//--------------------------------------------

 function lutaMago1D(){
   changeText("O mago lança um feitiço de fogo, mas com rapidez, você desvia e o contra ataca");
   trocaimage("url('../images/magoPrepare.jpg')")
  let next = getElement("next");
  next.addEventListener("click",function(){
     lutaMago2D();
   
  })
 }
 //------------------------------------------------

 function lutaMago2D(){
   trocaimage("url('../images/magoPrepare.jpg')")
    changeText("Escolha a opção de contra-ataca");
    createBigBloc("FireBall","Water Jet", "Knife", "Pedra");
    let options = document.getElementsByName("choice");
    let next = getElement('next');
    next.addEventListener("click", function(){
      for(let i = 0; i<options.length; i++){
         if(options[i].checked){
            choice = options[i].id;
         }
         }
         if(choice == '0'){
           lutaMago2DFireball();
         }
         if(choice == '1'){
           lutaMago2DWaterJet();
         }
         if(choice == '2'){
           lutaMago2DKnife();

         }
         if(choice == '3'){
           lutaMago2DPedra()
         }
        remove('inputs')
        console.log(remove('inputs'));
      })

 }
 //----------------------------------------------

function lutaMago2DFireball(){
 
   changeText("Você lança uma bola de fogo e o acerta em cheio");
   next.addEventListener("click", function(){
      win1();
   })
}

function lutaMago2DWaterJet(){
 
   changeText("Você lança uma bola de fogo e o acerta em cheio");
   next.addEventListener("click", function(){
      win1();
   })
}
function lutaMago2DKnife(){
  
   changeText("Você lança uma Faca e o acerta em cheio no olho");
   next.addEventListener("click", function(){
      win1();
   })
}
function lutaMago2DPedra(){
 
   changeText("Você lança uma pedra e o acerta em cheio na garganta");
   next.addEventListener("click", function(){
      win1();
   })
}
function win1(){
   trocaimage("url('../images/toroFogo.gif')")
   changeText("Para o golpe final você libera sua maior fonte de poder com uma chuva de estacas de gelo, seguidos de bolas de fogo ");
   next.addEventListener("click",function(){
      win2();
   })
}
function win2(){
   let dragon = getElement("dragon");
   dragon.style.display="inline-block";
   trocaimage("url('../images/tesouro.jpg')")
    changeText("Parabéns Ó Ser majestoso, deleite-se do seu tesouro agora, riquezas e algo conhecimento");

   }

 //Fazer a derrota 
 //morte do pelo golem
 //vitória 
 //luta contra o outro mago 
 //createIconPower(class)