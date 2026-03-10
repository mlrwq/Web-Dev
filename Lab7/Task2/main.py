from models import Animal, Dog, Cat

d1 = Dog("Rex" , 1, "yellow", "golden retriever")
d2 = Dog("Hatiko", 3, "red", "shiba inu")
c1 = Cat("Murka", 2, "black", "sleepy")

animals = [d1, d2, c1]

for animal in animals:
    print(animal)

print("-" * 30)

for animal in animals:
    print(animal.speak())

print("-" * 30)

for animal in animals:
    print(animal.info())

print("-" * 30)


print(d1.eat("meat"))
print(c1.eat("fish"))
print(d2.eat("bone"))

print("-" * 30)

for animal in animals:
    print(animal.info())

print("-" * 30)

print(c1.describe_mood())
print(c1.change_mood("grumpy"))

