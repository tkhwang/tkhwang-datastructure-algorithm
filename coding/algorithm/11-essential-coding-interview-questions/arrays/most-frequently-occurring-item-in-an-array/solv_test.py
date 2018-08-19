import pytest
from solv import *


def test1():
    # NOTE: The following input values will be used for testing your solution.
    list1 = [1, 3, 1, 3, 2, 1]
    assert most_frequent(list1) == 1


def test2():
    list2 = [3, 3, 1, 3, 2, 1]
    assert most_frequent(list2) == 3


def test3():
    list3 = []
    assert most_frequent(list3) == None


def test4():
    list4 = [0]
    assert most_frequent(list4) == 0


def test5():
    list5 = [0, -1, 10, 10, -1, 10, -1, -1, -1, 1]
    assert most_frequent(list5) == -1
