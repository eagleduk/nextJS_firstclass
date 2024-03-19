## 최적화

#### metadata

- nextJS 의 `Head` Component 내부에 추가
- 어느 위치에 삽입하던 NextJS 에서 `<head>` 태그 내부로 위치시켜 준다.
- 어느 위치, Component 에 삽입하던 NextJS 가 위치시켜 주기 때문에, 동적으로 생성하기가 쉽다.
- `_app.js` Component 는 모든 화면의 부모가 되는 Component 이기 때문에, 모든 페이지에서 적용하고자 하는 metadata 를 추가할 수 있다.
