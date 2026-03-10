v = int(input())
t = int(input())

res = v*t

if v > 0:
    if res >= 109:
        res %= 109
        print(res)
    else:
        print(res)
else: 
    if res <= -109:
        res %= 109
        print(res)
    else:
        print(109 - abs(res))