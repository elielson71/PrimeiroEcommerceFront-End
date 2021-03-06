import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      maxWidth:'900px',
        paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: 15,
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    formControl: {
      margin: theme.spacing(1),
      width: 100,
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    botoes: {
      margin: 15
    },
    table: {
      minWidth: 650,
    },
    tablehead: {
      backgroundColor: 'darkgrey',
      }
  }));