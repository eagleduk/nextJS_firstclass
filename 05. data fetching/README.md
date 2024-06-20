## Loading 풀백

- NextJS 의 컴포넌트는 `"use client"` 문구가 추가되지 않는 이상 기본적으로 서버 component 로 동작하게 된다.
- 서버 component 의 랜더링에 시간이 지연될 수록 같은 폴더 또는 상위 폴더의 `loading.js` component 를 자동적으로 랜더링 하게 되어 있다.

## suspense

- React 기본 component
- `loading` 풀백은 해당 component 가 지연 로딩 될때 동작
- `Suspense` 는 자식의 component 가 지연 로딩 될때 동작
