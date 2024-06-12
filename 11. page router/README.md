## Page router

#### router 구조

- `/src/page` 폴더 내의 폴더 체계를 route 구조로 따른다.
- URL 의 기본 페이지는 index.js 가 된다.

  > app router 의 page.js 역할
  >
  > `/URL1/URL2/index.js` 와 `/URL1/URL2.js` 는 동일한 router 를 사용하게된다.

- <del>예약된 파일명이 없고</del> 동적 URL 은 `[].js` 로 동일하다.
- URL 은 파일의 대소문자를 따라간다.

#### 동적 route 세그먼트 추출

- `next/router` 내의 useRouter Hook 사용
- useRouter 의 `query` 사용

```jsx
// /test
// page/[id].js

import { useRouter } from "next/router";

export default function ClientInformation() {
  const router = useRouter();
  console.log(router.query); // { id: "test" }
  return (
    <div>
      <h1>Client Information Page.</h1>
    </div>
  );
}
```

#### 중첩된 동적 route

- `[route1]/[route2]` 구조의 URL
- `[...ids]` javascript 의 spread syntax 와 비슷하게 배열로 전환
- 다수의 동적 세그먼트(query) 의 값을 추출

```jsx
// /id1/id2/id4
// page/[...ids]/index.js

import { useRouter } from "next/router";

export default function ClientInformation() {
  const router = useRouter();
  console.log(router.query); // { ids: ["id1", "id2", "id4"] }
  return (
    <div>
      <h1>Client Information Page.</h1>
    </div>
  );
}
```

#### Link

- `app router` 와 동일한 **Link** Component 사용
- href 속성을 문자열이 아닌 객체로도 전송 가능
  > page router 의 폴더 체계와 같은 pathname 이용,
  >
  > useRouter hook 의 query 와 같은 형태의 객체 사용

```jsx
// /
// index.js
import Link from "next/link";

export default function ClientInformation() {
  return (
    <div>
      <h1>Client Information Page.</h1>
      <Link
        href={{
          pathname: "/client/[id]",
          query: {
            id: "id1",
          },
        }}
      >
        client 1
      </Link>
    </div>
  );
}

// /client/id1
// page/client/[id].js
import { useRouter } from "next/router";

export default function ProjectDetails() {
  const datas = useRouter();
  console.log(datas.query); // { id: "id1" }
  return (
    <div>
      <h1>The Project Details</h1>
    </div>
  );
}

```

#### Programing Navigate

- 이벤트로 인하여 페이지를 이동하는 경우
- `useRouter` 의 **push** 메소드를 사용한다.
- Link Component 의 href 속성처럼 문자열 또는 객체를 사용한다.

```jsx
import { useRouter } from "next/router";

export default function ProjectMainPage() {
  const router = useRouter();
  function handleProjectStringLinkButton() {
    router.push("/project/2024/12");
  }
  function handleProjectObjectLinkButton() {
    router.push({
      pathname: "/project/[...slug]",
      query: { slug: ["2024", "12"] },
    });
  }
  return (
    <div>
      <h1>Project Main Page</h1>
      <button onClick={handleProjectStringLinkButton}>Go to Project</button>
      <button onClick={handleProjectObjectLinkButton}>Go to Project</button>
    </div>
  );
}
```

#### custom 404

- `page` 폴더 하위에 **404.js** 파일을 생성
- 서비스에 존재하지 않는 URL(not-found) 에러 발생시 `404.js` 파일을 랜더링한다.
