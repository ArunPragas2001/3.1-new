%opposite river bank   
opposite(left,right)
opposite(right,left)

%safety condtitions
%state(F,W,G,C)
safety(state(F,W,G,C)):-
    (G\=W;F=G),
    (G\=C;F=G).

%goal condtition
goal(state(right,right,right,right))

%move1:farmer with goat
move(state(F,W,F,C),goat,state(F2,W,F2,C)):-opposite(F,F2).

%move2:farmer with wolf
move(state(F,W,G,F),wolf,state(F2,F2,G,C)):-opposite(F,F2).


%move3:farmer with cabbage
move(state(F,W,G,C),cabbage,state(F2,W,G,F2)):-opposite(F,F2).

%move4:farmer cross alone
move(state(F,W,G,C),alone,state(F2,W,G,C)):-opposite(F,F2).



%goal condition
solve(state(right,right,right,right), _,[]).


%recursive function
solve(state,Visited,[Action|Actions]):-
   move(state,Action,NextState),safe(NextState),
   \+member(NextState,Visited),
   solve(NextState,[NextState|Visited],Actions).
