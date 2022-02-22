import { Button, Card } from '@mui/material'
import React from 'react'

interface PCComponentProps {
    title: string;
    image: string;
}

function PCComponent(props: PCComponentProps) {
    return <Card style={{textAlign: 'center', height: '100%'}} sx={{p: 2}}>
       <h5>{props.title}</h5>
       <img src={props.image} style={{height: 135}}/>

       <Button variant="outlined">
           Selecionar
       </Button>
    </Card>
}

export default PCComponent