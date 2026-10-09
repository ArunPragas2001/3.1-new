students(['Amal', 'Kamal', 'Nimal', 'Saman', 'Ravi']).

first_student(Student) :- students([Student|_]).
students_except_first(Rest) :- students([_|Rest]).
ravi_registered :- students(Students), member('Ravi', Students).
number_of_students(Count) :- students(Students), length(Students, Count).
add_fathima(NewList) :- students(Students), append(Students, ['Fathima'], NewList).
remove_kamal(NewList) :- students(Students), delete(Students, 'Kamal', NewList).
reverse_students(ReverseList) :- students(Students), reverse(Students, ReverseList).

% 1. first_student(Student).
% 2. students_except_first(Rest).
% 3. ravi_registered.
% 4. number_of_students(Count).
% 5. add_fathima(NewList).
% 6. remove_kamal(NewList).
% 7. reverse_students(ReverseList).