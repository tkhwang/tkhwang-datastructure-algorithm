# Implement your function below.
def non_repeating(given_string):

    result = {}

    for i, ch in enumerate(given_string):
        if(ch in result):
            result[ch] += 1
        else:
            result[ch] = 1

    print(result)

    for i, ch in enumerate(result):
        if(result[ch] == 1):
            return ch
