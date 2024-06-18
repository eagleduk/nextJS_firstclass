## 병렬 라우트

- app route 폴더 명에 `@`기호를 추가한다.
- layout 의 기본 component 에서 병렬 라우트와 같은 이름의 props를 추출하여 component를 출력한다.
- 단, 병렬 라우터의 하위 라우터를 가지려면 동일 이름의 하위 라우터를 모든 병렬 라우터에 추가해 주어야 한다.
- 하위 라우터에 변경 내용이 없다면 `default.js` 파일을 이용하여 항상 같은 component를 출력할 수 있다.

## Catch-All

- page router 의 중첩된 동적 route와 비슷한 개념
- 단지 폴더를 2중중첩 대괄호 `[[...id]]` 형식으로 사용한다.
- 다수의 param 값을 배열로 받을 수 있다.
