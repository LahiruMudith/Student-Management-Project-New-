import {Button, Card, TextField} from "@mui/material";

export default function AddStudentPage() {
    return (
        <>
            <Card sx={{width:'35vw', boxShadow:8, borderRadius:'10px', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 'auto', marginTop:'19vh'}}>
                <TextField
                    sx={{margin:'2vh', width:'33vw'}}
                    required
                    label="Name" variant="outlined"
                />
                <TextField
                    sx={{margin:'2vh',marginTop:'-0.5vh', width:'33vw'}}
                    required
                    label="Age" variant="outlined"
                />
                <TextField
                    sx={{margin:'2vh',marginTop:'-0.5vh', width:'33vw'}}
                    required
                    label="Address" variant="outlined"
                />
                <TextField
                    sx={{margin:'2vh',marginTop:'-0.5vh', width:'33vw'}}
                    required
                    label="Contact" variant="outlined"
                />
                <Button
                    sx={{marginBottom:'20px', backgroundColor:'red', opacity:'0.9',
                        '&:hover': {
                            backgroundColor:'red',
                            opacity:'2'
                        }
                }}
                    variant="contained" >Contained</Button>
            </Card>
        </>
    )
}