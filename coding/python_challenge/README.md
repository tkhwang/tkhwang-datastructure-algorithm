# Python Challenge


## 2

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re

with open('./page.txt') as f:
    data = f.read()

with open('./data.txt', 'w') as f:
    f.write(data)

print "".join(re.findall("[A-Za-z]", data))
```

Next: http://www.pythonchallenge.com/pc/def/equality.html

## 1

CTF 에 많이 나오는 Caesar Cipher 인 듯.
[Online calculator: Caesar cipher](http://planetcalc.com/1434/) 에서 확인해보면 `ROT2`

문제 url `map` 에 적용하면 `ocr`

Next : http://www.pythonchallenge.com/pc/def/ocr.html


## 0

```
In [3]: 2**38
Out[3]: 274877906944
```

Next => http://www.pythonchallenge.com/pc/def/274877906944.html
