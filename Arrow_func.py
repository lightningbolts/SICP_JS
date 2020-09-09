def arrow(n):
    return n**n

def arrow2(n):
    return arrow(arrow(arrow(n)))

print(arrow(3))
print(arrow2(2))
