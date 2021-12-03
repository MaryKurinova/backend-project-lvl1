### ПРОЕКТ НА HEXLET: "ИГРЫ РАЗУМА"


### Hexlet tests and linter status:
[![Actions Status](https://github.com/MaryKurinova/backend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/MaryKurinova/backend-project-lvl1/actions)

<a href="https://codeclimate.com/github/codeclimate/codeclimate/maintainability"><img src="https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability" /></a>

<a href="https://github.com/MaryKurinova/backend-project-lvl1/actions"><img src="https://github.com/MaryKurinova/backend-project-lvl1/workflows/Node%20CI/badge.svg" alt="Github Actions" style="max-width: 100%;"></a></p>

#### Для установки сделайте следущее:
1. Склонируйте репозиторий 
```bash
    git clone git@github.com:MaryKurinova/backend-project-lvl1.git
```
2. Введите make install и проект установится
```bash
    make install
```

Мой первый проект на Хекслете. «Игры разума» — набор из пяти консольных игр. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.
 
Игры:

✓ <i>"Проверка на чётность"</i>

Суть игры в следующем: пользователю показывается случайное число. Необходимо ответить <i>yes</i>, если число чётное, или <i>no</i> — если нечётное:

[![asciicast](https://asciinema.org/a/fj1ZnVthJxpz3Thdbbiierj3v.svg)](https://asciinema.org/a/fj1ZnVthJxpz3Thdbbiierj3v)

✓ <i>"Калькулятор"</i>

Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

[![asciicast](https://asciinema.org/a/aKbZhusZua9Tu1QO30jvDAbEL.svg)](https://asciinema.org/a/aKbZhusZua9Tu1QO30jvDAbEL)

✓ <i>"Наибольший общий делитель (НОД)"</i>

 Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

[![asciicast](https://asciinema.org/a/SGvl4Hf6EfFFyfxSrHAFB3bKX.svg)](https://asciinema.org/a/SGvl4Hf6EfFFyfxSrHAFB3bKX)


✓ <i>"Арифметическая прогрессия"</i>

Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

Рекомендуемая длина прогрессии – 10 чисел. Длина может генерироваться случайным образом, но должна содержать не менее 5-ти чисел!
Позиция спрятанного элемента каждый раз изменяется (выбирается случайным образом).

[![asciicast](https://asciinema.org/a/agLQxXoxHsfVtKYFjVlBsaFUc.svg)](https://asciinema.org/a/agLQxXoxHsfVtKYFjVlBsaFUc)