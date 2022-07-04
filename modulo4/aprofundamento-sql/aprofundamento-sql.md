#### Exercício 1

a) Esta query deletaria a coluna de salario da tabela Actor.
b) Esta query mudaria o nome da coluna de genero para sexo assim a quantidade de caracteres.
c) Esta query nao alteraria nada da tabela em si, pois esta mudando a coluna de genero para genero, porem esta aumentando a quantidade de caracteres.
d) Query:
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

#### Exercício 2

a) Query :
```
UPDATE Actor SET name="Alex Kalawatis", birth_date = "1996-02-29" WHERE id ="003"; 
```

b) Query:
```
UPDATE Actor SET name="JULIANA PAES" WHERE name="Juliana Paes";
```

c) Query:
```
UPDATE Actor SET name="JULIANA PAES" WHERE name="Juliana Paes";
```
d) Não apareceu nenhum erro, somente nao alterou nada na tabela.

#### Exercício 3

a) Query:
```
DELETE FROM Actor WHERE name= "Fernanda Montenegro";
```
b) Query:
```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

#### Exercício 4

a) Query:
```
SELECT MAX(salary) FROM Actor;
```
b) Query:
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
c) Query:
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d) Query:
```
SELECT SUM(salary) FROM Actor;
```