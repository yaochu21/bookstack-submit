import { createSlice } from "@reduxjs/toolkit";

export const pageDataSlice = createSlice({
  name: "pageData",
  initialState: {
    url: "",
    data: {
      text: "",
      title: "",
      author: [""],
      date: "",
      area: "",
      rtype: [""],
      tags: [""],
      imgs: [
        {
          url: "https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d",
          valid: true,
          id: 0,
          order: 0
        },
        {
          url: "https://i.natgeofe.com/n/f0dccaca-174b-48a5-b944-9bcddf913645/01-cat-questions-nationalgeographic_1228126_square.jpg",
          valid: true,
          id: 1,
          order: 0
        },
        {
          url: "https://freshpet.com/wp-content/uploads/2019/09/house-cat-281511_640.jpg",
          valid: true,
          id: 2,
          order: 0
        },
        {
          url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Gdp_per_capita_of_the_administrative_division_in_China.png",
          valid: true,
          id: 3,
          order: 0
        },
      ],
      segments: [    {
        "string": "<p>多年以后，面对行刑队，奥雷里亚诺·布恩迪亚上校将会回想起父亲带他去见识冰块的那个遥远的下午。</p>",
        "s": 304,
        "e": 316,
        "tag": "p",
        "type": "BODY",
        "order": 0,
      },
      {
        "string": "<p>那时的马孔多是一个二十户人家的村落，泥巴和芦苇盖成的屋子沿河岸排开，湍急的河水清澈见底，河床里卵石洁白光滑宛如史前巨蛋。世界新生伊始，许多事物还没有名字，提到的时候尚需用手指指点点。</p>",
        "s": 321,
        "e": 341,
        "tag": "p",
        "type": "BODY",
        "order": 100,
      },
      {
        "string": "<p>每年三月前后，一家衣衫褴褛的吉卜赛人都会来到村边扎下帐篷，击鼓鸣笛，在喧闹欢腾中介绍新近的发明。最初他们带来了磁石。一个身形肥大的吉卜赛人，胡须蓬乱，手如雀爪，自称梅尔基亚德斯，当众进行了一场可惊可怖的展示，号称是出自马其顿诸位炼金大师之手的第八大奇迹。</p>",
        "s": 346,
        "e": 359,
        "tag": "p",
        "type": "BODY",
        "order": 200,
      }],
      "book_id": 26
    },
  },
  reducers: {
    setURL: (state, action) => {
      state.url = action.payload;
    },
    setPage: (state, action) => {
      state.data = action.payload;
    },
    clear: (state) => {
      state.data = {
        text: "",
        title: "",
        author: [""],
        date: "",
        area: "",
        rtype: [""],
        tags: [""],
        subtitles: [""],
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setURL, setPage, clear } = pageDataSlice.actions;

export default pageDataSlice.reducer;
