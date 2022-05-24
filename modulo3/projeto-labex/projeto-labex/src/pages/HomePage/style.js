    import styled from "styled-components";
    import { Button } from "@material-ui/core";
    import { makeStyles } from '@material-ui/core/styles';

    export const HomeContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #E9645D90;
        /* box-shadow: 2px 3px 2px  darkgray; */
        border-radius: 1.25em;
        width: 31.25em;
        height: 45%;
        h1{
            font-size: 50px;
            align-self: center;
            color: #FFFDDF;
        }

    `
    export const ButtonContainer = styled.div`
        display: flex;
        justify-content:space-evenly;
        margin: 30px;
    `
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        btn: {
            background: 'linear-gradient(45deg, #822B3C 30%, #AE515E 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255,254, 209, .3)',
            color: '#FFFDDF',
            height: 48,
            padding: '0 30px',
          },
      }));
    export function HomeButton(props) {
        const classes = useStyles();
        return (
            <ButtonContainer className={classes.root}>
                <Button className={classes.btn} onClick={()=>props.goToA(props.nav)} variant="contained" color="primary">Ver Viagens</Button>
                <Button className={classes.btn} onClick={()=>props.goToB(props.nav)} variant="contained" color="primary">Área de Admin</Button>
            </ButtonContainer>

        )
    }