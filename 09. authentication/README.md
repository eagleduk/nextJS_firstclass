## Lucia

```shell
npm install lucia @lucia-auth/adapter-sqlite
```

> [!NOTE]
>
> session 생성 이 후 바로 `redirect` 함수를 실행하면 _Error: NEXT_REDIRECT_ 에러 발생, try/catch 종료 이후로 이동하니 에러 해결
