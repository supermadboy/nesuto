import React, { useMemo, forwardRef } from 'react';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

interface ListItemLinkProps {
    /* eslint-disable react/require-default-props */
    icon?: React.ReactElement;
    primary: string;
    to: string;
  }

const ListItemLink = (props: ListItemLinkProps) => {
  const { icon, primary, to } = props;

  const renderLink = useMemo(
    () => forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
      /* eslint-disable react/jsx-props-no-spreading */
      <RouterLink to={to} ref={ref} {...itemProps} />
    )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default ListItemLink;
