## Authentication

- firebase 를 사용하기 위해 Email -> Id 로 변경

#### [bcryptjs](https://github.com/dcodeIO/bcrypt.js)

> npm i bcryptjs

#### [next-auth](https://next-auth.js.org/)

> npm i next-auth

- `/api/auth/[...nextauth]` 로 약속된 api 주소를 사용해야 한다.
- 강의 내용은 `v3` 개발 예제는 `v4` 로 개발
- `v4` 변경점

  1. 'AuthOptions' 이라는 속성 필요 -> 서버 사이드에서 사용되는 `getServerSession` 을 사용하기 위한 속성이다.
  2. 'AuthOptions' 내부에 secret 속성 필요 -> 암호화 키에 필요한듯

     - 참조: https://next-auth.js.org/errors#jwt_session_error

     ```bash

     $ openssl rand -base64 32

     ```

  3. 'AuthOptions' 에 callback : session 함수 추가 이후 `session` 형태 결정 가능
