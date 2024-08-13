import React, { useEffect, useState } from "react";
import Button from "~/components/UI/Button";
import classes from "~/css/MedalList.module.css";

const MedalList = ({medalList, deleteCountry}) => {
  const emptyCountry = <h2>아직 추가된 국가가 없습니다. 국가를 추적하세요!</h2>;

  const showMedalList = medalList
    .sort((a, b) => b.gold - a.gold)
    .map((medal) => (
      <tr key={medal.id}>
        <td>{medal.country}</td>
        <td>{medal.gold}</td>
        <td>{medal.silver}</td>
        <td>{medal.bronze}</td>
        <td>
          <Button type="remove" onClick={() => deleteCountry(medal.id)}>
            삭제
          </Button>
        </td>
      </tr>
    ));

  return (
    <div>
      {medalList.length === 0 ? (
        emptyCountry
      ) : (
        <table className={classes.table}>
          <thead>
            <tr>
              <td>국가명</td>
              <td>금메달</td>
              <td>은메달</td>
              <td>동메달</td>
              <td>액션</td>
            </tr>
          </thead>
          <tbody>{showMedalList}</tbody>
        </table>
      )}
    </div>
  );
};

export default MedalList;
