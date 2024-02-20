## 파일 기반 라우터

- app 폴더 내의 하위 폴더명에 따른 라우터(URL) 가 생성된다.
- 라우터(URL) 내에 `page.js` 파일이 반드시 존재해야 한다.
- `nextjs/link` 컴포넌트를 이용하여 SPA 링크를 사용할 수 있다.

## /app/

- 프로젝트의 라우터를 정의하는 최상위 폴더
- `/app/` 폴더 내의 **icon.png** 파일은 예약 파일명으로 자동적으로 favicon 이 된다.
- `/app/` 하위에는 **layout.js** 파일이 반드시 하나 이상 존재해야 한다.
- 페이지의 `header` 내용은 **layout.js** 내에 위치 한다.

## [예약된 파일명](https://nextjs.org/docs/app/api-reference/file-conventions)

1. page.js

   - 라우터(URL)의 index 페이지가 된다.

2. layout.js

   - 라우터(URL)에서 사용되는 `page.js` 파일을 감싸는 역할을 한다.

3. not-found.js

   - 존재하지 않는 라우터에 대한 fallback 페이지 역할을 한다.

4. error.js

   - 라우터(URL)에서 발생하는 Error에 대한 fallback 페이지 역할을 한다.

## [NextJS 의 폴더 체계](https://nextjs.org/docs/app/building-your-application/routing/colocation)

## dynamic route(동적 라우트)

- **/app** 내에 `[{key}]/page.js` 형태의 파일을 생성하여 동적인 라우트(URL)를 생성한다.
- `page.js` 컴포넌트 내에서 **props.params** 객체 형태로 동적 라우트의 `{key}` 값을 추출할 수 있다.

```jsx
/* /app/[id]/page.js */
export default function Page({ params }) {
  return <h1>{params.id}</h1>;
}
```

## img Component

- HTML 기본 TAG 인 `<img>` 를 사용할 때, 참조되는 이미지 객체가 아닌 객체의 [src] 값을 할당해 주어야 한다.

  ```jsx
  import logo from "@/asset/logo.png";

  export default function App() {
    return <img src={logo.src} alt="logo" />;
  }
  ```

- NextJS 가 제공하는 `<image>` 컴포넌트를 사용하여 이미지의 객체를 전달해 주면, **NextJS** 에서 자동으로 최적화를 하여 출력해준다.

  ```jsx
  import Image from "next/image";
  import logo from "@/asset/logo.png";

  export default function App() {
    return <Image src={logo} alt="logo" />;
  }
  ```

## client component

- React 는 기본적으로 Client 기반 프레임워크이고, NextJS 는 Server & Client 기반 프레임 워크이다.
- 기본적으로 NextJS 에서의 Component 는 Server 에서 rendering 되기 때문에 Client 기반 함수( 이벤트 리스너, hook, setTimeout, setInterval 등) 를 사용할 수 없다.
- NextJS 에서 원하는 Component 를 Client 기반 rendering 을 하기 위해서는 `'use client'` 문구를 추가해 주어야 한다.
- client component 는 component tree 의 최하위에 위치하도록 한다.

## sqlite3, better-sqlite3

- `.js` 파일 기반으로 `.db` 파일을 생성하여 제공하는 local 기반 sql 데이터베이스

## Database

- NextJS Component 들은 기본적으로 Server 에서 동작이 수행되기 때문에, Component 에 `async/await` 을 사용할 수 있다. 또한 `useEffect` 도 Client 함수이기 때문에 사용하지 않는다.
