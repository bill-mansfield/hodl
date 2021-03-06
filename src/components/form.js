import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Form() {
  const classes = useStyles();
  const [coin, setCoin] = React.useState('');

  const handleChange = (event) => {
    setCoin(event.target.value);
  };

return (
    <>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Coin</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={coin}
                onChange={handleChange}
            >
                <MenuItem value={'BTC'}>BTC</MenuItem>
                <MenuItem value={'ETH'}>ETH</MenuItem>
                <MenuItem value={'XRP'}>XRP</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
        </FormControl>
    </>
    );
}