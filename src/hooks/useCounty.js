import React, { useState } from 'react'

const INITIAL_VALUE = {
  country: "",
  gold: 0,
  silver: 0,
  bronze: 0,
};

const INITIAL_VALUE_LIST = JSON.parse(localStorage.getItem('medalList')) || [];

const useCounty = () => {
  const [medalList, setMedalList] = useState(INITIAL_VALUE_LIST);
  const [inputValue, setInputValue] = useState(INITIAL_VALUE);

  // 상태 초기화
  const resetState = () => {
    setInputValue(INITIAL_VALUE);
  };

  // 로컬 스토리지 상태 저장
  const setStorage = (updateList) => {
    localStorage.setItem("medalList", JSON.stringify(updateList));
  };

  // 해당 국가가 있는지 찾는 메서드
  const findCountryList = (country) => {
    const existsCountryIndex = medalList.findIndex(
      (medal) => medal.country === country
    );

    return {
      index: existsCountryIndex,
      item: medalList[existsCountryIndex],
    };
  };

  // 국가 추가
  const addCountry = (e) => {
    e.preventDefault();
    if (!inputValue.country) return;

    const { item: existCountryItem } = findCountryList(inputValue.country);

    if (existCountryItem) return alert("이미 등록된 국가입니다.");

    const addId = {
      ...inputValue,
      id: new Date().getTime(),
    };

    setMedalList((prev) => {
      const updateList = [...prev, addId];
      setStorage(updateList);
      return updateList;
    });

    resetState();
  };

  // 국가 업데이트
  const updateCountry = (e) => {
    e.preventDefault();
    if (!inputValue.country) return;

    const { item: existCountryItem, index: existsCountryIndex } = findCountryList(inputValue.country);

    if (!existCountryItem) return alert("등록되지 않은 국가입니다.");

    const existCountry = {
      ...existCountryItem,
      ...inputValue,
    };

    let updateCountry = [...medalList];
    updateCountry[existsCountryIndex] = existCountry;

    setStorage(updateCountry);
    setMedalList(updateCountry);

    resetState();
  };

  // 국가 삭제
  const deleteCountry = (id) => {
    const deleteCty = medalList.filter((medal) => medal.id !== id);
    localStorage.setItem("medalList", JSON.stringify(deleteCty));
    setMedalList(deleteCty);
  };

  // 상태 업데이트
  const onChangeHandler = (id, value) => {
    setInputValue((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return {
    medalList,
    inputValue,
    addCountry,
    updateCountry,
    deleteCountry,
    onChangeHandler,
  }
}

export default useCounty