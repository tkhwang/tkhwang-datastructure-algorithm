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
