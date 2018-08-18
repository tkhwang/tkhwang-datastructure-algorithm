# Implement your function below.
def most_frequent(given_list):
    count = dict()
    max_item = None
    max_count = -1

    for _, item in enumerate(given_list):
        if item not in count:
            count[item] = 1
        else:
            count[item] += 1
        if (max_count < count[item]):
            max_count = count[item]
            max_item = item

    print("[*] count = ", count)

    #max_item = max(count, key=count.get)
    print("[+] max_item = ", max_item)
    return max_item


def main():
    # NOTE: The following input values will be used for testing your solution.
    # most_frequent(list1) should return 1
    list1 = [1, 3, 1, 3, 2, 1]
    most_frequent(list1)
    # most_frequent(list2) should return 3
    list2 = [3, 3, 1, 3, 2, 1]
    most_frequent(list2)
    # most_frequent(list3) should return None
    # list3 = []
    # most_frequent(list3)
    # most_frequent(list4) should return 0
    list4 = [0]
    most_frequent(list4)
    # most_frequent(list5) should return -1
    list5 = [0, -1, 10, 10, -1, 10, -1, -1, -1, 1]
    most_frequent(list5)


if __name__ == '__main__':
    main()
