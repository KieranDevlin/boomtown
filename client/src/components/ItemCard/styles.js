const styles = theme => ({
  card: {
    minWidth: 345,
    height: 500,
    maxWidth: 350
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between'
  },
  innerCard: {
    height: '60%',
    boxSizing: 'border-box',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  actionArea: {
    maxHeight: '85%',
    overflow: 'hidden'
  },
  media: {
    padding: 0,
    height: '40%'
  },
  user: {
    padding: 0,
    height: 80,
    width: 80
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
  cardButton: {
    width: 50,
    padding: 8,
    height: '100%'
  }
});

export default styles;
