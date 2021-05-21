import { makeStyles } from '@material-ui/core';

export const useAppStyles = makeStyles((theme) => ({
  Button: {
    margin: theme.spacing(0, 1, 2, 1),
  },
  DeleteButton: {
    position: 'absolute',
    right: 10,
    top: 4,
  },
  Item: {
    margin: theme.spacing(2),
    position: 'relative',
  },
  Paper: {
    justifyContent: 'center',
    margin: `${theme.spacing(2)}px auto`,
    width: theme.spacing(50),
  },
  PaperAll: {
    margin: '20px auto',
    textAlign: 'left',
    width: theme.spacing(50),
  },
}));
