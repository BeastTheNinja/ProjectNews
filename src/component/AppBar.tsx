import { Navigation } from "./nav"
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

export const AppBar = () => {

    return (
        <header className="flex justify-between items-center pl-10 pr-10 shadow-xl">
            <Typography variant="h4" component="h1" sx={{ color: '#C52525', fontWeight: 'bold' }}>
                INGN
            </Typography>

            <Navigation />
            <div className="flex gap-4 items-center">
            <img className="size-5" src="src/assets/icons/Vector.svg" alt="login" />
            <MenuIcon sx={{ color: '#C52525' }} />
            
            </div>

        </header>
    )
}