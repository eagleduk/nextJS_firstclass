## 병렬 라우트

- app route 폴더 명에 `@`기호를 추가한다.
- layout 의 기본 component 에서 병렬 라우트와 같은 이름의 props를 추출하여 component를 출력한다.
- 단, 병렬 라우터의 하위 라우터를 가지려면 동일 이름의 하위 라우터를 모든 병렬 라우터에 추가해 주어야 한다.
- 하위 라우터에 변경 내용이 없다면 `default.js` 파일을 이용하여 항상 같은 component를 출력할 수 있다.

## Catch-All

- page router 의 중첩된 동적 route와 비슷한 개념
- 단지 폴더를 2중중첩 대괄호 `[[...id]]` 형식으로 사용한다.
- 다수의 param 값을 배열로 받을 수 있다.

## Throw Error

- `error.js` 로 해당 라우트에 작성 가능
- 상위 `error.js`는 하위 라우트에서 사용 가능
- `error.js` component는 **_클라이언트_**에서 동작함으로 `"use client"` 사용.
- `not-found` 와 다르게 Error를 던저줌으로써 불러온다.

## 클라이언트 VS 서버 Component

- NextJS의 component는 기본적으로 서버 사이드로 구현된다.
- Client 함수를 수행(React-Hook 등)할 때에는 `"use client"`를 사용하여 클라이언트 component로 구성해야 한다.
- Client component를 구성해야 할 때에는 최소한의 component로만 구성할 수 있도록 한다.

## 인터셉터 라우팅

- 페이지에 도달하는 과정에 따라 다른 페이지를 보여주는것
- `(가로채고자 하는 route 상대경로)가로채고자 하는 route path` 식으로 구성
- 폴더 구성이 아니라 url 구성을 따라간다. 따라서 병렬 라우트는 상위 라우트로 생각하지 않는다.

## 라우팅 그룹

- `(라우팅 그룹 명)`폴더로 라우팅 그룹 설정
- 라우팅 그룹 마다 다른 레이아웃, not-found 페이지 등을 설정할 수 있다.
- 단 라우팅 그룹 상위의 레이아웃, not-found 페이지는 사용할 수 없고 각자 그룹에 설정해 두어야 한다.

## 라우트 API 핸들러

- app 폴더 하위에 `api` 라는 폴더내에 구성하는 것이 일반적
- `route.js` 라는 API 핸들러가 존재해야 API 로서 사용이 가능하다.

## 미들웨어

- 들어요는 요청에 대항 검사 및 분석을 할 수 있다.
- 프로젝트의 `ROOT` 폴더에 `middleware.js`로 위치
- 미들웨어가 거치는 요청을 필터할 수 있다.
