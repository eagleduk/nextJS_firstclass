## 사전 렌더링

1. 정적 렌더링(Static Site Generator)

   - 빌드시 렌더링 생성

2. SSR(Server Side Rendering)

   - 요청시(페이지 접근시) 렌더링 생성

## 정적 렌더링(Static Site Generator)

#### 정적 페이지

1. `getStaticProps()` 의 반환값을 사용하여 빌드시의 데이터 제공
2. 반환값의 `revalidate` 값을 이용하여 정적 렌더링의 재 렌더링 시간 할당 => **증분 정적 생성(ISR)**
3. 반환값의 `props` 값은 React Component 에 제공하는 **Props** 가 된다.
4. `getStaticProps()` 가 있으면 Component 렌더링 전에 수행된다.
5. `getStaticProps()` 내부의 로직은 클라이언트에 오픈이 되지 않는다.

```jsx
// App.js

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

#### 동적 페이지

1. 동적 페이지를 사전 렌더링 하려면 **1) 랜더링 Path 제공** 또는 **2) 요청시 렌더링** 옵션을 선택해야 한다.
2. 해당 옵션은 `getStaticPaths()` 의 반환값을 사용하여 제공한다.

```jsx
// [id].js
export default function App(props) {
  const { product } = props;
  return (
    <>
      <h1>{product.title}</h1> {/* title */}
      <p>{product.description}</p> {/* NextJS */}
    </>
  );
}

async function getStaticProps(context) {
  const { params } = context;
  return {
    props: {
      product: {
        id: params.id,
        title: "title",
        description: "NextJS",
      },
    },
    revalidate: 10,
  };
}

async function getStaticPaths() {
  return {
    params: [
      {
        id: "i1",
      },
    ],
    fallback: false,
  };
}
```

3. build 시 `getStaticPaths()`-`getStaticProps()` 순으로 실행된다.
4. `fallback`

   - true
     : build 시 모든 생성된 path 외의 path 가 입력되면 해당 페이지를 렌더링 한다. **렌더링 중에는 에러가 발생함으로 에러 처리 필수.** 렌더링 이후에는 또다시 렌더링 하지 않고 렌더링된 데이터를 이용한다.

     ```jsx
     // [id].js
     export default function App(props) {
       const { product } = props;
       if (!product) {
         return <h1>Loading....</h1>;
       }

       return (
         <>
           <h1>{product.title}</h1> {/* title */}
           <p>{product.description}</p> {/* NextJS */}
         </>
       );
     }

     async function getStaticProps(context) {
       const { params } = context;
       return {
         props: {
           product: {
             id: params.id, // i1
             title: "title",
             description: "NextJS",
           },
         },
         revalidate: 10,
       };
     }

     async function getStaticPaths() {
       return {
         params: [
           {
             id: "i1",
           },
         ],
         fallback: false, // true | "blocking"
       };
     }
     ```

   - false
     : build 시 생성된 path 외의 path 가 입력되면 404 에러가 발생한다.
   - "blocking"
     : build 시 모든 생성된 path 외의 path 가 입력되면 해당 페이지를 렌더링 한다. **렌더링 중에는 브라우저가 로딩중 상태가 된다.** 렌더링 이후에는 또다시 렌더링 하지 않고 렌더링된 데이터를 이용한다.
   - 렌더링할 데이터가 존재하지 않는 데이터이면 `getStaticProps()` 에서 `{notFound:true}` 를 반환함으로 notFound 페이지를 출력한다.
