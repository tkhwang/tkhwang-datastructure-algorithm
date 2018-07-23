from pythonds.basic import Deque
def palchecker(aString):
    charqueue = Deque()

    for ch in aString:
        charqueue.addRear(ch)

    stillEqual = True

    while charqueue.size() > 1 and stillEqual:
        first = charqueue.removeFront()
        last = charqueue.removeRear()
        if first != last:
            stillEqual = False

    return stillEqual

