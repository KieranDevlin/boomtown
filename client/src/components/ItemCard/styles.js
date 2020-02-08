const styles = theme => ({
  card: {
    height: 475
  },
  innerCard: {
    height: '60%',
    boxSizing: 'border-box',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  media: {
    padding: 0,
    height: '40%'
  },
  content: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: '50%'
  },
  itemInfoContainer: {
    display: 'flex',
    alignContent: 'center'
  },
  customGravatar: {
    borderRadius: '50%',
    marginRight: 20
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonContainer: {
    padding: 0
  },
  tags: {
    marginRight: 8
  }
});

export default styles;
