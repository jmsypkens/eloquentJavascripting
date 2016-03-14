/* 
jerrysypkens.com

Instructions: 
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (var num = 1; num <= 100; num++)
    if (num % 3 == 0)
        console.log(num + " FIZZ");
    else if (num % 5 == 0)
        console.log(num + " Buzz");
    else 
        console.log(num);


/* 
Output: 
1
2
3 FIZZ
4
5 Buzz
6 FIZZ
7
8
9 FIZZ
10 Buzz
11
12 FIZZ
13
14
15 FIZZ
16
17
18 FIZZ
19
20 Buzz
21 FIZZ
22
23
24 FIZZ
25 Buzz
26
27 FIZZ
28
29
30 FIZZ
31
32
33 FIZZ
34
35 Buzz
36 FIZZ
37
38
39 FIZZ
40 Buzz
41
42 FIZZ
43
44
45 FIZZ
46
47
48 FIZZ
49
50 Buzz
51 FIZZ
52
53
54 FIZZ
55 Buzz
56
57 FIZZ
58
59
60 FIZZ
61
62
63 FIZZ
64
65 Buzz
66 FIZZ
67
68
69 FIZZ
70 Buzz
71
72 FIZZ
73
74
75 FIZZ
76
77
78 FIZZ
79
80 Buzz
81 FIZZ
82
83
84 FIZZ
85 Buzz
86
87 FIZZ
88
89
90 FIZZ
91
92
93 FIZZ
94
95 Buzz
96 FIZZ
97
98
99 FIZZ
100 Buzz
*/
        