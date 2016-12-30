#!/usr/bin/env python
# -*- coding: utf-8 -*-

import re

with open('./page.txt') as f:
    data = f.read()

with open('./data.txt', 'w') as f:
    f.write(data)

print "".join(re.findall("[A-Za-z]", data))

