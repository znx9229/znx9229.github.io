def math_po(n):
    row = 1
    while row <= n:
        col = 1
        while col <= row:
            print("%d*%d=%d" % (row, col, row * col), end="\t")
            col += 1
        print("")
        row += 1


def say_hello(str1):
    """say hi"""
    i = 1
    while i <= 3:
        print("hello %s" % str1)
        i += 1


def sum_1(a, b):
    # print("%d * %d = %d" % (a, b, a * b))
    say_hello(str(a * b))
    return a * b


def pr_photo(str_1, n, m):
    i = 1
    while i <= m:
        print(str_1 * n)
        i += 1


pr_photo("%", 3, 5)
math_po(6)
say_hello("znx")
print(sum_1(3, 5))
