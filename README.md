# 이 문서는 많이 관리되지 않을 것입니다.

원래 이 문서는 제가 속한 팀원을 위해 제작되었지만 다른 분, 특히 PS나 프로그래밍 자체가 처음인 분께 도움이 될 수도 있어 오픈소스로 공개했습니다.

하지만, 저는 이제 고등학생이 아니고 교사 및 예비 교원이 될 생각도 아직 없으므로 2024 SFPC 충남부터는 참가하지 못합니다. 따라서 이 문서 역시 많이 관리하지 않을 것 같습니다. 물론, 제가 평소 PS를 하면서 발견한 이 문서에 추가하면 좋을 법한 내용이 있다면 추가하려고 합니다.

이 문서를 주로 관리하고 싶으신 분은 [FennecFoxSW@protonmail.com](mailto:FennecFoxSW@protonmail.com?subject=prepare-sfpc-docs%EB%A5%BC%20%EA%B4%80%EB%A6%AC%ED%95%98%EA%B3%A0%20%EC%8B%B6%EC%8A%B5%EB%8B%88%EB%8B%A4.)으로 연락하세요. 이 문서를 포크하신 뒤 직접 관리하셔도 좋습니다.

혹은 아예 새로운 문서 등을 만드셔도 좋습니다. SFPC는 다른 대회와는 다르게 대회(Contest)나 경쟁 형식이 아닌 모두가 즐길 수 있는 챌린지(Challenge)라고 합니다. SFPC에 참가하는 모두가 유의미한 즐거움을 만들 수 있도록 이 저장소를 시작으로 더 많은 학생분이 SFPC 자체에 기여하셨으면 좋겠습니다.

---

# [SFPC](https://www.kait.re.kr/sfpc)를 준비하기 위한 문서

이 저장소는 SFPC를 준비하는 학생분들, 특히 PS나 프로그래밍이 처음인 분들을 위한 문서가 포함된 저장소로, https://sfpc.fennecfoxsw.dev 의 소스 코드입니다. SFPC의 기출 문항 목록, SFPC가 치러지는 환경 및 기타 팁 등을 제공합니다.

[Vue](https://vuejs.org/)와 [Vite](https://github.com/vitejs/vite)를 기반으로 하는 [VitePress](https://github.com/vuejs/vitepress)를 이용해 개발했습니다.

## 문서 실행 및 빌드하기

이 문서를 로컬에서 실행하거나 빌드하려면 [Node.js](https://nodejs.org/)와 [pnpm](https://pnpm.io/)이 필요합니다. Node.js v16.17 이상을 쓰고 계신다면 Corepack을 통해 pnpm을 쉽게 설치하실 수 있습니다.

```
corepack enable
corepack prepare pnpm@latest --activate
```

Node.js와 pnpm이 설치됐다면 아래 명령어를 통해 종속성을 설치하고 개발 서버를 실행할 수 있습니다.

```
pnpm install
pnpm docs:dev
```

문서를 빌드하고 빌드한 문서를 확인하려면 각각 아래 두 명령어를 사용하세요.

```
pnpm docs:build
pnpm docs:preview
```
