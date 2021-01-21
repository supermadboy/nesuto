import {
  createStyles, Grid, makeStyles, Theme, useMediaQuery,
} from '@material-ui/core';
import React, { ReactNode } from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  halfHeight: {
    height: '50%',
  },
  lightBackground: {
    backgroundColor: theme.palette.primary.light,
  },
  mainBackground: {
    backgroundColor: theme.palette.primary.main,
  },
  darkBackground: {
    backgroundColor: theme.palette.primary.dark,
  },
  whiteBackground: {
    backgroundColor: theme.palette.background.default,
  },
  defaultBackground: {
    backgroundColor: 'transparent',
  },
  mobile: {
    display: 'none!important',
  },
}));

/* eslint-disable */
// https://stackoverflow.com/questions/63961803/eslint-says-all-enums-in-typescript-app-are-already-declared-in-the-upper-scope
export enum BackgroundColor {
  light = 'light',
  main = 'main',
  dark = 'dark',
  white = 'white',
}
/* eslint-enable */

interface GridItemProps {
  halfHeight?: boolean;
  fullWidth?: boolean;
  disableMobile?: boolean;
  children?: ReactNode;
  className?: string[],
  backgroundColor?: BackgroundColor,
}

const selectedBackgroundColor = (bgColor: BackgroundColor|undefined, classes: any): string => {
  switch (bgColor) {
    case BackgroundColor.light:
      return classes.lightBackground;
    case BackgroundColor.main:
      return classes.mainBackground;
    case BackgroundColor.dark:
      return classes.darkBackground;
    case BackgroundColor.white:
      return classes.whiteBackground;
    default:
      return classes.defaultBackground;
  }
};

const GridItem: React.FunctionComponent<GridItemProps> = (props: GridItemProps) => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const {
    halfHeight, children, disableMobile, className, fullWidth, backgroundColor,
  } = props;

  return (
    <Grid
      item
      xs={12}
      md={fullWidth ? 12 : 6}
      className={`
        ${halfHeight ? classes.halfHeight : ''}
        ${disableMobile && mobile ? classes.mobile : ''}
        ${className?.map((c) => ` ${c} `)}
        ${selectedBackgroundColor(backgroundColor, classes)}
      `}
    >
      {children}
    </Grid>
  );
};

GridItem.defaultProps = {
  halfHeight: false,
  disableMobile: false,
  fullWidth: false,
  children: null,
  className: [],
  backgroundColor: undefined,
};

export default GridItem;
