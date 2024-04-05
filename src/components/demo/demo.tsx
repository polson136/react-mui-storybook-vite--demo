import { Button } from '../button/button';
import { Button as MUIButton } from '@mui/material';

const DemoPage = () => {
    return (
        <form>
            <input type="text" placeholder="Enter your name" />
            
            <br />
            <input type="password" placeholder="Enter your nickname" />
            <br />
            <Button>Button</Button>
            <Button variant="icon" icon="fingerprint" />
            <Button variant="icon" icon="alarm" />
            <br />
            <MUIButton variant="contained" color="primary">Primary</MUIButton>
            <button type="submit">Submit</button>
        </form>
    )
}   

export default DemoPage;