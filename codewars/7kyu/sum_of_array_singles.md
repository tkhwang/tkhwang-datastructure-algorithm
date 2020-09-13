# 7kyu : Sum of array singles

[Solutions: Sum of array singles | Codewars](https://www.codewars.com/kata/59f11118a5e129e591000134/solutions/python)

## My solution

```python
def repeats(arr):
    return sum(list(set([x for x in arr if arr.count(x) == 1])))
```

## Other solution

### Easier to understand

```python
def repeats(arr):
    return sum([x for x in arr if arr.count(x) == 1])
```

### Clever solution

```python
from collections import Counter

def repeats(arr):
    return sum(k for k, v in Counter(arr).items() if v == 1)
```