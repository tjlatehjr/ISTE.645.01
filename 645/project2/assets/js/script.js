function submitButton() {
    var suceessDiv = document.getElementById("form-submitted");
    var suceesstext = document.getElementById("success-text");
    var checkMark = document.getElementById("check-mark");

    suceessDiv.style.height = "45px";
    suceessDiv.style.width = "320px";
    suceessDiv.style.padding = "12px";
    suceessDiv.style.color = "#2e6e3d";
    suceessDiv.style.backgroundColor = "#d6eacc";
    suceessDiv.style.border = "1px solid #b2daa1";
    suceessDiv.style.borderRadius = "2px";
    suceessDiv.style.boxSizing = "border-box";
    suceessDiv.style.margin = "20px 0";

    suceesstext.innerHTML = "Contact form submitted sucessfully!!!";

    checkMark.setAttribute("class", "fas fa-check");
    checkMark.style.marginRight = "10px";

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function resetButton() {
    document.location.reload();
}

function quizResult() {
    var count = 0;
    var question1 = document.quiz.num1.value;
    var question2= document.quiz.num2.value;
    var question3 = document.quiz.num3.value;
    var question4 = document.quiz.num4.value;
    var question5 = document.quiz.num5.value;
    var question6 = document.quiz.num6.value;
    var question7 = document.quiz.num7.value;
    var question8 = document.quiz.num8.value;
    var question9 = document.quiz.num9.value;
    var question10 = document.quiz.num10.value;
    var question11 = document.quiz.num11.value;
    var question12 = document.quiz.num12.value;
    var question13 = document.quiz.num13.value;
    var question14 = document.quiz.num14.value;
    var question15 = document.quiz.num15.value;
    var question16 = document.quiz.num16.value;

    if (question1 == "b") {
        count++;
    }

    if (question2 == "c") {
        count++;
    }

    if (question3 == "b") {
        count++;
    }

    if (question4 == "a") {
        count++;
    }

    if (question5 == "a") {
        count++;
    }

    if (question6 == "c") {
        count++;
    }

    if (question7 == "b") {
        count++;
    }

    if (question8 == "c") {
        count++;
    }

    if (question9 == "a") {
        count++;
    }

    if (question10 == "b") {
        count++;
    }

    if (question11 == "a") {
        count++;
    }

    if (question12 == "a") {
        count++;
    }

    if (question13 == "c") {
        count++;
    }

    if (question14 == "d") {
        count++;
    }

    if (question15 == "b") {
        count++;
    }

    if (question16 == "c") {
        count++;
    }

    var horRule = document.createElement("HR");
    var lastChild = document.getElementById("last");

    horRule.style.marginTop = "50px"
    horRule.style.marginBottom = "20px"
    lastChild.appendChild(horRule);

    var results = document.getElementById("result");

    results.style.display = "flex";
    results.style.width = "195px";
    results.style.justifyContent = "flex-end";
    results.style.flexWrap = "wrap";
    results.style.marginLeft = "auto";
    results.style.marginBottom = "30px";

    var label1 = document.querySelector("#result label:first-of-type");
    label1.style.fontWeight = "bold"
    label1.style.margin = "0 10px 7px 0"
    label1.innerHTML = "Correct Answers: ";

    var label2 = document.querySelector("#result label:nth-of-type(2)");
    label2.style.fontWeight = "bold"
    label2.style.margin = "0 10px 7px 0"
    label2.innerHTML = "Score: ";

    var span1 = document.querySelector("#result span:first-of-type");
    span1.innerHTML = count + " / 16";
    
    var span2 = document.querySelector("#result span:nth-of-type(2)");
    span2.innerHTML = ((count / 16) * 100) + " / 100%";

    var score = document.getElementById("score");
    score.style.display = "flex";
    score.style.alignItems = "center";
    score.style.maxWidth = "450px";
    score.style.justifyContent = "space-between";

    var para = document.getElementById("para");
    para.innerHTML = "Result: ";

    var chart = document.getElementById("chart");
    chart.style.display = "flex";
    chart.style.padding = "4px";
    chart.style.boxSizing = "border-box";
    chart.style.height = "23px";
    chart.style.width = "300px";
    chart.style.border = "1px solid #cdd5dc";
    chart.style.borderRadius = "5px";
    chart.style.marginRight = "15px";

    var right = document.getElementById("right");
    right.style.backgroundColor = "blue";
    right.style.borderRadius = "4px";
    right.style.width = (((count / 16) * 100) * 3).toString() + "px";

    var wrong = document.getElementById("wrong");
    wrong.style.backgroundColor = "white";
    wrong.style.flexGrow = "1";

    var percent = document.getElementById("percent");
    percent.innerHTML = ((count / 16) * 100) + "%";

    document.quiz.reset();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}