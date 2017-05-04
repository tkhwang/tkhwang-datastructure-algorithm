#!/bin/python3

import sys

def combinationG(input):
    level=['']
    for v in input:
        nList=[]
        for item in level:
            new = item + v
            yield new
            nList.append(new)
        level+=nList

s = input().strip()
n = int(input().strip())

possible = list()
combinations = list(set(combinationG(s)))
for combination in combinations:
    for character in combination:
        print(character, combination)
        if combination.count(character) == 1:
            possible.append(combination)
        else:
            continue

#print(possible)

for a0 in range(n):
    x = int(input().strip())
    # your code goes here
    #print(a0,x)
