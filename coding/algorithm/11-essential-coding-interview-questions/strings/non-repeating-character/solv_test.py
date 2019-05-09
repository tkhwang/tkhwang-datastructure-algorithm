import pytest
from solv import *


def test1():

    assert non_repeating("abcab") == 'c'


def test2():

    assert non_repeating("abab") == None


def test3():

    assert non_repeating("aabbbc") == 'c'


def test4():

    assert non_repeating("aabbdbc") == 'd'
