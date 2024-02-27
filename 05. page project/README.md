## Page Router Project

1. router
   /  
   /events
   /events/[eventId]
   /events/[filter1]/[filter2]

2. dummy data & dummy images
3. event item component
4. event item styling

   - heroicons.com
   - nextJS 13 이전에는 `Link` Component 의 `a` 태그를 스타일링 하고 싶으면 `Link` Component 안에 `a` 태그를 넣어 스타일링을 해야 했다면, 13 이후에는 `Link` 태그에서 스타일링을 할 수 있다.

   ```HTML

   // 13 이전
   <Link href="/">
       <a className="btn">
       Link
       </a>
   </Link>

   // 13 이후
   <Link href="/" className="btn">
       Link
   </Link>

   ```
