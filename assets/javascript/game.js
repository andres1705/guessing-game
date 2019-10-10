    var questions = [ 
        { prompt: "What is the most common way to create a variable in JavaScript?(a) var (b) object
                    (c) loop";

        answer: "a"

    };

    { prompt: " What is the basic data structure in JvaScript? (a) loop (b) object (c) var";

        answer: "b"

    }:

    { prompt: "What can you used to perform the same action mulmtiple times in a row? (a) loop (b) var (c) object";
        answer: "a"
    
    };

    var score = 0;

    for(var i=0; i < questions.length; i++){
        var response = window.prompt(questions[i].prompt)
        if (response == questions[i].answer){
            score++;
            alert("correct");

        } else {alert("wrong")}


    }













    ]