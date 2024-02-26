## Page router

#### router 구조

- `/src/page` 폴더 내의 폴더 체계를 route 구조로 따른다.
- URL 의 기본 페이지는 index.js 가 된다.

  > app router 의 page.js 역할
  >
  > `/URL1/URL2/index.js` 와 `/URL1/URL2.js` 는 동일한 router 를 사용하게된다.

- 예약된 파일명이 없고 동적 URL 은 `[].js` 로 동일하다.
- URL 은 파일의 대소문자를 따라간다.

#### 동적 route 세그먼트 추출

- `next/router` 내의 useRouter Hook 사용
- useRouter 의 `query` 사용

```jsx
import { useRouter } from "next/router";

export default function ClientInformation() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Client Information Page.</h1>
    </div>
  );
}
```
