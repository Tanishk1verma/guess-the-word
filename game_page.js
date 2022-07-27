player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0 ;
player2_score = 0 ;

document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML=player1_name;
document.getElementById("player_answer").innerHTML=player2_name;

function send() {
    get_word = document.getElementById("words").value;
    get1_word = get_word.toLowerCase();
    console.log("word in lowercase="+get1_word);

    charAt1 = get1_word.charAt(1);
    console.log(charAt1);

    words_divide = Math.floor(get1_word.length/2);
    charAt2 = get1_word.charAt(words_divide);
    console.log(charAt2);

    length_minus_1 = get1_word.length-1;
    charAt3 = get1_word.charAt(length_minus_1);
    console.log(charAt3);

    remove_1 = get1_word.replace(charAt1,"_");
    remove_2 = remove_1.replace(charAt2,"_");
    remove_3 = remove_2.replace(charAt3,"_");
    console.log(remove_3);

    question_word = "<h4 id='word_display'>Q."+remove_3 + "</h4>";
    input_box = "<br> A.<input type='text' id='a_input_box'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'> Check</button>";
    row = question_word+input_box+check_btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("words").value ="";
}

question_turn = "player1";
answer_turn = "player2";

function check (){
    get_answer = document.getElementById("a_input_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer"+answer);
    if (answer==get1_word)
    {
      if (answer_turn=="player1")
      {
        player1_score = player1_score + 1;
        document.getElementById("player1_score").innerHTML=player1_score;
      }
      else{
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML=player2_score;
      }

      if (question_turn=="player1")
      {
        question_turn=="player2"
        document.getElementById("player_question").innerHTML="Question Turn - " + player2_name;
      }
      else{
        question_turn=="player1"
        document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
      }
      if (answer_turn=="player1")
      {
        answer_turn=="player2"
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;
      }
      else{
        answer_turn=="player1"
        document.getElementById("player_answer").innerHTML="Answer Turn - " + player1_name;
      }

      document.getElementById("output").innerHTML="";s
    }
}
