# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/YstSeSodw7tyhhbYgpK9PD9DHdITEV

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/usqRmXZcgVLUVQMmFfQKiXcuVUACDP

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/ItmTxl70lBBh8uhJ3kSY8h2BLMnTsn

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/ufGedFSeCepCPxzX5Q4BeelqOsm5Cg
