## Submit 이슈
1. submit이란?
  HTML <form>태그는 버튼을 클릭하거나 엔터를 누르면 자동으로 서버로 요청을 전송함

```html
<form action=/login method="get">
  <input>
  <button>로그인</button>
</form>
```

-> 버튼 클릭 시 브라우저가 action="/login" 주소로 데이터를 보낸다.
-> front는 3000 -> back-end는 8000 가능
-> 페이지가 새로고침 되거나 이동 됨

2. submit 이슈란?
- 버튼을 눌렀을 시 화면이 새로고침 되거나 페이지가 사라진다???

  <예시상황>
    1) form태그안에 버튼이 있을 때 -> submit발생함 -> 리액트 리렌더링발생으로 문제가 됨
    2) JS로 입력값을 처리하려는 데 submit이 먼저 일어나서 값이 사라진다??
    3) ajax로 요청을 보내는 데 submit이 발동해서 페이지 전체가 reload됨(SPA(싱글페이지어플리케이션)).
    4) React/Vue에서 form을 쓰면 이벤트가 적용되지 않고 새로고침이 됨
    5) 화면이 SPA인데 갑자기 SSR(서버사이드렌더링 3000->8000)처럼 이동 되어 버림

  <사례>
    1) 버튼을 눌렀을 때 페이지가 새로고침 됨
    2) jS에서 이벤트 발동하기 전에 submit되어 버렸다?
    3) AJAX로 처리하는 데 새로고침이 발동
    4) 리액트에서 form이 들어가면 새로고침 됨 - form태그 쓰지마

  <해결방법>
    1) form의 기본 submit동작을 막는다 -> e.preventDefault()
    2) submit이 아니라 button오르 바꾼다
    ```html
    <button type="button" onclick=login()>
    ```
    3) form태그를 사용하지 않는 방식(SPA)
       - 태그를 커스텀하게 사용할 수 있음.
       - 개발자가 태그를 만들어 쓴다.
       - 리액트에서 태그는 함수이다.
    ```jsx
    <Login />
    function Login(){
      function onSubmit(e){
        e.preventDefault()
      }
      return (
        <form onSubmit={onSubmit}>
          <button type="submit">로그인</button>
         </form> 
      )
    }
    ```