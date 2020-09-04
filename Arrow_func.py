def arrow(n):
    return n**n

def arrow2(n):
    num = int(input(n))
    return arrow(arrow(n))

print(arrow(3))
print(arrow2(3))
