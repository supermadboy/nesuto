import {
  createStyles, Grid, makeStyles, Theme, useMediaQuery,
} from '@material-ui/core';
import React, { ReactNode } from 'react';

const useStyles = makeStyles((theme: Theme) => createStyles({
  landingPage: {
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
  },
  mobile: {
    display: 'none',
  },
  halfHeight: {
    height: '50%',
  },
  fullHeight: {
    height: '100%',
  },
  lightBackground: {
    backgroundColor: theme.palette.primary.light,
  },
  upperLeft: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  nestImage: {
    width: '50%',
    marginTop: theme.spacing(3),
  },
  fullscreenImage: {
    width: '100%',
    minHeight: '100%',
  },
  bottomRight: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

interface GridItemProps {
  halfHeight?: boolean;
  disableMobile?: boolean;
  children?: ReactNode;
  className?: string[],
}

const GridItem: React.FunctionComponent<GridItemProps> = (props: GridItemProps) => {
  const classes = useStyles();
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const {
    halfHeight, children, disableMobile, className,
  } = props;

  return (
    <Grid
      item
      xs={12}
      md={6}
      className={`
        ${halfHeight ? classes.halfHeight : ''}
        ${disableMobile && mobile ? classes.mobile : ''}
        ${className}
      `}
    >
      {children}
    </Grid>
  );
};

GridItem.defaultProps = {
  halfHeight: false,
  disableMobile: false,
  children: null,
  className: [],
};

export default GridItem;
