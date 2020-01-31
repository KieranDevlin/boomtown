import { createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  card: {
    width: 345,
    height: 500,
    maxWidth: 350,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  innerCard: {
    boxSizing: 'border-box',
    padding: 10
  },
  media: {
    padding: 0,
    height: 200
  },
  user: {
    padding: 0,
    height: 100,
    width: 100
    // backgroundColor: 'green'
  },
  content: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: 150
  }
});

export default styles;
