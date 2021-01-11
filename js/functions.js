function changeText( text){
   document.getElementById("conteudoBox").textContent = text;
   }
 
    //Cria um elemento
   function create(element){
      let elementName = document.createElement(element);
      return elementName;
   }
   //Seleciona um elemento
   function getElement(element){
      let nameElement = document.getElementById(element);
      return nameElement;
   }
 

 function remove(id){
   let variable = document.getElementById(id);
    variable.remove(id);
 }
 
 function aparecer (id, display){
    let variable = getElement(id);
    variable.style.display = display;
 }

 function createGif (diretorio){
   let gif = create("img");
   gif.setAttribute("id","gif")
   gif.setAttribute("src",diretorio)

   let title = getElement('title');
   show(title,gif)

 }
 function createIconPower(poder,color){
    //gif com o poder
    let power = create("i");
    let description =create("p");
    description.setAttribute("id","description");
    power.setAttribute("class",poder)
    power.setAttribute("id", "poderzin")
    power.style.color = color;
   let container = getElement("container");
   description.textContent = "Powers"

    show(container,power);
    show(power,description)

 }
 function inputText(placeholder){
    let form = create("form");
    let input = create("input");
    form.setAttribute("id","formInputText")
    input.setAttribute("type","text");
    input.setAttribute("id","resultado");
    input.setAttribute("name","resultado");
    input.setAttribute("placeholder", placeholder);


    var div = create("div");
    div.setAttribute("id","inputs");
 
    let box = getElement("box");
    box.append(div);
    show(div,form)
    show(form,input)

 }


 function createBloc(option1,option2,icone1,icone2,color1,color2){
 let icon1 = create("i");
 icon1.setAttribute("class",icone1);
 icon1.style.color = color1
 
 let icon2 = create("i");
 icon2.setAttribute("class",icone2);
icon2.style.color = color2


   //Opção 1
    let radio1 = create("input");
    let label1 = create("label");
   radio1.setAttribute("type","radio");
   radio1.setAttribute("value","option0");
   radio1.setAttribute("id","0");
   radio1.setAttribute("name","choice");
   label1.setAttribute("id","option0");
   label1.setAttribute("for","0")
   label1.textContent = option1;

   //Opção 2
   let radio2 = create("input");
   let label2 = create("label");
   radio2.setAttribute("type","radio");
   radio2.setAttribute("value","option1");
   radio2.setAttribute("id","1");
   radio2.setAttribute("name","choice");
   label2.setAttribute("id","option1");
   label2.setAttribute("for","1")
   label2.textContent = option2;

 

   var div = create("div");
   div.setAttribute("id","inputs");

   let box = getElement("box");
   box.append(div);
   show(div,radio1);
   show(div,label1);
   show(label1,icon1);
   show(div,radio2);
   show(div,label2);
   show(label2,icon2);


   //button
  
 }
function createButton(){
   let divB = create("div");
   divB.setAttribute("id","botao");

   let button= create("button")
   button.setAttribute("id","next");
   button.textContent = "Continuar";
   let box = getElement("box");
   show(box,divB)
   show(divB,button);
}

 function createBigBloc(option1,option2,option3,option4,icone1,icone2,icone3,icone4,color1,color2){
   let icon1 = create("i");
   icon1.setAttribute("class",icone1);
   icon1.style.color = color1
   
   let icon2 = create("i");
   icon2.setAttribute("class",icone2);
  icon2.style.color = color2

  let icon3 = create("i");
  icon3.setAttribute("class",icone3);
 icon3.style.color = color2

 let icon4 = create("i");
 icon4.setAttribute("class",icone4);
icon4.style.color = color2
  
  
     //Opção 1
      let radio1 = create("input");
      let label1 = create("label");
     radio1.setAttribute("type","radio");
     radio1.setAttribute("value",option1);
     radio1.setAttribute("id","0");
     radio1.setAttribute("name","choice");
     label1.setAttribute("id","option0");
     label1.setAttribute("for","0")
     label1.textContent = option1;
  
     //Opção 2
     let radio2 = create("input");
     let label2 = create("label");
     radio2.setAttribute("type","radio");
     radio2.setAttribute("value","option2");
     radio2.setAttribute("id","1");
     radio2.setAttribute("name","choice");
     label2.setAttribute("id","option1");
     label2.setAttribute("for","1")
     label2.textContent = option2;

       //Opção 3
       let radio3 = create("input");
       let label3 = create("label");
      radio3.setAttribute("type","radio");
      radio3.setAttribute("value","option3");
      radio3.setAttribute("id","2");
      radio3.setAttribute("name","choice");
      label3.setAttribute("id","option0");
      label3.setAttribute("for","2")
      label3.textContent = option3;
  
      
        //Opção 4
        let radio4 = create("input");
        let label4 = create("label");
       radio4.setAttribute("type","radio");
       radio4.setAttribute("value",option4);
       radio4.setAttribute("id","3");
       radio4.setAttribute("name","choice");
       label4.setAttribute("id","option3");
       label4.setAttribute("for","3")
       label4.textContent = option4;
    
  
     var div = create("div");
     div.setAttribute("id","inputs");
  
     let box = getElement("box");
     box.append(div);
     show(div,radio1);
     show(div,label1);
     show(label1,icon1);
     show(div,radio2);
     show(div,label2);
     show(label2,icon2);
     show(div,radio3);
     show(div,label3);
     show(label3,icon3);
     show(div,radio4);
     show(div,label4);
     show(label4,icon4);
   
   div.style.width = "15%";
   div.style.margin = "0 auto";
   }

 function trocaimage(endereco){
   let container  = getElement("container")
   container.style.backgroundImage = endereco
 }
function show(element,content){
   element.append(content);
}
 function death(text){
    trocaimage("url('../images/death.jpg')");
    changeText(text);

    let box = getElement("box");
    box.style.backgroundColor= "rgba(0, 0, 0, 0.8)";
 }
 function playAgain(){}
 