import { Navbar, Button, Typography } from "@material-tailwind/react";

export default function Example() {
    return (
        <Navbar className="mx-auto max-w-screen-xl">
            <div className="container flex items-center justify-between text-gray-900">
                <Typography
                    as="a"
                    href="#"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 font-normal"
                >
                    Kepsci 
                </Typography>


            
                <Button color="amber"variant="gradient" size="sm">
                    Login
                </Button>
            </div>
        </Navbar>
    );
}