// started on Monday, December  1, 2008
// $Id$

// chapter 2, even exercises

// exercise 2.2, page 89
function make_point (a,b) {return cons(a,b);}
function x_point (s) {return car(s);}
function y_point (s) {return cdr(s);}

function equal_points(a,b) {
    return x_point(a) == x_point(b) && y_point(a) == y_point(b);
}

function print_point (p) {
    document.write("(" + car(p) + " " + cdr(p) + ")");
}

function make_segment (a,b) {return cons(a,b);}
function start_segment (s) {return car(s);}
function end_segment (s) {return cdr(s);}

function midpoint_segment (s) {
    var x = (x_point(start_segment(s)) + x_point(end_segment(s))) / 2;
    var y = (y_point(start_segment(s)) + y_point(end_segment(s))) / 2;
    return make_segment(x,y);
}

function test_midpoint_segment () {
    var s = make_segment(make_point(2,2), make_point(4,4));
    print_point(midpoint_segment(s));
    if (!equal_points(make_point(3,3), midpoint_segment(s))) {
	alert("midpoint_segment");
    }
    s = make_segment(make_point(-1,-2), make_point(1,2));
    if (!equal_points(make_point(0,0), midpoint_segment(s))) {
	alert("midpoint_segment");
    }
}

// exercise 2.4, page 92
function cons (x,y) {
    return function (m) {return m(x,y);};
}

function car (z) {
    return z(function (p,q) {return p;});
}

function cdr (z) {
    return z(function (p,q) {return q;});
}

