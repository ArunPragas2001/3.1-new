numbers([1,2,3,4,5]).
empty_list([]).

traverse_list([]).
traverse_list([H|T]):-
    write(H),
    nl,
    traverse_list(T).

list_length([],0).
list_length([_|T],Length):-
    list_length(T,L),
    Length is L+1.

add_first(X,List,[X|List]).
