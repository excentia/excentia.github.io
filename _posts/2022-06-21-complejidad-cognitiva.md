---
layout: post
title: 'Complejidad Cognitiva'
description: Una nueva forma de medir la comprensibilidad del código

date: '2022-06-210T08:00:00Z'
author: Sonsoles Cabrera<br><br>(white paper original G. Ann Campbell)
categories:

- productos
- sonarsource

cover: /img/posts/2022-06-21-complejidad-cognitiva.jpg

---

<img width="100%" src="/img/posts/2022-06-21-complejidad-cognitiva.jpg">

La Complejidad Ciclomática se formuló inicialmente como una medida de la “capacidad de prueba y mantenibilidad” del
flujo de control de un módulo. Si bien sobresale en la medición de la primera, su modelo matemático subyacente no es
satisfactorio para producir un valor que mida la última. Este white paper describe una nueva métrica que rompe con el
uso de modelos matemáticos para evaluar el código con el fin de remediar las deficiencias de la Complejidad Ciclomática
y producir una medición que refleje con mayor precisión la dificultad de comprensión y, por lo tanto, de mantener
métodos, clases y aplicaciones.

## Una nota sobre terminología

Mientras que la Complejidad Cognitiva es una métrica de lenguaje neutro que se aplica por igual a archivos y clases, a
métodos, procedimientos, funciones, etc., los términos orientados a objetos “clase” y “método” se utilizan por
conveniencia.

## Introducción

La Complejidad Ciclomática de Thomas J. McCabe ha sido durante mucho tiempo el estándar de facto para medir la
complejidad del flujo de control de un método. Originalmente se pretendía “identificar módulos de software que serán
difíciles de probar o mantener” (_Thomas J. McCabe, “A Complexity Measure”, IEEE Transactions on Software Engineering,
Vol. SE-2, No. 4, December 1976_),
pero si bien calcula con precisión el número mínimo de casos de prueba requeridos
para cubrir completamente un método, no es una medida satisfactoria de comprensibilidad. Esto se debe a que los métodos
con igual Complejidad Ciclomática no necesariamente presentan la misma dificultad para el mantenedor, lo que lleva a la
sensación de que la medición puede alarmar innecesariamente, al sobrevalorar algunas estructuras y subestimar otras.

Al mismo tiempo, la Complejidad Ciclomática ya no es integral. Formulado en un entorno Fortran en 1976, no incluye
estructuras de lenguaje modernas como <code>try/catch</code> y lambdas.

Y finalmente, ya que cada método tiene una puntuación mínima de Complejidad Ciclomática de uno, es imposible saber si
una clase determinada con una Complejidad Ciclomática agregada alta es una clase de dominio grande y fácil de mantener,
o una clase pequeña con un flujo de control complejo. Aparte del nivel de clase, está ampliamente reconocido que las
puntuaciones de las aplicaciones de Complejidad Ciclomática se correlacionan con sus líneas de códigos totales.

**En otras palabras, la complejidad ciclomática es de poca utilidad por encima del nivel del método.**

Como remedio para estos problemas, la Complejidad Cognitiva se ha formulado para abordar las estructuras del lenguaje
moderno y producir valores que sean significativos a nivel de clase y aplicación. Más importante aún, se aparta de la
práctica de evaluar código basado en modelos matemáticos para que pueda producir evaluaciones del flujo de control que
correspondan a las instituciones de los programadores sobre el esfuerzo mental o cognitivo requerido para comprender
esos flujos.

## Una ilustración del problema

Es útil comenzar la discusión de la Complejidad Cognitiva con un ejemplo de problema para el que está diseñado. Los dos
métodos siguientes tienen igual Complejidad Ciclomática, pero son sorprendentemente diferentes en términos de
comprensibilidad.

<img width="100%" src="/img/posts/2022-06-21-complejidad-cognitiva-el-problema.png">

El modelo matemático subyacente a la Complejidad Cognitiva otorga a estos dos métodos el mismo peso, pero es evidente
que el flujo de control `sumOfPrimes` es más difícil de entender que el de `getWords`. Es por ello que la Complejidad
Cognitiva abandona el uso de modelos matemáticos para evaluar el flujo de control en favor de un conjunto de reglas
simples para convertir la intuición del programador en números.

## Criterios básicos y metodología

Una puntuación de Complejidad Cognitiva se evalúa de acuerdo a estas tres reglas básicas:

1. Ignora las estructuras que permiten que varios enunciados sean legibles abreviados en uno.

2. Incrementa (añade uno) por cada ruptura en el flujo lineal del código.

3. Incrementa cuando las estructuras que rompen el flujo están anidadas.

Además, una puntuación de complejidad se compone de cuatro tipos diferentes de incrementos:

**A. Anidamiento**: evaluado para anidar estructuras de flujo de control dentro de otras.

**B. Estructural**: evaluado en estructuras de flujo de control que estás sujetas a un incremento de anidación y que
aumentan el recuento de anidaciones.

**C. Fundamental**: evaluado sobre declaraciones no sujetas a un incremento de anidamiento.

**D. Híbrido**: evaluado en estructuras de flujo de control que no están sujetas a un incremento de anidamiento, pero
que sí aumentan el recuento de anidamiento.

Mientras que el tipo de incremento no produce ninguna diferencia en las matemáticas (cada incremento agrega uno a la
puntuación final), hacer una distinción entre las categorías de características que se cuentan hace que sea más fácil
entender dónde se aplican y dónde no se aplican los incrementos de anidamiento.

Estas reglas y los principios detrás de ellas se detallan más minuciosamente en las siguientes secciones.

## Ignorar taquigrafía

Un principio rector en la formación de la Complejidad Cognitiva es el de incentivar las buenas prácticas de
codificación. Es decir, ignorar o desconectar las características que hacen que el código sea más legible.

La estructura del método en sí en un buen ejemplo. Dividir el código en métodos te permite condensar varias
declaraciones en una única llamada con un nombre evocador, es decir, “abreviar”. Por lo tanto, la Complejidad Cognitiva
no aumenta para los métodos.

La Complejidad Cognitiva también ignora los operadores que se encuentran en muchos lenguajes, de nuevo
porque permiten manipular varias líneas de código en una sola. Por ejemplo, los dos ejemplos de código siguientes hacen
lo mismo:

<img width="100%" src="/img/posts/2022-06-21-complejidad-cognitiva-ejemplo.png">

El significado de la versión de la izquierda tarda un momento en procesarse, mientras que la versión de la derecha se
aclara de inmediato una vez que entiende la sintaxis del lenguaje. Por esa razón, la Complejidad Cognitiva ignora los
operadores de este tipo.

## Incremento por roturas en el flujo lineal

Otro principio rector en la formulación de la Complejidad Cognitiva es que las estructuras que rompen el flujo lineal
normal del código de arriba abajo, de izquierda a derecha, requiere que los encargados de mantenimiento trabajen más
para comprender ese código. Como reconocimiento a este esfuerzo adicional, la Complejidad Cognitiva evalúa los
incrementos estructurales para:

- Estructural en bucle: `for`, `while`, `do while`, ...

- Conditionales: operadores ternarios, `if`, `#if`, `#ifdef`, ...

Evalúa incrementos híbridos para:

- `else if`, `elif`, `else`, ...

No se evalúa ningún incremento de anidación para estructuras porque el costo mental ya se pagó al leer el `if`.

Estos objetivos de incremento resultarán familiares para aquellos que estén acostumbrados a la Complejidad Ciclomática.
Además, la Complejidad Cognitiva también aumenta para:

### Catches

Un `catch` representa una especie de rama en el flujo de control tanto como un `if`. Por lo tanto, cada cláusula de
captura
da como resultado un incremento estructural de la Complejidad Cognitiva. Ten en cuenta que un `catch` solo agrega un
punto
a la puntuación de Complejidad Cognitiva, sin importar cuántos tipos de excepciones de detecten. Los bloques `try` y
`finally` se ignoran juntos.

### Switches

Un `switch` y todos sus `case` combinados incurren un solo incremento estructural.

Bajo la Complejidad Ciclomática, un `switch` se trata como un análogo a una cadena `if-else if`. Es decir, cada `case`
en el
`switch` provoca un incremento porque provoca una rama en el modelo matemático del flujo de control.

Pero desde un punto de vista del que mantiene el código, un `switch`, que compara una sola variable con un conjunto de
valores
literales nombrados explícitamente, es mucho más fácil de entender que una cadena `if-else if` porque esta última puede
hacer cualquier número de comparaciones, utilizando cualquier número de variables y valores.

En resumen, una cadena `if-else if` debe leerse detenidamente, mientras que un `switch` a menudo se puede ver de un
vistazo.

### Secuencias de operadores lógicos

Por razones similares, la Complejidad Cognitiva no se incrementa para cada operador lógico binario. En su lugar, evalúa
un incremento fundamental para cada secuencia de operadores lógicos binarios. Por ejemplo, considera los siguientes
pares:

`a && b`

`a && b && c && d`

`a || b`

`a || b || c || d`

Comprender la segunda línea de cada par no es mucho más difícil que entender la primera. Por otro lado, existe una
notable diferencia en el esfuerzo por comprender las siguientes dos líneas:

`a && b && c && d`

`a || b && c || d`

Debido a que las expresiones booleanas se vuelven más difíciles de entender con operadores mixtos, la Complejidad
Cognitiva aumenta para cada secuencia de operadores similares. Por ejemplo:

<pre>
if (a          // +1 por el 'if'
    && b && c  // +1 
    || d || e  // +1
    && f)      // +1'

if (a          // +1 por el 'if'
    &&         // +1
    !(b && c)) // +1
</pre>

Si bien la Complejidad Cognitiva ofrece un “descuento” para operadores similares en relación a la Complejidad
Ciclomática, se incrementa para todas las secuencias de operadores binarios, como lo de asignaciones de variables,
invocaciones de métodos y declaraciones de retorno.

### Recursividad

A diferencia de la Complejidad Ciclomática, la Complejidad Cognitiva añade un incremento fundamental para cada método en
un ciclo de recursividad, ya sea directo o indirecto. Hay dos motivaciones para esta decisión. En primer lugar, la
recursividad representa una especie de “meta-bucle” y los incrementos de la Complejidad Cognitiva para los bucles. En
segundo lugar, la Complejidad Cognitiva trata de estimar la dificultad relativa de comprender el flujo de control de un
método, e incluso algunos programadores experimentados encuentran la recursividad difícil de entender.

### Saltos a las etiquetas

`goto` añade un incremento fundamental a la Complejidad Cognitiva, al igual que `break` o `continue` a una etiqueta y otros
saltos multi-niveles como el `break` o `continue` a un número que se encuentra en algunos lenguajes. Pero debido a que un
`return` temprano a menudo puede hacer que el código sea mucho más claro, ningún otro salto o salida anticipada causa un
incremento.

### Incremento para estructuras de ruptura de flujo anidadas

Parece intuitivamente obvio que una serie lineal de cinco `if` y estructuras `for` sería más fácil de entender que esas
mismo cinco estructuras anidadas sucesivamente, independientemente del número de rutas de ejecución a través de cada
serie. Debido a que tal anidamiento aumenta las demandas mentales para comprender el código, la Complejidad Cognitiva
evalúa un incremento de anidamiento para él.

Concretamente, cada vez que una estructura que causa un incremento estructural o híbrido se anida dentro de otra
estructura de este tipo, se agrega un incremento de anidación para cada nivel de anidación.

Por ejemplo, en el siguiente código, no hay incremento de anidamiento para el método en sí o para el try porque ninguna
estructura da como resultado un incremento estructural o híbrido:

<img width="100%" src="/img/posts/2022-06-21-complejidad-cognitiva-ejemplo-metodo.png">

No obstante, las estructuras `if`, `for`, `while` y `catch` están sujetas a incrementos tanto estructurales como de anidamiento.

Además, mientras los métodos de nivel superior se ignoran y no hay incremento estructural para lambdas, 
los métodos anidados y características similares, dichos métodos incrementan el nivel de anidación cuando
se anidan dentro de otras estructuras similares a métodos:

<img width="100%" src="/img/posts/2022-06-21-complejidad-cognitiva-ejemplo-metodo-2.png">


## Las implicaciones

La Complejidad Cognitiva se formuló con el objetivo principal de calcular las puntuaciones de los métodos que reflejan 
con mayor precisión la comprensibilidad relativa de los métodos, y con los objetivos secundarios de abordar las 
construcciones del lenguaje moderno y producir métricas que sean valiosas por encima del nivel del método. 

Evidentemente, se ha logrado el objetivo de abordar las construcciones del lenguaje moderno. Los otros dos 
objetivos se examinan a continuación.


### Puntuaciones de complejidad intuitivamente “correctas”

Esta discusión empezó con un par de métodos con igual Complejidad Ciclomática, pero con comprensibilidad desigual.

Ahora es el momento de volver a examinar esos métodos y calcular sus puntuaciones de Complejidad Cognitiva:

<pre>
void  myMethod2  () {
  Runnable  r =  () -> {           // +0 (but nesting level is now 1)
    if (condition1)   { … }        // +2 (nesting=1)
  } ;
}                                  // Cognitive Complexity 2

#if DEBUG                          // +1 for if
void myMethod2   () {              // +0 (nesting level is still 0)
  Runnable r =   () -> {           // +0 (but nesting level is now 1)
    If (condition1)   { … }        // +3 (nesting=2)
  };
}                                  // Cognitive Complexity 4
#endif
</pre>

El algoritmo de Complejidad Cognitiva concede a estos dos métodos puntuaciones marcadamente diferentes, que 
reflejan mucho más su relativa comprensibilidad.

### Métricas que son valiosas por encima del nivel del método

Asimismo, debido a que la Complejidad Cognitiva no se incrementa para la estructura del método, los números agregados 
se vuelven útiles. Ahora puedes notar la diferencia entre una clase de dominio – uno con una gran cantidad de 
captadores y definidores simple- y otro que contiene un flujo de control complejo simplemente comparando sus 
valores métricos. La Complejidad Cognitiva se convierte así en una herramienta para medir la comprensibilidad 
relativa de clases y aplicaciones.

## Conclusión

Los procesos de escribir y mantener el código son procesos humanos. Sus resultados deben adherirse a modelos 
matemáticos, pero no encajan en los modelos matemáticos en sí mismos. Por eso los modelos matemáticos son 
inadecuados para evaluar el esfuerzo que requieren.

La Complejidad Cognitiva rompe con la práctica de usar modelos matemáticos para evaluar la mantenibilidad del
software. Se parte de los precedentes establecidos por la Complejidad Ciclomática, pero utiliza el juicio humano 
para evaluar cómo se deben contar las estructuras y decidir qué se debe añadir al modelo en su conjunto. Como 
resultado, produce puntajes de complejidad de métodos que a los programadores les parecen evaluaciones relativas 
de comprensibilidad más justas que las disponibles con modelos anteriores. Además, debido a que la Complejidad 
Cognitiva no cobra “costo de entrada” por un método, produce esas evaluaciones relativas más justas no solo a 
nivel de método, sino también a nivel de clase y aplicación.


---

<br>

_White paper original: [Cognitive Complexity](https://www.sonarsource.com/resources/cognitive-complexity/)_
