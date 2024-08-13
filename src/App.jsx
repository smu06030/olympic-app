import React from "react";
import Container from "~/components/UI/Container";
import Header from "~/components/Layout/Header";
import InputGroup from "~/components/Layout/InputGroup";
import MedalList from "~/components/Layout/MedalList";
import useCounty from "~/hooks/useCounty";

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
