## 최적화

#### metadata

- nextJS 의 `Head` Component 내부에 추가
- 어느 위치에 삽입하던 NextJS 에서 `<head>` 태그 내부로 위치시켜 준다.
- 어느 위치, Component 에 삽입하던 NextJS 가 위치시켜 주기 때문에, 동적으로 생성하기가 쉽다.
- `_app.js` Component 는 모든 화면의 부모가 되는 Component 이기 때문에, 모든 페이지에서 적용하고자 하는 metadata 를 추가할 수 있다.

#### \_document.js

- page 폴더 하위에 위치 (`_app.js` 와 동일 위치)
- React 프로젝트의 `index.html` 역할과 비슷
- 함수형 또는 클래스형 Component 동시 지원

```JSX

// 함수형 _document.js

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// 클래스형 _document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class NextDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

```
