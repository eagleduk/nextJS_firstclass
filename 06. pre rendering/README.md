#### 사전 렌더링

1. 정적 렌더링(Static Site Generator)

   - 빌드시 렌더링 생성

2. SSR(Server Side Rendering)

   - 요청시(페이지 접근시) 렌더링 생성

#### 정적 렌더링(Static Site Generator)

1. `getStaticProps()` 의 반환값을 사용하여 빌드시의 데이터 제공
2. 반환값의 `revalidate` 값을 이용하여 정적 렌더링의 재 렌더링 시간 할당 => **증분 정적 생성(ISR)**
3. 반환값의 `props` 값은 React Component 에 제공하는 **Props** 가 된다.
4. `getStaticProps()` 가 있으면 Component 렌더링 전에 수행된다.
5. `getStaticProps()` 내부의 로직은 클라이언트에 오픈이 되지 않는다.

```jsx
export default function App(props) {
  const { title } = props;

  return <div>{title}</div>;
}

async function getStaticProps() {
  return {
    props: {
      title: "NextJS",
    },
    revalidate: 10,
  };
}
```
