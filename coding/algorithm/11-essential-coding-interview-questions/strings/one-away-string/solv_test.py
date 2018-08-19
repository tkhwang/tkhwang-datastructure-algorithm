import pytest
from solv import *


def test1():


    assert is_one_away("abcde", "abcd") == True


def test2():

    assert is_one_away("abde", "abcde") == True


def test3():

    assert is_one_away("a", "a") == True


def test4():

    assert is_one_away("abcdef", "abqdef") == True


def test5():

    assert is_one_away("abcdef", "abccef") == True


def test6():

    assert is_one_away("abcdef", "abcde") == True


def test7():

    assert is_one_away("aaa", "abc") == False


def test8():

    assert is_one_away("abcde", "abc") == False


def test9():

    assert is_one_away("abc", "abcde") == False


def test10():
    assert is_one_away("abc", "bcc") == False
