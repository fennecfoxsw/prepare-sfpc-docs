---
outline: deep
---

<!---
SPDX-FileCopyrightText: © 2024 FennecFoxSW <FennecFoxSW@protonmail.com>
SPDX-License-Identifier: GPL-2.0-only

Original contents from https://github.com/DOMjudge/domjudge/blob/main/doc/manual/team.rst, GNU GPLv2
-->

# DOMjudge 팀 매뉴얼

::: info 이 페이지의 라이선스
이 페이지의 원본은 GNU GPLv2의 적용을 받는 [DOMjudge/domjudge](https://github.com/DOMjudge/domjudge/blob/main/doc/manual/team.rst)입니다. 따라서 이 페이지의 내용 역시 GNU GPLv2로 배포됩니다.

이 페이지의 소스 코드는 [FennecFoxSW/prepare-sfpc-docs](https://github.com/FennecFoxSW/prepare-sfpc-docs/tree/main/docs/environment/team-manual.md)에서 찾아보실 수 있습니다.
:::

::: warning 이 페이지는 기계 번역 되었습니다.
이 페이지는 원본 파일의 형식을 변형한 뒤 기계 번역해 작성했습니다.

맞춤법과 문체 검사를 했으나 의미가 어색한 부분이나 reStructuredText를 마크다운으로 변환하는 도중 깨진 부분이 있을 수 있어 참고만 해주시기 바랍니다. 여러분이 CodeUp, 백준과 같은 OJ를 사용해보신 적이 있다면 굳이 전부 읽지 않으셔도 됩니다.

원본 문서는 [여기](https://www.domjudge.org/docs/manual/team.html)서 확인하세요.
:::

이 매뉴얼은 DOMjudge 프로그래밍 대회 제어 시스템 버전에 대한 설명서입니다. 아래 요약은 시스템 인터페이스의 작동을 간략하게 설명합니다. 이는 시스템 사용을 시작하기 위한 빠른 소개를 위한 것입니다. 그러나 팀에서 전체 문서를 읽어보실 것을 강력히 권장합니다. 이 대회 관리 시스템에는 문제가 발생했을 때 중요해질 수 있는 구체적인 세부 사항이 있습니다.

::: tip Summary

DOMjudge의 웹 인터페이스는 https://www.domjudge.org/demoweb/team 에서 확인할 수 있습니다. 다음 페이지의 두 그림을 참조하세요.

솔루션은 '표준 입력'에서 모든 입력을 읽고 모든 출력을 '표준 출력'(콘솔이라고도 함)에 써야 합니다. (다른) 파일을 열 필요가 없습니다. 또한 [코드 예제](#codeexamples)를 참조하세요.

아래 방법으로 솔루션을 제출할 수 있습니다.

> **웹 인터페이스**
>
> 팀 페이지(https://example.com/domjudge/team)에서 메뉴 표시줄의 녹색 **제출** 버튼을 클릭합니다. 제출할 파일을 선택합니다. 기본적으로 문제는 (첫 번째) 파일의 이름에서, 언어는 확장자에서 선택됩니다. 웹 인터페이스는 파일 이름에서 메인 클래스(Java 및 Kotlin의 경우) 또는 메인 파일(Python의 경우)을 자동으로 감지하려고 시도합니다. 제출하기 전에 추측이 올바른지 다시 확인하세요.

점수, 제출물 보기, 해명 요청 및 답변 보내기 및 읽기는 웹 인터페이스(https://example.com/domjudge/team)를 통해 이루어집니다.

:::

## 인터페이스 개요

<!-- <figure>
<img src="team-overview.png" style="width:80.0%" alt="team-overview.png" />
<figcaption>The team web interface overview page.</figcaption>
</figure>

<figure>
<img src="team-scoreboard.png" style="width:80.0%" alt="team-scoreboard.png" />
<figcaption>The scoreboard webpage.</figcaption>
</figure> -->

## 솔루션을 제출하기 {#submitting}

솔루션 제출은 명령줄 프로그램인 `submit`(설치된 경우)을 사용하거나 웹 인터페이스를 쓰는 두 가지 방법으로 할 수 있습니다.

### 웹 인터페이스

웹 인터페이스에서 솔루션을 제출할 수 있습니다. 모든 페이지의 메뉴 표시줄에서 녹색 **제출** 버튼을 클릭합니다. 파일 선택 버튼을 클릭하고 제출할 파일을 하나 또는 여러 개 선택합니다. DOMjudge는 첫 번째 파일의 이름 및 확장자로부터 문제, 언어, 메인 클래스(Java 및 Kotlin의 경우) 또는 메인 파일(Python의 경우)을 확인하려고 시도합니다. 그렇지 않으면 적절한 값을 선택하세요. 파일 이름은 영숫자로 시작해야 하며 영숫자와 `+.\_-`만 포함할 수 있습니다.

제출 버튼을 누르고 제출을 확인하면 제출물 목록 페이지로 다시 리디렉션됩니다. 이 페이지에는 제출이 성공했다는 메시지가 표시되고 제출물이 목록에 표시됩니다. 문제가 발생한 경우 오류 메시지가 표시됩니다.

## 제출 결과 확인하기

팀 웹 페이지의 왼쪽 열에는 제출물의 개요가 표시됩니다. 여기에는 제출 시간, 프로그래밍 언어, 문제 및 상태 등 모든 관련 정보가 포함되어 있습니다. 팀 페이지의 주소는 https://example.com/domjudge/team입니다.

페이지 상단에는 스코어보드에서 팀의 순위와 시도하고 해결한 문제가 표시됩니다. 메뉴를 통해 모든 팀의 점수가 표시된 공개 점수판 페이지를 볼 수 있습니다. 많은 셀은 마우스를 가져가면 추가 \"제목 텍스트\" 정보가 표시됩니다. 점수 열에는 해결한 문제 수와 페널티 시간을 포함한 총시간이 나열됩니다. 문제 열의 각 셀에는 제출한 문제 수가 나열되며, 문제가 해결된 경우 대회 시작 후 처음으로 정답을 제출한 시간(분)이 표시됩니다. 이 시간은 이전의 잘못된 제출로 인해 발생한 페널티 시간과 함께 총시간에 포함됩니다.

원하는 경우, 대회가 종료되기 얼마 전에 점수판을 '동결'할 수 있습니다. 전체 스코어보드 보기는 더는 업데이트되지 않지만, 개요 페이지의 팀 행은 업데이트됩니다. 그러면 팀의 순위가 \'?\'로 표시됩니다.

마지막으로, 상단 메뉴를 통해 문제 목록을 확인하고 심사위원이 제공한 경우 문제 텍스트와 샘플 데이터를 보거나 다운로드할 수도 있습니다.

### 가능한 결과

제출 시 다음과 같은 결과가 나타날 수 있습니다(시스템 구성에 따라 일부 결과가 제공되지 않을 수 있음).

**CORRECT**

제출물이 모든 테스트를 통과했습니다. 이 문제를 해결했습니다! _올바른 제출물에는 페널티가 부과되지 않습니다._

**COMPILER-ERROR**

프로그램을 컴파일하는 동안 오류가 발생했습니다. 제출 세부 정보 페이지에서 정확한 오류를 확인할 수 있습니다(이 옵션은 비활성화되어 있을 수 있음). 컴파일에 몇 초 이상 걸리는 경우 컴파일이 중단되며 이는 컴파일 오류로 간주합니다. _컴파일 오류는 페널티 시간이 발생하지 않습니다. 콘테스트 관리자는 이 점수를 변경할 수 있습니다._

**TIMELIMIT**

프로그램이 이 문제에 대해 허용된 최대 시간보다 오래 걸렸습니다. 따라서 중단되었습니다. 이는 프로그램이 루프에서 멈추거나 솔루션이 충분히 효율적이지 않다는 것을 나타낼 수 있습니다.

**RUN-ERROR**

프로그램을 실행하는 동안 오류가 발생했습니다. 0으로 나누기, 잘못된 메모리 주소 지정(예: 범위를 벗어난 배열 인덱싱), 제한보다 많은 메모리 사용 시도, 파일 읽기 또는 쓰기 등 여러 가지 원인이 있을 수 있습니다. 또한 프로그램이 종료 코드 0으로 종료되는지 확인하세요!

**NO-OUTPUT**

프로그램이 출력을 생성하지 않았습니다. 표준 출력으로 작성했는지 확인합니다.

**OUTPUT-LIMIT**

프로그램이 허용된 한도보다 많은 출력을 생성했습니다. 솔루션이 올바르지 않은 것으로 간주합니다.

**WRONG-ANSWER**

프로그램의 출력이 올바르지 않습니다. 이는 솔루션이 올바르지 않아서 발생할 수 있지만, 출력이 심사위원의 요구에 정확히 부합해야 한다는 점을 기억하세요.

**TOO-LATE**

아쉽게도 대회가 종료된 후에 제출하셨습니다! 제출한 내용은 저장되지만 더는 처리되지 않습니다.

심사위원은 각 문제에 대해 여러 개의 테스트 파일을 준비했을 수 있습니다. DOMjudge는 우선순위가 가장 높은 정답이 아닌 결과를 평결로 보고합니다. _관리자는 정답이 아닌 결과에 대해 다른 우선순위를 결정할 수 있습니다._

## 명확한 설명 요청하기

심사위원과의 모든 의사소통은 설명 메시지를 통해 이루어져야 합니다. 해명 메시지는 팀 페이지의 오른쪽 열에서 찾을 수 있습니다. 심사위원의 설명 답변과 본인이 보낸 설명 요청이 모두 여기에 표시됩니다.

심사위원에게 새로운 해명 요청을 제출하는 버튼도 있으며, 특정 문제 또는 일반 카테고리 중 하나를 요청에 연결할 수 있습니다. 이 해명 요청은 심사위원만 읽을 수 있습니다. 심사위원은 팀에게만 구체적으로 답변하거나 모든 사람에게 관련성이 있는 경우 모든 사람에게 답변을 보낼 수 있습니다.

## 제출물 심사는 어떻게 이루어지나요?{#judgingprocess}

DOMjudge 콘테스트 제어 시스템은 완전히 자동화되어 있습니다. 심사는 다음과 같은 방식으로 이루어집니다.

### 솔루션을 제출하기

웹 인터페이스([제출하기 섹션](#submitting) 참고)를 통해 저지에 문제에 대한 솔루션을 제출할 수 있습니다. 컴파일된 프로그램이나 프로그램의 출력물이 아닌 프로그램의 소스 코드를 제출해야 합니다.

대회 제어 시스템에서 프로그램은 대기열에 들어가 자동 저지 중 하나에게서 컴파일, 실행 및 테스트를 기다립니다.

### 컴파일

제출한 프로그램은 리눅스를 실행하는 자동 심사 시스템에서 컴파일됩니다. 제출된 모든 소스 파일은 컴파일러로 전달되어 실행할 단일 프로그램을 생성합니다. 자바 및 코틀린의 경우 지정된 메인 클래스가 검사되며, 파이썬의 경우 `py_compile` 모듈을 써서 구문 검사를 수행합니다.

### 테스트

프로그램이 성공적으로 컴파일되면 프로그램이 실행되고 그 출력이 심사위원의 출력과 비교됩니다. 출력을 비교하기 전에 프로그램의 종료 상태를 확인합니다. 프로그램이 0이 아닌 종료 코드로 종료되면 프로그램 출력이 올바르더라도 실행 오류가 발생합니다! 실행 중에는 몇 가지 제한 사항이 있습니다. 프로그램이 이러한 제한 사항을 위반하면 실행 오류와 함께 중단됩니다([제약 조건](#runlimits) 섹션 참조).

프로그램 출력을 비교할 때, 일부 여분의 공백이 무시될 수 있다는 점을 제외하고는 판정자의 출력과 정확히 일치해야 합니다(이는 문제의 시스템 구성에 따라 다름). 따라서 출력 요구을 따르도록 주의하세요. 고유한 출력이 없는 문제 문장의 경우(예: 부동 소수점 답안), 시스템에서 수정된 비교 함수를 쓸 수 있습니다. 이는 문제 설명에 문서화됩니다.

### 제약 조건 {#runlimits}

남용을 방지하고 배심원 제도를 안정적으로 유지하며 모든 사람에게 투명하고 평등한 환경을 제공하기 위해 제출물은 샌드박스에서 운영됩니다. 모든 제출물에는 몇 가지 제한 사항이 적용됩니다.

**컴파일 시간**

프로그램 컴파일은 30초 이상 걸리지 않아야 합니다. 그 이후에는 컴파일이 중단되고 그 결과 컴파일 오류가 발생합니다. 실제로는 이런 문제가 발생하지 않아야 합니다. 정상적인 프로그램에서 이런 문제가 발생하면 즉시 심사위원에게 알려주세요.

**소스 크기**

한 번에 제출하는 소스 코드의 총용량은 256KB를 초과할 수 없으며, 초과할 경우 제출이 거부됩니다.

**메모리**

저지는 프로그램을 실행하는 동안 사용할 수 있는 메모리의 양을 지정합니다. 이는 문제마다 다를 수 있습니다. 이는 프로그램 코드, 정적 및 동적으로 정의된 변수, 스택, 자바/파이썬 VM 등을 포함한 총메모리양입니다! 프로그램이 더 많은 메모리를 사용하려고 하면 프로그램이 중단되어 실행 오류가 발생할 가능성이 높습니다.

**새 파일 만들기**

새 파일을 만들지 마세요. 샌드박스는 이를 허용하지 않으며 파일 열기 함수는 실패를 반환합니다. 이 오류를 처리하지 않고 파일을 사용하면 제출 언어에 따라 런타임 오류가 발생할 수 있습니다.

**프로세스 개수**

명시적으로 여러 프로세스(스레드)를 만들어서는 안 됩니다. 프로그램에는 정확히 하나의 프로세서 코어만 완전히 사용할 수 있기 때문에 아무 소용이 없습니다. DOMjudge는 프로그램을 시작한 프로세스를 포함해 동시에 최대 한 개의 프로세스를 실행할 수 있는 샌드박스에서 제출물을 실행합니다.

여러 개의 프로세스로 프로그래밍을 해본 적이 없거나 '스레드'에 대해 들어본 적이 없는 사람도 걱정할 필요가 없습니다. 일반적인 프로그램은 하나의 프로세스에서 실행되기 때문입니다.

## 코드 예제 {#codeexamples}

다음은 문제에 대한 입력을 읽고 출력을 쓰는 방법에 대한 몇 가지 예제입니다.

이 예는 다음 문제에 대한 솔루션입니다. 입력의 첫 번째 줄에는 테스트케이스 수가 포함되어 있습니다. 그런 다음 각 테스트케이스는 최대 99자의 이름(단일 단어)을 포함하는 한 줄로 구성됩니다. 각 테스트케이스에 대해 별도의 줄에 `Hello <이름>!` 문자열을 출력합니다.

이 문제에 대한 샘플 입력 및 출력입니다.

| Input                                         | Output                                                    |
| --------------------------------------------- | --------------------------------------------------------- |
| `3`<br />`world`<br />`Jan`<br />`SantaClaus` | `Hello world!`<br />`Hello Jan!`<br />`Hello SantaClaus!` |

첫 번째 줄 숫자 '3'은 3개의 테스트 케이스가 이어진다는 것을 나타냅니다.

다음은 다양한 프로그래밍 언어에서 이 문제에 대한 가능한 여러 가지 솔루션을 제시합니다.

- C언어 솔루션

```c
#include <stdio.h>

int main() {
	int i, ntests;
	char name[100];

	scanf("%d\n", &ntests);

	for (i = 0; i < ntests; i++) {
		scanf("%s\n", name);
		printf("Hello %s!\n", name);
	}
}
```

- C++ 솔루션

```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
	int ntests;
	string name;

	cin >> ntests;
	for (int i = 0; i < ntests; i++) {
		cin >> name;
		cout << "Hello " << name << "!" << endl;
	}
}
```

- 자바 솔루션

```java
// Note: do not use any 'package' statements

import java.util.*;

class Main {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int nTests = scanner.nextInt();

		for (int i = 0; i < nTests; i++) {
			String name = scanner.next();
			System.out.println("Hello " + name + "!");
		}
	}
}
```

- 코틀린 솔루션

```kotlin
// Note: do not use any 'package' statements

import java.util.*

fun main(args: Array<String>) {
    var scanner = Scanner(System.`in`)
    val nTests = scanner.nextInt()
    for (i in 1..nTests) {
	    System.`out`.format("Hello %s!%n", scanner.next())
    }
}
```

- 파이썬 솔루션

```python
import sys

n = int(input())
for i in range(n):
    name = sys.stdin.readline().rstrip('\n')
    print('Hello %s!' % (name))
```

- C# 솔루션

```csharp
using System;

public class Hello
{
	public static void Main(string[] args)
	{
		int nTests = int.Parse(Console.ReadLine());

		for (int i = 0; i < nTests; i++) {
			string name = Console.ReadLine();
			Console.WriteLine("Hello "+name+"!");
		}
	}
}
```

- 파스칼 솔루션

```pascal
program example(input, output);

var
	ntests, test : integer;
	name         : string[100];

begin
	readln(ntests);

	for test := 1 to ntests do
	begin
		readln(name);
		writeln('Hello ', name, '!');
	end;
end.
```

- 하스켈 솔루션

```haskell
import Prelude

main :: IO ()
main = do input <- getContents
          putStr.unlines.map (\x -> "Hello " ++ x ++ "!").tail.lines $ input
```
