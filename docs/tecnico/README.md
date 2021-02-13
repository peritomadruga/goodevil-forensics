# Introdução
---
## Binário
Os computadores armazenam dados no formato binário, que é o sistema numeral de base 2 representado por 1's e 0's.
O sistema binário segue as mesmas regras do sistema decimal. No entanto, ao contrário do decimal, que tem 10 símbolos e faz a multiplicação pela potência de 10, o sistema binário tem 2 símbolos (0 e 1) e faz a multiplicação pela potência de 2.

Nos computadores, cada 1 ou 0 é chamado de bit; a soma de 8 bits chama-se byte. O bit de ordem mais alta se localiza à extrema esquerda e tem o maior valor, sendo chamado de **(MSB - Most Significant Bit)** Bit Mais Significativo. No lado oposto, o bit de valor mais baixo fica à extrema direita e é chamado de **(LSB - Least Significant Bit)** Bit Menos Significativo.

| MSB |    |    |    |    |    |    |    | LSB |
|:---:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:---:|
| 2   | 2  | 2  | 2  | 2  | 2³ | 2² | 2¹ | 2   |
| 256 |128 | 64 | 32 | 16 | 8  | 4  | 2  | 1   |

Observe que todos os dados são armazenados nos computadores em binários: suas fotos digitais, vídeos do YouTube, posts e tuítes nas mídias sociais, emails e qualquer outra coisa existente em um computador são armazenados no formato binário.

Considere o número binário 110011010. Para convertê-lo em decimal, observe a tabela abaixo.

2 + 8 + 16 + 128 + 256 = 410

| Binário | Decimal |
|:-------:|:-------:|
|  1 x 2  |  256    |
|  1 x 2  |  128    |
|  0 x 2  |   0     |
|  0 x 2  |   0     |
|  1 x 2  |   16    |
|  1 x 2  |   8     |
|  0 x 2  |   0     |
|  1 x 2  |   2     |
|  0 x 2  |   0     |

## Decimal (Base 10)
É o sistema de numeração amplamente utilizado, é empregado todo dia quando realizados cálculos matemáticos.
Ele é chamado de sistema de *base 10* porque usa 10 dígitos ou símbolos para representar seus valores.

No sistema decimal, a posição do número indica o valor que ele representa, e cada dígito é multiplicado pela potência de 10 associada à sua posição. Por exemplo, considere o número decimal *5437*, o qual é interpretado da seguinte forma.

5437 = 5000 + 400 + 30 + 7

Ou mais precisamente:

5437 = 5 x 10³ + 4 x 10² + 3 x 10¹ + 7 x 10°

O conhecimento do sistema de numeração decimal é essencial, já que os outros sistemas de numeração seguem regras semelhantes.

## Hexadecimal (Base 16)
Conhecido como Hex, esse sistema de numeração usa 16 dígitos ou símbolos para representar seus valores. Ele contém os seguintes números e letras: (0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F). As letras maiúsculas são usadas para representar os números de 10 a 15.

O principal motivo para a existência desse sistema de numeração é a representação de valores binários longos em uma ordem compacta que seja fácil para as pessoas lerem. O sistema Hex consegue fazer isso unindo cada bit em um único grupo.

O sistema Hex também nos ajuda a escrever linhas mais curtas para representar valores específicos, (como o número 20 em Hex, que representa o espaço entre duas palavras). O valor de cada posição é determinado por potências de 16, em vez de 10.

Por exemplo, para converter de Hex para decimal:

19A = (1 x 16²) + (9 x 16¹) + (10 x 16°) = 256 + 144 + 10 = 410

**A** é igual a 10 em decimal, observe a tabela abaixo:

| Decimal | Hexadecimal | Binário |
|:-------:|:-----------:|:-------:|
|    0    |      0      |  0000   |
|    1    |      1      |  0001   |
|    2    |      2      |  0010   |
|    3    |      3      |  0011   |
|    4    |      4      |  0100   |
|    5    |      5      |  0101   |
|    6    |      6      |  0110   |
|    7    |      7      |  0111   |
|    8    |      8      |  1000   |
|    9    |      9      |  1001   |
|   10    |      A      |  1010   |
|   11    |      B      |  1011   |
|   12    |      C      |  1100   |
|   13    |      D      |  1101   |
|   14    |      E      |  1110   |
|   15    |      F      |  1111   |

Os números Hex podem ser diferenciados dos de outros sistemas de numeração com a inclusão do prefixo **Ox** ou a inserção do subscrito 16 ou do sufixo H.

## Codificação de caracteres

Há dois esquemas de codificação principais usados pelos computadores para representar texto:

**ASCII**: O *American Standard Code for Information Interchange* foi inventado há muito tempo e ainda é suportado em quase todos os editores de texto. Ele apresenta uma habilidade apenas limitada de representar as letras de todos os idiomas mundiais, assim como pontuação e símbolos especiais de outras línguas, porque usa apenas 7 bits ou 128 valores. Também há uma versão estendida do ASCII, chamada **Extended ASCII**, que dá suporte a 256 caracteres, mas ela ainda não oferece suporte a todos os idiomas internacionais.

A tabela do código [ASCII](https://ascii.cl) pode ser encontrada através do link.

**Unicode**: A codificação **Unicode**, criada pelo *Unicode Consortium*, é um esquema de codificação de caracteres amplamente usado que fornece um número exclusivo para cada caractere de qualquer idioma internacional. O Unicode tem suporte na maioria dos sistemas operacionais, pacotes de software, dispositivos móveis e aplicações web. Ele costuma ser definido como **UTF-8, UTF-16, UTF-32** ou **UCS-2**.

A tabela do código [Unicode](https://unicode.org](https://unicode.org) pode ser encontrada através do link.

## Estrutura de arquivos

Os arquivos digitais são compostos de uma sequência de bits: cada tipo de arquivo tem um esquema de codificação específico que descreve como as informações estão armazenadas dentro desse arquivo. O formato do arquivo pode ser livre ou proprietário.  Alguns formatos de arquivo podem armazenar mais de um tipo de conteúdo; é isso que ocorre em muitos formatos populares que armazenam conteúdo multimídia.

Como usuários, distinguimos o tipo do arquivo por sua extensão. No entanto como investigadores, não podemos depender apenas da extensão para determinar o tipo do arquivo, já que ela pode ser facilmente alterada para qualquer outra. Com o intuito de combater essas técnicas de ocultação, devemos verificar a assinatura (cabeçalho) do arquivo para saber seu tipo.

A maioria dos arquivos digitais tem uma assinatura localizada nos 20 primeiros bytes do arquivo.

## Editores Hex

- [HxD](https://mh-nexus.de)
- [Free Hex Editor Neo](https://hhdsoftware.com/free-hex-editor)
- [wxHexEditor](https://wxhexeditor.org)
- [PSPad](https://pspad.com)

## Metadados de arquivos
Os metadados são dados sobre dados. Quando todos os tipos de arquivo têm metadados associados a eles. Em geral os metadados vêm integrados no mesmo arquivo; no entanto, alguns tipos de arquivos armazenam seus metadados em um arquivo separado. Os metadados contêm dados que descrevem o arquivo aos quais estão associados.

Da perspectiva da perícia, os metadados podem ser muito úteis em vários casos. Podemos rastrear os diferentes autores de um arquivo pelos metadados associados. Também podemos pesquisar dentro dos metadados do arquivo para localizar informações interessantes, e a maioria das ferramentas de computação forense dá suporte à busca nos metadados dos arquivos de imagem forenses obtidos.

Os metadados de um arquivo de imagem contêm informações forenses importantes, como o timestamp de quando a foto foi tirada e as coordenadas GPS de onde foi tirada, além de detalhes e configurações da câmera.

Há muitas ferramentas que podem visualizar e editar os metadados de um arquivo digital. Aqui estão algumas populares:

- [Exif Pilot](https://colorpilot.com/exif.html) - Editor/visualizador de metadados de imagens
- [Exif Tool](https://sno.phy.queensu.ca/~phil/exiftool) - Lê, grava e edita metainformações de uma grande variedade de arquivos digitais (a maioria dos formatos de imagens) criado por *Phil Harvey*.
- [GIMP](https://gimp.org) - Editor de imagens; pode manipular/visualizar metadados de arquivos de imagens.
- [XnView](https://xnview.com/en/) - Visualiza/edita metadados de imagens.
- [PDF Metadata Editor](https://broken-by.me/pdf-metadata-editor) - Pra arquivos PDF.
- [MP3tag](https://mp3tag.de/en) - Para arquivos de áudio.
- [MediaInfo](https://mediaarea.net/en/MediaInfo) - Visualizador/editor de metadados para arquivos de vídeo e áudio.

Do ponto de vista da perícia, a análise de metadados é muito importante para qualquer tipo de investigação, já que pode revelar um grande volume de informações sobre o caso em questão. Alguns usuários podem tentar manipular os metadados do arquivo para remover a evidência e enganar os investigadores. É função dos especialistas forenses descobrir essa alteração e tentar demonstrá-la para a corte. A maioria das ferramentas de computação forense permite a fácil extração e busca em massa nos metadados de arquivos.

## Timestamps
Os arquivos digitais contêm diferentes metadados dentro deles; os mais importantes são os metadados de timestamp, usados para representar vários evendos de data/hora associados no arquivo de interesse como a data/hora do último acesso, a data da última alteração e a data da criação. Durante nossa investigação, podemos encontrar uma data/hora que esteja codificada de maneira específica, a qual precisamos decodificá-la.

A ferramenta [Decode](https://digital-detective.net/digital-forensic-software/free-tools) pode executar essa tarefa.
