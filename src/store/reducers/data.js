const initialState = {
  percentage: [
    { "18-24": 22 },
    { "25-34": 33.4 },
    { "35-44": 37.4 },
    { "45-54": 37.6 },
    { "55-64": 38.8 },
    { "65-74": 38.9 },
    { "75-84": 43.4 },
    { "85+": 38.8 }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "male":
      const maleData = [
        { "18-24": 26.9 },
        { "25-34": 41.9 },
        { "35-44": 47.5 },
        { "45-54": 46.7 },
        { "55-64": 44.5 },
        { "65-74": 42.2 },
        { "75-84": 44 },
        { "85+": 47.3 }
      ];

      return {
        percentage: [...maleData]
      };
    case "female":
      const femaleData = [
        { "18-24": 17 },
        { "25-34": 25.1 },
        { "35-44": 27.6 },
        { "45-54": 28.6 },
        { "55-64": 33.3 },
        { "65-74": 36.1 },
        { "75-84": 41.4 },
        { "85+": 35 }
      ];
      return {
        percentage: [...femaleData]
      };
    case "total":
      const totalData = [
        { "18-24": 22 },
        { "25-34": 33.4 },
        { "35-44": 37.4 },
        { "45-54": 37.6 },
        { "55-64": 38.8 },
        { "65-74": 38.9 },
        { "75-84": 43.4 },
        { "85+": 38.8 }
      ];
      return {
        percentage: [...totalData]
      };
    default:
      return state;
  }
};

export default reducer;
