---
outline: deep
---

# SFPC 저지 환경

::: warning 2023 SFPC 전북 기준입니다.
향후 바뀔 수 있습니다.
:::

SFPC에서는 [DOMjudge](https://www.domjudge.org/)라고 불리는 채점 시스템을 사용하고 있으며 이는 ICPC(국제 대학생 프로그래밍 대회)를 포함하여 많은 대회에서 사용하고 있는 채점 시스템입니다.

## 컴파일 및 실행 옵션, 언어 버전

아래 내용은 2023 SFPC 전북 진행 중 공지 및 안내를 통해 알려주셨습니다.

각 언어의 입출력 처리 방법을 알고 싶으시다면 [팀 메뉴얼](/environment/team-manual#codeexamples)을 읽어주세요.

### Python

- 컴파일: `py_compile` 모듈이 사용됩니다.
- 실행: `pypy3`
- 버전: `Python 3.8.13 (7.3.9+dfsg-1, Apr 01 2022, 21:41:47) [PyPy 7.3.9 with GCC 11.2.0]`

### C

- 컴파일: `g++ -x c++ -Wall -O2 -static -pipe -o`
- 버전: `gcc (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0`
- 참고: GCC는 C 표준 옵션을 따로 명시하지 않으면 `--std=gnu17`이 사용됩니다.

### C++

- 컴파일: `g++ -x c++ -Wall -O2 -static -pipe -o`
- 버전: `g++ (Ubuntu 11.4.0-1ubuntu1~22.04) 11.4.0`
- 참고: G++은 C 표준 옵션을 따로 명시하지 않으면 `--std=gnu++14`이 사용됩니다.

### Java

- 실행: `java -Dfile.encoding=UTF-8 -XX:+UseSerialGC`
- 버전:

```
openjdk 11.0.20.1 2023-08-24
OpenJDK Runtime Environment (build 11.0.20.1+1-post-Ubuntu-0ubuntu122.04)
OpenJDK 64-Bit Server VM (build 11.0.20.1+1-post-Ubuntu-0ubuntu122.04, mixed mode, sharing)
```

### Javascript (Node.js)

- 실행: `nodejs`
- 버전: `nodejs v12.22.9`

### R

- 실행: `Rscript`
- 버전: `R scripting front-end version 4.1.2 (2021-11-01)`

### Rust

- 실행: `rustc -C opt-level=3 -o`
- 버전: `rustc 1.66.1 (90743e729 2023-01-10) (built from a source tarball)`

## 스코어보드

SFPC에서는 대회 진행 중엔 DOMJudge에서 제공하는 스코어보드를 사용하지만, 시상식이나 대중에 공개되는 스코어보드는 [스팟보드](https://github.com/spotboard/spotboard)를 사용하고 있으며 이는 ICPC 서울 리저널에서 사용하는 스코어보드이며 UCPC 등의 다른 대회에서도 사용하기도 합니다.

### 스코어보드 오픈 (어워드 모드)

스팟보드를 쓸 경우 대회 중 특정 시간 이후에는 스코어보드가 동결(Freeze)됩니다. SFPC의 경우 대회 시작 후 90분이 지나면 스코어보드가 동결됩니다.

스코어보드 동결 이후 채점된 모든 결과는 스코어보드에 결과가 반영되지 않으며 따라서 대회가 끝날때 까지 누가 1등을 했는지 알 수 없습니다.

시상식에서 스팟보드는 어워드 모드로 진행되는데, 이때 진행자가 동결된 시점의 스코어보드의 가장 아래에 있는 팀에서 시작해서 동결된 제출 결과를 공개합니다. 이 과정에서 제출 결과가 스코어보드가 반영되며 순위가 많이 변경됩니다.

SFPC에서는 이 과정을 클로징 세레모니라고 부릅니다.
