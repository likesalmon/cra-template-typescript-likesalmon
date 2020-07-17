import { createMuiTheme } from "@material-ui/core/styles";

export enum Colors {
  violet = "#685EEE",
}

// material-ui theme
export const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: `${Colors.violet}`,
    },
  },
});
