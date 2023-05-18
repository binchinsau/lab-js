"use strict";

fetch("https://disease.sh/v3/covid-19/nyt/usa")
  .then(function (response) {
    return response.json();
  })
  .then(function plotData(data) {
    //All time
    let keys = data.map(a => a.date);
    let cases = data.map(a => a.cases);

    cases.unshift("Lây Nhiễm");
    keys.unshift();

    bb.generate({
      bindto: "#covid-all-us-cases",
      data: {
        type: "line",
        columns: [cases],
      },
      axis: {
        x: {
          type: "category",
          //Hiện thời gian lên biểu đồ
          categories: keys,
          tick: {
            count: 10,
          },
          padding: {
            left: 99,
            right: 99,
          },
        },
      },
    });
    // 2022
    //Sẽ trả về một chuỗi con bao gồm 4 ký tự đầu tiên (yyyy/m/d) của thuộc tính date
    let filterData = data.filter(item => item.date.slice(0, 4) === "2022");
    let keys_2022 = filterData.map(item => item.date);
    let cases_2022 = filterData.map(item => item.cases);
    console.log(filterData);
    bb.generate({
      bindto: "#covid-all-us-2022",
      data: {
        x: "Thời Gian",
        type: "line",
        columns: [
          ["Thời Gian", ...keys_2022],
          ["Lây Nhiễm", ...cases_2022],
        ],
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            count: 11,
            format: "%d/%m/%y",
          },
          padding: {
            left: 999999999,
            right: 999999999,
          },
        },
      },
    });
    // Weekly
    // Kiểm tra ngày trong d.date có phải là đầu tuần không
    let filteredData = data.filter(d => new Date(d.date).getDay() === 2);
    let keys_weekly = filteredData.map(item => item.date);
    let cases_weekly = filteredData.map(item => item.cases);
    console.log(filteredData);
    bb.generate({
      bindto: "#covid-all-us-weekly",
      data: {
        x: "Thời Gian",
        type: "line",
        columns: [
          ["Thời Gian", ...keys_weekly],
          ["Lây Nhiễm", ...cases_weekly],
        ],
      },
      axis: {
        x: {
          type: "timeseries",
          tick: {
            format: "%d/%m/%Y",
            count: 11,
          },
          // padding: {
          //   left: 999999,
          //   right: 999999,
          // },
        },
      },
    });
  })
  .catch(function (err) {
    console.log(err);
  });
