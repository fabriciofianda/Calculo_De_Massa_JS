Programa de Cálculo de Energia de Partícula
Este é um simples programa em JavaScript que realiza o cálculo da energia total de uma partícula, utilizando a equação de Einstein:

E = mc²

Onde:

E é a energia total da partícula em joules (J)
m é a massa da partícula em quilogramas (kg)
c é a velocidade da luz em metros por segundo (m/s)
Além disso, o programa utiliza a fórmula do momento para calcular o momento linear da partícula:

p = mv

Onde:

p é o momento linear da partícula em kg*m/s
v é a velocidade da partícula em m/s
Com esses valores, é possível calcular a energia total da partícula com a equação de Einstein:

E = sqrt((mc²)² + p²)

O programa utiliza a biblioteca math.js além do readline para realizar o cálculo da raiz quadrada.

Como utilizar o programa
Para utilizar o programa, é necessário ter o Node.js instalado em seu computador.

Clone ou faça o download deste repositório para seu computador.

Abra o terminal na pasta raiz do projeto.

Digite o seguinte comando para instalar as dependências:


npm install mathjs
npm install readline
Para executar o programa, digite o seguinte comando:


node Projeto_Calculo_de_energia.js
O programa irá solicitar que você digite a massa da partícula em kg e a velocidade da partícula em m/s. Digite os valores solicitados e pressione Enter.

O programa irá exibir o resultado do cálculo da energia total da partícula em joules (J).

Exemplo
less
Copy code
node einstein.js
Digite a massa da partícula em kg: 6
Digite a velocidade da partícula em m/s: 300
A energia total da partícula é de: 540000000000000000 J
