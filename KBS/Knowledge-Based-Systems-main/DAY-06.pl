likes(amal, orange).
likes(amal, banana).
likes(amal, mango).
likes(kamal, mango).
likes(kamal, orange).

choose(X) :- X = apple, !.
choose(orange).
choose(banana).

% likes(amal,X).