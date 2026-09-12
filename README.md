# 🌳 Бинарное дерево поиска на JavaScript

## 📌 Описание

Данная программа реализует **бинарное дерево поиска (Binary Search Tree, BST)** на языке JavaScript.

Бинарное дерево поиска — это структура данных, в которой для каждого узла выполняется правило:

- значения меньше текущего узла находятся слева;
- значения больше текущего узла находятся справа.

Пример дерева:

             50
           /    \
         30      70
        /  \    /  \
      20   40  60   80

## ⚙️ Возможности

Программа поддерживает:

- создание узлов дерева;
- добавление элементов;
- поиск элементов;
- симметричный обход;
- прямой обход;
- обратный обход.

## 🧩 Структура узла

Каждый узел содержит:

- `value` — значение узла;
- `left` — левый дочерний узел;
- `right` — правый дочерний узел.

Класс узла:

    class Node {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }

## ➕ Добавление элемента

Функция `Insert()` добавляет новый элемент в дерево.

Если значение меньше текущего узла, оно добавляется в левое поддерево.

Если значение больше текущего узла, оно добавляется в правое поддерево.

    function Insert(root, value) {
      if (root === null) {
        return CreateNode(value);
      }

      if (value < root.value) {
        root.left = Insert(root.left, value);
      }

      if (value > root.value) {
        root.right = Insert(root.right, value);
      }

      return root;
    }

## 🔎 Поиск элемента

Функция `Find()` выполняет поиск элемента в бинарном дереве.

    function Find(root, value) {
      if (root === null) {
        return null;
      }

      if (root.value === value) {
        return root;
      }

      if (value < root.value) {
        return Find(root.left, value);
      } else {
        return Find(root.right, value);
      }
    }

## 🔄 Обходы дерева

### Симметричный обход

Функция `LeftToRightTraversal()` выполняет обход:

    левое поддерево → корень → правое поддерево

    function LeftToRightTraversal(root) {
      if (root != null) {
        LeftToRightTraversal(root.left);
        console.log(root.value);
        LeftToRightTraversal(root.right);
      }
    }

Для бинарного дерева поиска такой обход выводит элементы по возрастанию.

### Прямой обход

Функция `BypassTopBottom()` выполняет обход:

    корень → левое поддерево → правое поддерево

    function BypassTopBottom(root) {
      if (root != null) {
        console.log(root.value);
        BypassTopBottom(root.left);
        BypassTopBottom(root.right);
      }
    }

### Обратный обход

Функция `BottomUpTraversal()` выполняет обход:

    левое поддерево → правое поддерево → корень

    function BottomUpTraversal(root) {
      if (root != null) {
        BottomUpTraversal(root.left);
        BottomUpTraversal(root.right);
        console.log(root.value);
      }
    }

## 🚀 Запуск программы

Для запуска необходим установленный Node.js.

Файл программы:

    main.js

Запуск:

    node main.js

## 📊 Используемые данные

В программу последовательно добавляются значения:

    50, 30, 70, 20, 40, 60, 80

В результате формируется дерево:

             50
           /    \
         30      70
        /  \    /  \
      20   40  60   80

## 📋 Результат работы

Симметричный обход:

    20
    30
    40
    50
    60
    70
    80

Поиск элемента `40`:

    Элемент найден

## 🧠 Сложность алгоритмов

| Операция | Средний случай | Худший случай |
|----------|----------------|---------------|
| Поиск    | O(log n)       | O(n)          |
| Вставка  | O(log n)       | O(n)          |
| Обход    | O(n)           | O(n)          |

Худший случай возникает, когда дерево становится несбалансированным и практически превращается в связный список.

## 📁 Структура проекта

    binary-tree/
    ├── main.js
    └── README.md

## 🛠️ Технологии

- JavaScript
- Node.js
- Binary Search Tree
- Рекурсия

## 📄 Лицензия

Учебный проект для изучения структур данных и алгоритмов.
