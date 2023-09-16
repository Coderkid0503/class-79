students_array=[];
function submit(){
    var name1=document.getElementById("name_student_1").value;
    var name2=document.getElementById("name_student_2").value;
    var name3=document.getElementById("name_student_3").value;
    var name4=document.getElementById("name_student_4").value;
    students_array.push(name1);
    students_array.push(name2);
    students_array.push(name3);
    students_array.push(name4);
    console.log(students_array);
    document.getElementById("display_name").innerHTML=students_array;
    document.getElementById("submit_button").style.display="none";
}
function sorting(){
    students_array.sort();
    console.log(students_array);
    document.getElementById("display_name").innerHTML=students_array;
}