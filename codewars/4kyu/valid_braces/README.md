# [4 kyu] Valid Braces @ 2016.12.24

[Solutions: Valid Braces | Codewars](https://www.codewars.com/kata/5277c8a221e209d3f6000b56/solutions/python)

## My Solution


```python
def validBraces(string):
    stack = []
    for s in string:
        stack.append(s)

    n = 0
    while n < len(string)/2: 
        priv = ''
        for i, s in enumerate(stack):
            if ( priv == '(' and s == ')' ) or \
               ( priv == '[' and s == ']' ) or \
               ( priv == '{' and s == '}' ):
                stack.remove(s)
                stack.remove(priv)
            priv = s
        n = n + 1

    return not stack
```

## Better other solutions

### good to understand

난 stack 에 일일이 넣고 비교를 했는데…
pattern `()`, `{}`, `[]` 를 직접 찾아서 있으면 `replace` 로  없애버린다.
몇 번 돌려야 하나 고민으 되었는데, `while` 로 처리한다… 

```python
def validBraces(s):
  while '{}' in s or '()' in s or '[]' in s:
      s=s.replace('{}','')
      s=s.replace('[]','')
      s=s.replace('()','')
  return s==''
```


### clever


```python
def validBraces(string):
    braces = {"(": ")", "[": "]", "{": "}"}
    stack = []
    for character in string:
        if character in braces.keys():
            stack.append(character)
        else:
            if len(stack) == 0 or braces[stack.pop()] != character:
                return False
    return len(stack) == 0  
```

