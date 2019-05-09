# Implement your function below.


def is_one_away_when_same_length(s1, s2):
    diff = 0

    for i, ch in enumerate(s1):
        if(s1[i] != s2[i]):
            diff += 1
            if(diff > 1):
                return False
    return True


def is_one_away_when_one_character_more(s1, s2):
    i = 0
    diff = 0

    while(i < len(s2)):
        if(s1[i + diff] == s2[i]):
            i += 1
        else:
            diff += 1
            if(diff > 1):
                return False
    return True


def is_one_away(s1, s2):

    if(abs(len(s1) - len(s2)) >= 2):
        return False
    elif(len(s1) == len(s2)):
        return is_one_away_when_same_length(s1, s2)
    elif(len(s1) > len(s2)):
        return is_one_away_when_one_character_more(s1, s2)
    elif(len(s1) < len(s2)):
        return is_one_away_when_one_character_more(s2, s1)
