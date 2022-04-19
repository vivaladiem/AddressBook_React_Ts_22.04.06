import "../src/css/base/main.css"; // 단위를 rem으로 쓰기 위한 베이스 css setting.

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}