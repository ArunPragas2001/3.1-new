connected(a,b).
connected(a,c).
connected(b,c).
connected(b,d).



route(X,Y):-
 connected(X,Y),
 write(X),
 write("->"),
 write(Y).

route(X,Y):-
 connected(X,Z),
   write(X),
   write("->"),
   write(Z),
   write("->"),
   write(Y).
