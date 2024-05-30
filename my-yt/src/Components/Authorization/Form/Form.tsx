import {FC, useState} from 'react';
import { Input } from '@mantine/core';
import './Form.css'
import { Grid , Button} from '@mantine/core';

interface FormProps {
    title: string;
    handleClick: (email: string, pass: string) => void;
}

const Form: FC<FormProps> = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
             <Grid>
             <Grid.Col span={7}>
            <Input.Wrapper description="enter your Email" >
            <Input variant="unstyled"
            className='email'
             size="md"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            </Input.Wrapper>
            </Grid.Col>

            <Grid.Col span={7}>
            <Input.Wrapper description="enter your Pass" >
            <Input variant="unstyled"
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            </Input.Wrapper>
            </Grid.Col>
            </Grid>

            <Button
            variant="subtle" 
             fullWidth
             color="gray" onClick={() => handleClick(email, pass)}
            >
                {title}
            </Button>
        </div>
    )
}

export default Form