## 사전 렌더링

1. 정적 렌더링(Static Site Generator)

   - 빌드시 렌더링 생성

2. SSR(Server Side Rendering)

   - 요청시(페이지 접근시) 렌더링 생성

## 정적 렌더링(Static Site Generator)

#### 정적 페이지

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

1. `getStaticProps()` 의 반환값을 사용하여 빌드시의 데이터 제공
2. 반환값의 `revalidate` 값을 이용하여 정적 렌더링의 재 렌더링 시간 할당 => **증분 정적 생성(ISR)**
3. 반환값의 `props` 값은 React Component 에 제공하는 **Props** 가 된다.
4. `getStaticProps()` 가 있으면 Component 렌더링 전에 수행된다.
5. `getStaticProps()` 내부의 로직은 클라이언트에 오픈이 되지 않는다.

#### 동적 페이지

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

1. 동적 페이지를 사전 렌더링 하려면 **1) 랜더링 Path 제공** 또는 **2) 요청시 렌더링** 옵션을 선택해야 한다.
2. 해당 옵션은 `getStaticPaths()` 의 반환값을 사용하여 제공한다.
3. build 시 `getStaticPaths()`-`getStaticProps()` 순으로 실행된다.
4. `fallback`

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

   - true
     : build 시 모든 생성된 path 외의 path 가 입력되면 해당 페이지를 렌더링 한다. **렌더링 중에는 에러가 발생함으로 에러 처리 필수.** 렌더링 이후에는 또다시 렌더링 하지 않고 렌더링된 데이터를 이용한다.

   - false
     : build 시 생성된 path 외의 path 가 입력되면 404 에러가 발생한다.

   - "blocking"
     : build 시 모든 생성된 path 외의 path 가 입력되면 해당 페이지를 렌더링 한다. **렌더링 중에는 브라우저가 로딩중 상태가 된다.** 렌더링 이후에는 또다시 렌더링 하지 않고 렌더링된 데이터를 이용한다.

   - 렌더링할 데이터가 존재하지 않는 데이터이면 `getStaticProps()` 에서 `{notFound:true}` 를 반환함으로 notFound 페이지를 출력한다.

## SSR(Server Side Rendering)

```jsx
export default function App(props) {
  return <h1>Hello {props.name}</h1>;
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  return {
    props: {
      name: "World",
    },
  };
}
```

1. `getServerSideProps()` 가 포함된 페이지.
2. 미리 생성될 데이터를 특정지을 수 없을 때 수행
3. SSR 페이지는 build 시 **HTML** 파일이 생성되지 않는다.
4. `getServerSideProps()` 파라메터 **context** 내부에 `HttpRequest, HttpResponse` 가 포함되어 있다.

## Client-Side data fetching

1. 사전 렌더링으로 구현할 수 없는 페이지의 경우( 실시간 데이터, 데이터의 변경 주기가 짧은 데이터)
2. React 의 useEffect - fetch 또는 [SWR](https://swr.vercel.app/) 를 사용하여 구현
