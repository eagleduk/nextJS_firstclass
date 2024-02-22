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

5. loading.js

- NextJS 는 처음 방문하는 페이지에 대하여 캐싱을 하기 때문에 데이터를 가져오는 중인 경우 동작을 하지 않는다.
- 그러한 점에 있어서 페이지의 동작 상태를 알려주기 위한 역할을 한다.

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

## [Suspense](react.dev/reference/react/Suspense)

- React 에서 제공하는 기본 Component
- children 요소가 로딩중일 때 fallback 요소로 대체할 수 있다.

## Error

- 에러가 발생하는 라우터 상단에 존재하면 하단에 있는 라우터에서도 사용이 가능하다.
- `error.js` Component 는 반드시 **`use client`** 를 사용해야 한다.

## error 및 not-found 호출

- Component 에서 `notFound` 메소드를 호출하면 호출된 페이지에서 가장 가까이 있는 not-found.js 를 호출한다.

## server action

- 함수나 파일 최상단에 `use server` 문구를 추가 함으로써 backend 서버에서 동작할 수 있게 만들어 준다.
- `use server` 와 `use client` 가 같은 파일에 동시에 존재할 수 없다. : **서로 다른 파일에서 참조 형식은 가능**

## form submit

- form tag 의 action 속성 값에 양식 제출 함수를 할당

```jsx

function App() {
  async function action(formData) {
    "use server";
    const name = formData.get("name");
  }

  return <form action={action}>
    <input type="text" name="name">
  </form>
}

```

## xss 보안 취약 관련 library

- 입력값의 xss 보안(script, alert 등) 문자로 인한 보안 취약 사양을 위한 패키지
- npm install xss

## 양식 제출 중 상태 관리

- `form` 내부의 **component 에서만 사용 가능**한 `useFormStatus` hook 을 이용한 상태 관리

## 양식 제출 상태 관리

- `useFormState` 를 사용하여 응답을 받아 처리할 수 있다.

## build

- nextJS 는 build 시 동적인 페이지를 제외한 컴포넌트를 미리 컴파일 및 캐쉬 작업을 한다. 따라서 데이터가 변경되는 것을 인지하지 못하고 기존에 캐쉬된 페이지를 재 사용한다.
- `revalidatePath` 함수를 사용하여 새로이 캐쉬할 라우트(URL) 을 적용한다.

## 배포 filesystem

- 개발 단계에서 filesystem 은 정상적으로 동작하지만, 배포 이후에는 동작되지 않는다.
- 개발 단계의 filesystem 을 배포하는 것보다, `AWS S3` 등 을 사용함을 권고한다.

## Metadata

- 페이지 속성에 대한 값을 저장할 수 있다. (타이틀, 설명 및 favicon 등)
- metadata 는 정적 / 동적 으로 지정할 수 있다.
- 최상단 layout 에 있는 metadata 는 하위 layout 에 사용이 된다.
- 해당 layout 에 있는 metadata 가 없을 시 상위 layout 의 metadata 를 사용한다.

```javascript
// 정적 metadata

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

// 동적 metadata
export async function generateMetadata({ params }) {
  return {
    title: "",
  };
}
```
