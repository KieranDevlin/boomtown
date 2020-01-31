// import { createStyles } from '@material-ui/core/styles';

// const styles = createStyles({
const styles = theme => ({
  nav: {
    backgroundColor: theme.palette.primary.main,
    height: 75,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  }
});

export default styles;
