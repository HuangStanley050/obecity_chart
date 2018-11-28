const initialState = {
  percentage: [
    { age: "18-24", percent: 22 },
    { age: "25-34", percent: 33.4 },
    { age: "35-44", percent: 37.4 },
    { age: "45-54", percent: 37.6 },
    { age: "55-64", percent: 38.8 },
    { age: "65-74", percent: 38.9 },
    { age: "75-84", percent: 43.4 },
    { age: "85+", percent: 38.8 }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "male":
      const maleData = [
        { age: "18-24", percent: 26.9 },
        { age: "25-34", percent: 41.9 },
        { age: "35-44", percent: 47.5 },
        { age: "45-54", percent: 46.7 },
        { age: "55-64", percent: 44.5 },
        { age: "65-74", percent: 42.2 },
        { age: "75-84", percent: 44 },
        { age: "85+", percent: 47.3 }
      ];

      return {
        percentage: [...maleData]
      };
    case "female":
      const femaleData = [
        { age: "18-24", percent: 17 },
        { age: "25-34", percent: 25.1 },
        { age: "35-44", percent: 27.6 },
        { age: "45-54", percent: 28.6 },
        { age: "55-64", percent: 33.3 },
        { age: "65-74", percent: 36.1 },
        { age: "75-84", percent: 41.4 },
        { age: "85+", percent: 35 }
      ];
      return {
        percentage: [...femaleData]
      };
    case "total":
      const totalData = [
        { age: "18-24", percent: 22 },
        { age: "25-34", percent: 33.4 },
        { age: "35-44", percent: 37.4 },
        { age: "45-54", percent: 37.6 },
        { age: "55-64", percent: 38.8 },
        { age: "65-74", percent: 38.9 },
        { age: "75-84", percent: 43.4 },
        { age: "85+", percent: 38.8 }
      ];
      return {
        percentage: [...totalData]
      };
    default:
      return state;
  }
};

export default reducer;
