/* 
jerrysypkens.com

Instructions: 
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
   
for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "fizzzzzzzzz";
  if (n % 5 == 0)
    output += "buzzzzzzzzz";
  console.log(output || n);
}

/* 
Output: 
1
2
fizzzzzzzzz
4
buzzzzzzzzz
fizzzzzzzzz
7
8
fizzzzzzzzz
buzzzzzzzzz
11
fizzzzzzzzz
13
14
fizzzzzzzzzbuzzzzzzzzz
16
17
fizzzzzzzzz
19
buzzzzzzzzz
fizzzzzzzzz
22
23
fizzzzzzzzz
buzzzzzzzzz
26
fizzzzzzzzz
28
29
fizzzzzzzzzbuzzzzzzzzz
31
32
fizzzzzzzzz
34
buzzzzzzzzz
fizzzzzzzzz
37
38
fizzzzzzzzz
buzzzzzzzzz
41
fizzzzzzzzz
43
44
fizzzzzzzzzbuzzzzzzzzz
46
47
fizzzzzzzzz
49
buzzzzzzzzz
fizzzzzzzzz
52
53
fizzzzzzzzz
buzzzzzzzzz
56
fizzzzzzzzz
58
59
fizzzzzzzzzbuzzzzzzzzz
61
62
fizzzzzzzzz
64
buzzzzzzzzz
fizzzzzzzzz
67
68
fizzzzzzzzz
buzzzzzzzzz
71
fizzzzzzzzz
73
74
fizzzzzzzzzbuzzzzzzzzz
76
77
fizzzzzzzzz
79
buzzzzzzzzz
fizzzzzzzzz
82
83
fizzzzzzzzz
buzzzzzzzzz
86
fizzzzzzzzz
88
89
fizzzzzzzzzbuzzzzzzzzz
91
92
fizzzzzzzzz
94
buzzzzzzzzz
fizzzzzzzzz
97
98
fizzzzzzzzz
buzzzzzzzzz
*/
        