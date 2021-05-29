function addNewRow() {


    const entry_bar = document.getElementById("ow");

    const new_div = document.createElement('div');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    const select1 = document.createElement('select');
    const option1 = document.createElement('option');
    const option2 = document.createElement('option');
    const option3 = document.createElement('option');
    const option4 = document.createElement('option');
    const option5 = document.createElement('option');
    const option6 = document.createElement('option');
    const option7 = document.createElement('option');
    const option8 = document.createElement('option');
    const option9 = document.createElement('option');
    const option10 = document.createElement('option');
    const option11 = document.createElement('option');


    input1.type = "text";
    input2.type = "number";
    input1.style = "margin-left: 5%;"
    input2.style = "width:100px; margin-left: 15%;"

    input1.classList.add('text-line1');

    input2.classList.add('text-line2');

    select1.name = 'grade';
    select1.classList.add("text-line3");
    select1.style = "margin-left: 22%;"
    // select1.setAttribute("onchange", "function()");
    option1.innerHTML = '--';
    option2.innerHTML = 'A+';
    option3.innerHTML = 'A';
    option4.innerHTML = 'A-';
    option5.innerHTML = 'B+';
    option6.innerHTML = 'B';
    option7.innerHTML = 'B-';
    option8.innerHTML = 'C+';
    option9.innerHTML = 'C';
    option10.innerHTML = 'D';
    option11.innerHTML = 'F';


    select1.appendChild(option1);
    select1.appendChild(option2);
    select1.appendChild(option3);
    select1.appendChild(option4);
    select1.appendChild(option5);
    select1.appendChild(option6);
    select1.appendChild(option7);
    select1.appendChild(option8);
    select1.appendChild(option9);
    select1.appendChild(option10);
    select1.appendChild(option11);


    new_div.appendChild(input1);
    new_div.appendChild(input2);
    new_div.appendChild(select1);

    entry_bar.appendChild(new_div);

}

function result() {
    const input2 = document.querySelectorAll('.text-line2');
    const result1 = document.querySelector('.text-line-r1');
    const result2 =  document.querySelector('.text-line-r2')
    const input3 = document.querySelectorAll('.text-line3')
    let data1 = [];

    var i, sum = 0;
    for (i = 0; i < input2.length; i++) {

        var x = input2[i].value;
        if (x != '') {

            var y = parseInt(x);
            sum += y;
            data1.push(y);
        }
        else {
            data1.push(0);
        }
    }
    result1.value = sum;
    let data2 = [];

    for (i = 0; i < input3.length; i++) {

        var z;
        z = input3[i].options[input3[i].selectedIndex].text;

        if (z == '--') {
            data2.push(0.0);
        }
        else {
             var flt = gradePoint(z);
             data2.push(flt);
        }

    }
    
    var total_result = 0, cgpa,CGPA;
    for (i = 0; i < input2.length; i++) {

        total_result += ( data1[i] * data2[i]);
        // alert(total_result);

    }

    cgpa = total_result / sum ;
    CGPA = cgpa.toFixed(2);
    result2 . value = CGPA;



}


function gradePoint(grade) {

    if (grade == 'A+') {

        return 4.00;
    }
    else if (grade == 'A') {
        return 3.75;
    }
    else if (grade == 'A-') {
        return 3.50;

    }
    else if (grade == 'B+') {
        return 3.25;

    }
    else if (grade == 'B') {
        return 3.00;

    }
    else if (grade == 'B-') {
        return 2.75;

    }
    else if (grade == 'C+') {
        return 2.50;

    }
    else if (grade == 'C') {
        return 2.25;

    }
    else if (grade == 'D') {
        return 2.00;

    }
    else if (grade == 'F') {
        return 0.00;

    }


}