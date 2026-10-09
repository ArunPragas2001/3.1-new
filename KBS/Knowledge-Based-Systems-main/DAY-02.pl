hello:-write('Hello world').

welcome:-write("Welcome to Knowledge Based Systems").

multi:-write("Knowledge Based Systems"),nl,write("Logic programming"),nl,write("Prolog Practical").

start:-write("hello world"),nl,nl,nl,write("Welcome to KBS").

about_me:- write("Name: Suleka"),nl,write("Programme: IT"),nl,write("Interest: Programming").

greet(Name):-write('Hello'),tab(1),write(Name).

student(Name):-write("Student Name: "),write(Name).

student_report(Name):-write("***************"),nl,tab(2),
    write("STUDENT REPORT"),nl,write("*****************"),nl,
    write("Name:"),tab(2),write(Name),nl,
    write("Course:"),tab(1),write("KBS"),nl,
    write("Practical:"),tab(1),write("Prolog"),nl,
    write("***************").

teacher(Name):-write("Teacher Name: "),write(Name).
