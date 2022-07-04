import {
  createStyles, Link, makeStyles, Theme,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import ApartmentTile from '../ApartmentTile';
import Logo from '../../assets/svg/logo_with_typo.svg';
import getApartments from '../../utility/api';
import { Apartment } from '../../utility/types';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'block',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
  },
  content: {
    paddingTop: '74px',
    paddingLeft: '32px',
    paddingRight: '32px',
  },
  logo: {
    position: 'absolute',
    display: 'none',
    justifyContent: 'center',
    top: theme.spacing(2),
    margin: 'auto',
    width: '100%',
    '& img': {
      width: '150px',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  adverts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '16px',
  },
}));

const Adverts = () => {
  const classes = useStyles();

  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    const fetchApartments = async () => {
      const result = await getApartments();
      setApartments(result.data);
    };

    fetchApartments();
  }, []);

  return (
    <div className={classes.root}>
      <Navbar />
      <div className={classes.logo}>

        <Link href="/">
          <img src={Logo} alt="nesuto logo" />
        </Link>
      </div>
      <div className={classes.content}>
        <div className={classes.adverts}>
          {
            apartments.map((apartment) => (
              <ApartmentTile key={apartment.id} apartment={apartment.attributes} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Adverts;
