## API

#### API 작성

- page 내의 api 폴더 하위에 위치
- NextJS 에 의하여 `api` 내의 js 파일을 페이지 라우터로 인식하지 않고 api 라우터로 인식한다.
- Client 에 노출되지 않는 API 를 작성할 수 있다.
- API 라우터는 PAGE(APP) 라우터와 동일한 방식의 파일 구조로 동작하게 된다.

```javascript
//  FILE: /api/index.js
//  URL: /api/index

function api(req, res) {
  if (req.method === "GET") {
  } else if (req.method === "POST") {
  }
}

export default api;
```

#### 사전 페이지 랜더링

#### 동적 API 라우터

> [prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
