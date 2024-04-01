## API

#### API 작성

- page 내의 api 폴더 하위에 위치
- NextJS 에 의하여 `api` 내의 js 파일을 페이지 라우터로 인식하지 않고 api 라우터로 인식한다.
- Client 에 노출되지 않는 API 를 작성할 수 있다.

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
