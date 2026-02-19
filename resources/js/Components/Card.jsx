import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import {render} from "react-dom";
import {Link} from "@inertiajs/react";

export function CardDefault({urlImg,titulo,descripcion}) {
    return (
        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={urlImg}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {titulo}
                </Typography>
                <Typography>
                    {descripcion}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link href={titulo} className={"btn bg-black"}>Ver</Link>
            </CardFooter>
        </Card>
    );
}
