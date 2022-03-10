import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Navbar from '../components/navbar/Navbar.component';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import ReactVideoComponent from '../components/MediaVideoDinamis/ReactPlayer.component';

import { useForm, Controller } from "react-hook-form";


export default function Login() {


    const { handleSubmit, formState: { errors }, control } = useForm({
        defaultValues: {
          videourl: ''
        }
      });
    
    let [video, setVideo] = useState({
        videourlx: 'https://www.youtube.com/watch?v=M8rbVzVf_z0'
    });
    const onSubmit = data => {
        const {videourl} = data;
        setVideo({
            ...video,
            videourlx: videourl
        })
    };

    const textFieldStyle = {
        paddingTop: "3%",
        marginBottom: "20px",
        border: 1, 
        px: 1,
        borderRadius: 1,
        width: "100%"
    };
  return (
    <div>
      <Navbar />
      <Container maxWidth="xl">
        
        <Container maxWidth="lg">
        <h1>Video Dinamis</h1>
        <ReactVideoComponent url={video.videourlx} />
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
            name="videourl"
            control={control}
            rules={{ required: true }}
            render={({ field }) => 
              <Input {...field} type="text" style={textFieldStyle} placeholder="Youtube Video URL" />
            }
            />
            <Button type="submit" variant="contained" sx={{width:"100%", my:2}}>Load Video</Button>
        </form>
        </Container>
      </Container>
    </div>
  );
}
