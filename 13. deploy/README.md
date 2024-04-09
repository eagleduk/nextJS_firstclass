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
