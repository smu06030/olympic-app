# 🏅올림픽 메달 트래커

## 개인 과제 소개
react를 이용한 올림픽 메달 트래커입니다.

## 실행 방법
```bash
# default.
yarn create vite olympic-app --template reate

# start.
cd olymic-app
yarn
yarn dev
```

## 🗂️ 파일 구조
📦src <br />
 ┣ 📂assets <br />
 ┃ ┗ 📜react.svg <br />
 ┣ 📂components <br />
 ┃ ┣ 📂Layout <br />
 ┃ ┃ ┣ 📜Header.jsx <br />
 ┃ ┃ ┣ 📜InputField.jsx <br />
 ┃ ┃ ┣ 📜InputGroup.jsx <br />
 ┃ ┃ ┗ 📜MedalList.jsx <br />
 ┃ ┗ 📂UI <br />
 ┃ ┃ ┣ 📜Button.jsx <br />
 ┃ ┃ ┣ 📜Container.jsx <br />
 ┃ ┃ ┗ 📜Input.jsx <br />
 ┣ 📂css <br />
 ┃ ┣ 📜Button.module.css <br />
 ┃ ┣ 📜Container.module.css <br />
 ┃ ┣ 📜Header.module.css <br />
 ┃ ┣ 📜Input.module.css <br />
 ┃ ┣ 📜InputField.module.css <br />
 ┃ ┣ 📜InputGroup.module.css <br />
 ┃ ┗ 📜MedalList.module.css <br />
 ┣ 📂hooks <br />
 ┃ ┗ 📜useCounty.js <br />
 ┣ 📜App.css <br />
 ┣ 📜App.jsx <br />
 ┣ 📜index.css <br />
 ┗ 📜main.jsx <br />
 <br />

 # 📌 요구 사항

## 필수 구현 사항
- ✅ 나라 이름, 메달 수 입력 후 `추가하기` 버튼 클릭 시 메달 집계에 새로운 나라가 추가되고, input 필드는 다시 빈 값으로 바꾸기
- ✅ 업데이트 기능 구현
- ✅ 금메달 수 기준 내림차순 정렬
- ✅ Layout 최대 넓이 `1200px`, 최소 넓이 `800px`, 가운데 정렬
- ✅ 반복되는 컴포넌트 분리

## 도전 과제
- ✅ 이미 등록된 국가 `alert` 메세지
- ✅ 등록 되지 않은 국가 `alert` 메시지
- ✅ localstorage에 메달 정보 저장
 <br />

# 🛠️ 사용 기술
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"></img>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="javascript"></img>
<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="html"></img>
<img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" alt="css"></img>
<br /><br />

# 💡 주요 기능

## 메달 집계 CRUD
`Create`: 새로운 나라, 획득한 메달 수 추가 <br />
`Read`:  나라별 메달 집계 리스트 <br />
`Update`: 기존 나라 메달 수 수정 <br /> 
`Delete`: 나라 정보 삭제 <br />

## 정렬
금메달 수 기준 `내림차순` 정렬
<br /><br />

# ❓ Why
### **JSX 문법**이란 무엇일까요?
javscript 확장 문법으로 js코드 내에서 html을 작성하듯이 쓰기 때문에 가독성이 좋습니다.
```js
return (
  <div>
    <div>
      abcdefg
    </div>
  </div>
);
```
<br />

### 사용자가 입력하는 값, 또는 이미 입력된 값, 메달 정보와 같은 **애플리케이션의 상태를 관리하기(추가, 변경, 삭제) 위해 리액트의 어떤 기능을 사용하셨나요**?
useState 리액트 훅을 사용해 메달 데이터 상태를 관리했습니다.
```js
const [medalList, setMedalList] = useState([]);
```
<br />

### 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?
커스텀 훅에서 반환한 값을 props를 사용해 부모 컴포넌트에서 자식 컴포넌트로(단방향) 데이터를 내려주었습니다.
```js
const App = () => {
  const {
    inputValue,
    medalList,
    addCountry,
    updateCountry,
    deleteCountry,
    onChangeHandler,
  } = useCounty();

  return (
    <Container>
      <Header />
      <InputGroup
        inputValue={inputValue}
        addCountry={addCountry}
        updateCountry={updateCountry}
        onChangeHandler={onChangeHandler}
      />
      <MedalList medalList={medalList} deleteCountry={deleteCountry} />
    </Container>
  );
};

export default App;
```
<br />

### 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.
메달 리스트 상태를 업데이트 할 때 기존 배열에 변경하면 react에서 상태 변화를 감지하지 못하기 때문에 새로운 배열로 return 하는 방식으로 코드를 작성했습니다.
```js
setMedalList((prev) => {
  const updateList = [...prev, addId];
  setStorage(updateList);
  return updateList;
});
```
<br />

### 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**
container, button, input이 반복될 수 있다는 점에서 컴포넌트를 분리시켰습니다. 컴포넌트를 재사용할 수 있다는 이점이 있습니다.
```bash
📂UI
 ┃ ┣ 📜Button.jsx
 ┃ ┣ 📜Container.jsx
 ┃ ┗ 📜Input.jsx
```
<br />