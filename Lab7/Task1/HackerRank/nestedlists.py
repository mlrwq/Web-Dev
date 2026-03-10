students = []

n = int(input())

for _ in range(n):
    name = input()
    grade = float(input())
    students.append([name, grade])


grades = sorted(set([student[1] for student in students]))

second_lowest = grades[1]

names = [student[0] for student in students if student[1] == second_lowest]

for name in sorted(names):
    print(name)