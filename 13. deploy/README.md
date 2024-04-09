## 배포 단계

1. 코드 최적화

   - 필요없는 코드 삭제
   - LOG 삭제

2. 구성 파일 & 환경 변수 작업

   - nextJS 환경 파일 작업
   - [next.config.js](https://nextjs.org/docs/pages/api-reference/next-config-js)

   ```js
   const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

   module.exports = (phase) => {
     if (phase === PHASE_DEVELOPMENT_SERVER) {
       return {};
     }
     return {};
   };
   ```

3. 테스트 빌드 & 코드 크기 줄이기

   - 용량이 큰 library 간소화

4. 배포

## 배포

1. 전체 배포

   - 표준 배포
   - `next build` 명령어로 실행
   - 동적 라우팅에 있어서 유효성, 동적 생성 옵션이 추가되어야 한다.
   - 동적 페이지 생성, `getServerSideProps` 및 서버 사이드 페이지가 존재하기 때문에 _Node.js_ 서버가 필요
   - NextJS 제작사인 `Vercel` 호스트를 이용한 호스팅이 최적화가 잘 되어있다.

2. 내보내기
   - 정적 내보내기
   - `next export` 명령어로 실행
   - 코드가 변경될 때마다 내보내고 배포를 실행해야 한다.
   - 서버 사이드 코드가 필요 없는 프로젝트인 경우 주로 사용
