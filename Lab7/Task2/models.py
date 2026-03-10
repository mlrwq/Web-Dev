class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color
        self.hungry = True

    def speak(self):
        return f"{self.name} makes sound"
    
    def eat(self, food):
        self.hungry = False
        return f"{self.name} is eating {food}"
    
    def info(self):
        if self.hungry:
            hunger = "hungry"
        else:
            hunger = "full"

        return f"{self.name} | age: {self.age} | color: {self.color} | feeling: {hunger}"
    
    def __str__(self):
        return f"{type(self).__name__}('{self.name}', age = {self.age})"
    

class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed
    
    def speak(self):
        return f"{self.name} says: woof!"
    
    def fetch(self):
        return f"{self.name} fetches the ball"
    
    def info(self):
        base = super().info()
        return f"{base} | breed: {self.breed}"
    
class Cat(Animal):
    def __init__(self, name, age, color, mood):
        super().__init__(name, age, color)
        self.mood = mood

    def speak(self):
        return f"{self.name} says: meow!"
    
    def describe_mood(self):
        return f"{self.name} is feeling {self.mood}"
    
    def change_mood(self, new_mood):
        self.mood = new_mood
        return f"{self.name} feels {self.mood} now"
    
    def info(self):
        base = super().info()
        return f"{base} | mood: {self.mood}"
    
