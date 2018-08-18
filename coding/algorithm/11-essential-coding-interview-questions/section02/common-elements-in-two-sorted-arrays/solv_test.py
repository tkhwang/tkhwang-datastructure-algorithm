import pytest
from solv import *


def test1():

    list_a1 = [1, 3, 4, 6, 7, 9]
    list_a2 = [1, 2, 4, 5, 9, 10]
    assert common_elements(list_a1, list_a2) == [1, 4, 9]


def test2():

    list_b1 = [1, 2, 9, 10, 11, 12]
    list_b2 = [0, 1, 2, 3, 4, 5, 8, 9, 10, 12, 14, 15]
    assert common_elements(list_b1, list_b2) == [1, 2, 9, 10, 12]


def test3():

    list_c1 = [0, 1, 2, 3, 4, 5]
    list_c2 = [6, 7, 8, 9, 10, 11]
    assert common_elements(list_c1, list_c2) == []
