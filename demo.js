function Search() {
  let input = document.getElementById("input").value;
  let text = document.getElementById("text").innerText;
  let atext = text.split(" ");

  for (let i = 0; i <= input.length; i++) {
    for (let y = 0; y <= atext.length - 1; y++) {
      if (atext[y]== input) {
        document.getElementById("text").innerHTML = document
          .getElementById("text")
          .innerHTML.replaceAll(
            atext[y],
            `<span style="color:red"><b>${atext[y]}</b></span>`
          );
        console.log("exists");
      }
      console.log("doesn't exists");
    }
  }
}
function Reset(){
  let input = document.getElementById("input");
  input.value=" ";
}
///////problems:
//changes all to lower case by default
//every input similar to a word in the text should be selected
//in the input+1 search the content selected in input need to be deleted
