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

Os números Hex podem ser diferenciados dos de outros sistemas de numeração com a inclusão do prefixo **0x** ou a inserção do subscrito 16 ou do sufixo **H**.

## Codificação de caracteres

Há dois esquemas de codificação principais usados pelos computadores para representar texto:

**ASCII**: O *American Standard Code for Information Interchange* foi inventado há muito tempo e ainda é suportado em quase todos os editores de texto. Ele apresenta uma habilidade apenas limitada de representar as letras de todos os idiomas mundiais, assim como pontuação e símbolos especiais de outras línguas, porque usa apenas 7 bits ou 128 valores. Também há uma versão estendida do ASCII, chamada **Extended ASCII**, que dá suporte a 256 caracteres, mas ela ainda não oferece suporte a todos os idiomas internacionais.

A tabela do código [ASCII](https://ascii.cl) pode ser encontrada através do link.

**Unicode**: A codificação **Unicode**, criada pelo *Unicode Consortium*, é um esquema de codificação de caracteres amplamente usado que fornece um número exclusivo para cada caractere de qualquer idioma internacional. O Unicode tem suporte na maioria dos sistemas operacionais, pacotes de software, dispositivos móveis e aplicações web. Ele costuma ser definido como **UTF-8, UTF-16, UTF-32** ou **UCS-2**.

A tabela do código [Unicode](https://unicode.org) pode ser encontrada através do link.

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
Os arquivos digitais contêm diferentes metadados dentro deles; os mais importantes são os metadados de timestamp, usados para representar vários eventos de data/hora associados no arquivo de interesse como a data/hora do último acesso, a data da última alteração e a data da criação. Durante nossa investigação, podemos encontrar uma data/hora que esteja codificada de maneira específica, a qual precisamos decodificá-la.

A ferramenta [Decode](https://digital-detective.net/digital-forensic-software/free-tools) pode executar essa tarefa.

## Análise de Hash
Hashing é um conceito importante na área forense; na verdade, você deve calcular o valor hash de qualquer evidência digital que obtiver durante sua investigação para comprovar se os dados obtidos não foram adulterados.

O hashing funciona pela implementação de uma função hash para a conversão de um arquivo digital em um valor string fixo; o valor hash resultante é exclusivo e não pode ser gerado novamente com o uso de outro arquivo ou fragmento de dados. É possível encontrar o valor hash de qualquer aqruivo digital ou fragmento de dados usando uma ferramenta geradora de hash. Os algoritmos criptográficos de hash mais famosos são o *MD5* e o *SHA-256*.

Em investigações forenses, o hashing é usado duas vezes: na primeira; para verificarmos a imagem forense obtida antes da análise começar, e na segunda, no fim do exame para verificarmos a integridade dos dados e do processamento forense durante a investigação.

- [Febooti Hash and CRC](https://febooti.com) - Instale essa ferramenta em seu computador Windows, clique com o botão direito do mouse no arquivo cujo hash deseja calcular, selecione Properties e acesse a aba *Hash/CRC*.
- [HashMyFile](https://nirsoft.net/hash_my_files.html) - É uma ferramenta portátil que exibe valores hash de pastas/arquivos selecionados usando diferentes algoritmos de hashing (por exemplo, *MD5* e *SHA-256*).

Para utilizar o recurso interno no sistema operacional Windows, vá para o menu Start e selecione *Windows PowerShell*. Execute o comando `Get-FileHash` em seguida, o caminho do arquivo cujo hash deseja visualizar.

No uso do *PowerShell* para cálculo do hash de um arquivo, por padrão o Windows emprega o algoritmo *SHA-256*; no entanto, você pode especificar a função hash criptográfica a ser usada adicionando o parâmetro `-Algorithm` após o caminho do arquivo seguido por um dos hashes criptográficos (*SHA-1*, *SHA-256*, *SHA-384*, *SHA-512*, *MD5*).

## Memória volátil
A memória volátil mantém informações por um curto período de tempo; na verdade, ela precisa de energia para reter dados, mas, quando a energia é desligada, perde suas informações rapidamente. Um exemplo de memória volátil é a memória RAM.

## Memória não volátil
A memória não volátil pode reter dados por um longo período, até mesmo após a energia ser desligada. em geral ela é usada para armazenamento persistente de longo prazo. Exemplos desse tipo de memória são as unidades de disco rígido dos computadores, a memória flash e a ROM (read-only-memory).

## Como os dados são armazenados
A capacidade de armazenamento comum de cada setor é de 512 bytes; no entanto, sistemas de arquivos mais recentes podem conter até 4KB. Todos os sistemas de arquivos usados pelo Windows organizam os discos rígidos de acordo com um tamanho de cluster.
O tamanho do cluster representa a menor quantidade de espaço em disco que pode ser usada para conter um arquivo.

O tamanho do cluster depende do sistema de arquivos usado e do tamanho da partição, e varia de 4 a 64 setores. Isso faz com que um único cluster conter dados de somente um arquivo em determinado momento. Logo, se tivermos um arquivo de teto de 11KB, ele ocupará um único cluster; o espaço de armazenamento restante 21KB permanecerá intacto e é chamado de slack space. O slack space pode ser usado para armazenar dados incriminadores ou apenas conter arquivos restantes de uma reciclagem anterior que possam ser restaurados como possíveis evidências.

## Disk Slack Checker
Há uma ferramenta da Kare Ware, chamada [Disk Slack Checker](https://karenware.com/powertools/ptslack), a qual calcula o slack space disponível em um disco rígido.

## Unidades de medida de dados
| Unidade de medida  | Tamanho |
|:-------------------|:--------|
| Bit                | Digito binário único (1 ou 0) |
| Byte               | 8 bits                        |
| Kilobyte  (KB)     | 1.024 bytes                   |
| Megabyte  (MB)     | 1.024 KB                      |
| Gigabyte  (GB)     | 1.024 MB                      |
| Terabyte  (TB)     | 1.024 GB                      |
| Petabyte  (PB)     | 1.024 TB                      |
| Exabyte   (EB)     | 1.024 PB                      |
| Zettabyte (ZB)     | 1 bilhão de TBs               |

## HPA e DCO
A área protegida do host (HPA, host protected area) é uma área reservada criada pelo fabricante do HDD que não pode ser acessada pelo usuário, pelo sistema operacional ou pelo BIOS. Em geral, essa área contém utilitários de suporte do HDD e às vezes arquivos do setor de inicialização do sistema operacional instalado.

> O BIOS (Basic Input Output System) é um software instalado na placa-mãe do computador usado para armazenar as definições de configuração de outros componentes de hardware da máquina, como a unidade de disco rígido, a CPU e a memória.

A device configuration overlay (DCO), uma área reservada do HDD que não é suportada por todos os fabricantes, localiza-se no fim do disco após a partição HPA. Tanto a HPA quanto a DCO podem coexistir no mesmo disco rígido, mas a DCO deve ser criada antes da HPA.

Tanto a área DCO quanto a HPA sobreviverão mesmo depois que uma formatação de disco completa for executada, o que para a perícia as torna um local ideal para possíveis invasores ocultarem dados incriminadores. Muitas ferramentas de perícia conseguem acessar e criar imagens dessas áreas em uma unidade de disco rígido; a maioria das ferramentas de obtenção de evidência de hardware consegue criar imagens dessas duas áreas.

A tabela abaixo, lista os programas populares que podem ser usados para a visualização, cópia ou edição das áreas HPA e DCO.

| Programa | URL |
|:---------|:----|
| Fiesta      | https://sourceforge.net/projects/fiesta |
| TAFT        | https://vidstrom.net/stools/taft |
| ATATool     | https://datasynergy.co.uk/products/misc/atatool.aspx |
| HDAT2       | https://hdat2.com |
| DiskCheckup | https://passmark.com/products/diskcheckup.htm |

## Endereço IP
É um endereço exclusivo que distingue um dispositivo de computação quando conectado à rede IP. Assemelha-se a uma impressão digital eletrônica; logo, dois dispositivos não podem ter o mesmo endereço IP na mesma rede IP. Normalmente o IP é associado a outro protocolo chamado Transmission Control Protocol (TCP), o qual permite que o dispositivo de computação estabeleça uma conexão virtual entre um destino e uma origem para trocar informações.

Atualmente há dois esquemas de endereçamento IP em uso: IP versão 4 e IP versão 6.

O IP v4 é o mais usado mundialmente; no momento, quase todos os serviços online o estão usando. o IP v4 emprega um esquema de endereços de 32 bits e pode conter até 4,3 bilhões de endereços; no entanto, com o grande crescimento da internet e o aumento na quantidade de dispositivos IoT, esse número tornou-se limitado e em breve pode se esgotar. Isso levou ao desenvolvimento de outro padrão chamado IP v6, que pode acomodar 7,9 x 1028 vezes mais endereços que o IP v4.

Há dois tipos de endereços IP; público e privado.

- **Endereços IP públicos:** Permitem conexão direta com a internet e são atribuídos por um Provedor de Serviço Internet (ISP, Internet Service Provider), em que cada IP é exclusivo. Por exemplo, um servidor de email precisa ter um endereço IP público que seja globalmente exclusivo. O endereço IP público pode ser estático ou dinâmico.
  - Endereço IP estático: Esse endereço é fixo como um número de telefone e permanecerá o mesmo enquanto o ISP o reservar para você.
  - Endereço IP dinâmico: Muda sempre que o usuário se conecta com a internet. O ISP usa um protocolo chamado Dynamic Host Configuration Protocol (DHCP) para atribuir endereços IP automaticamente a seus assinantes.

- **Endereços de IP privados:** Também conhecidos como endereços IP locais. É um endereço IP não direcionado à internet para dispositivos que em geral se encontram atrás de um dispositivo de roteamento. Todos os dispositivos existentes em uma rede fechada usam endereços IP privados. Esses endereços continuam a ser atribuídos automaticamente com o uso do DHCP do roteador.

> O DHCP, é um protocolo de rede usado em redes IP, funciona alocando endereços IP dinamicamente para um conjunto de hosts conectados de acordo com um pool de endereços pré-configurado.
