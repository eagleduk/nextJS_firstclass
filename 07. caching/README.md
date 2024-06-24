## Git caching

```shell
git rm -r --cached [파일명 또는 경로]
```

- 이미 올라간 파일을 캐쉬에서 삭제

## Request Memoization

- 동일한 설정을 가진 데이터 요청을 저장하여 중복 요청 방지
- 요청이 정확히 같은 구성을 가질 때, NextJS는 불필요한 요청을 피하고 하나의 요청만 보내고 애플리케이션의 모든 부분에서 재사용한다.
- 같은 페이지 내의 다른 Component 에서 같은 데이터 요청 시, 중복 요청이 될 시, `.next` 폴더 삭제 후 재 요청
- 페이지에서 데이터 요청 이후 다른 페이지에서 같은 데이터 요청 시, 중복 요청 방지(LOG 한번 출력)

## Data Cache

- 데이터 소스에서 변경되지 않은 경우 데이터를 저장하고 재사용
- 데이터가 변경되지 않는 한 요청 자체를 완전 회피

1. 프로그램 방식 제어

   ```javascript
   import { revalidatePath } from "next/cache";

   export default function App() {
     function buttonClick() {
       revalidatePath("/");
     }

     return <button onClick={buttonClick}>Click</button>;
   }
   ```

   ```javascript
   import { revalidateTag } from "next/cache";

   export default function App() {
     function buttonClick() {
       revalidateTag("msg");
     }

     return <button onClick={buttonClick}>Click</button>;
   }


   export default async function msg() {
     const response = await fetch("/api", {
       next: {
         tags: ["msg"],
       },
     });
     const messages = await response.json();

     if (!messages || messages.length === 0) {
       return <p>No messages found</p>;
     }

     return <Messages messages={messages} />;
   }
   ```

2. 시간 설정

   ```javascript
   export default async function App() {
     const response = await fetch("/api", {
       next: {
         revalidate: 5,
       },
     });
     const messages = await response.json();

     if (!messages || messages.length === 0) {
       return <p>No messages found</p>;
     }

     return <Messages messages={messages} />;
   }
   ```

   ```javascript
   export const revalidate = 5;

   export default async function App() {
     const response = await fetch("/api");
     const messages = await response.json();

     if (!messages || messages.length === 0) {
       return <p>No messages found</p>;
     }

     return <Messages messages={messages} />;
   }
   ```

3. 캐시 설정

   ```javascript
   export default async function App() {
     const response = await fetch("/api", {
       cache: "no-store" | "force-cache", // 항상 다시 | 캐싱 강제
     });
     const messages = await response.json();

     if (!messages || messages.length === 0) {
       return <p>No messages found</p>;
     }

     return <Messages messages={messages} />;
   }
   ```

   ```javascript
   export const dynamic = "force-dynamic" | "force-static"; // 항상 다시 | 캐싱 강제

   export default async function App() {
     const response = await fetch("/api");
     const messages = await response.json();

     if (!messages || messages.length === 0) {
       return <p>No messages found</p>;
     }

     return <Messages messages={messages} />;
   }
   ```

4. Module 설정

   - 캐시 설정 방식보다 권장

   ```javascript
   import { unstable_noStore, unstable_cache } from "next/cache"; // 항상 다시 | 캐싱 강제

   import Messages from "@/components/messages";

   export default async function MessagesPage() {
     unstable_noStore();
     unstable_cache();
     const response = await fetch("http://localhost:8080/messages");
     const messages = await response.json();

     if (!messages || messages.length === 0) {
       return <p>No messages found</p>;
     }

     return <Messages messages={messages} />;
   }
   ```
