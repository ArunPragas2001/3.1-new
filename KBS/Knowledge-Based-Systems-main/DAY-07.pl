employee(john, hr, director, 25).
employee(denis, finance, gm, 21).
employee(fleming, marketing, manager, 15).
employee(bozena, finance, director, 6).
employee(zophia, hr, manager, 13).
employee(urban, it, net_eng, 12).
employee(pilar, admin, secretary, 5).
employee(kura, admin, manager, 10).
employee(jasmine, it, intern, 9).
employee(george, marketing, intern, 7).

position(director, 90000, 54).
position(gm, 80000, 54).
position(secretary, 50000, 24).
position(net_eng, 60000, 36).
position(intern, 30000, 24).

print_position([]).
print_position([Name|Rest]) :-
	employee(Name, Dept, Pos, _),
	write(Name), write('-'), write(Dept), write('-'), write(Pos),nl,print_position(Rest).

get_salary(Name, Salary) :-
    employee(Name, _, Position, _),
    position(Position, Salary, _).

remaining_leaves(Name, Remaining):-
    employee(Name, _, Position, Taken),
    position(Position,_, Allocated),
    Remaining is Allocated-Taken.

get_bonus(Name, Bonus) :-
    get_salary(Name, Salary),
    remaining_leaves(Name, Remaining),
    (
        Remaining > 30 ->
            Bonus is Salary * 0.60;
        Remaining >= 26 ->
            Bonus is Salary * 0.50;
        Remaining >= 21 ->
            Bonus is Salary * 0.40;
        Bonus is 0
    ).