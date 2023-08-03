import express, { Express, NextFunction, Request, Response} from 'express';
import fs from 'fs';


const app: Express = express();
//= Application/Json format
app.use(express.json());
//= Use Static directory
app.use(express.static(`${__dirname}/views`));
app.use(express.static(`${__dirname}/bucket`));
//= View Engine
app.set('view engine', 'ejs');

//= Gallery Images data json
const images = JSON.parse(fs.readFileSync(`${__dirname}/data/imageGallery.json`).toString());

//= Get all image card
const getAllImagesCard = (req: Request, res: Response): void => {
    // res.status(200).render('pages/about', {
    //     result: images.length,
    //     data: {images}
    // });
    res.status(200).json({
        status: 'success',
        arrLength: images.length,
        data: {images}
    });
}
// app.get('/app/v1/gallery-images', getAllImagesCard);

//= Create a new image card
const createImageCard = (req: Request, res: Response) => {
    const newId = (Number(images[images.length - 1].id) + 1);
    const newImageCard = Object.assign({id: newId.toString()}, req.body);
    images.push(newImageCard);

    fs.writeFile(`${__dirname}/data/imageGallery.json`, JSON.stringify(images), () => {
        res.status(201).json({
            status: 'success',
            arrLength: images.length,
            message: 'Post image card successfully',
            data: {
                images: newImageCard
            }
        });
    });
};

// app.post('/app/v1/gallery-images', createImageCard);
//= refactor route
app
    .route('/app/v1/gallery-images')
    .get(getAllImagesCard)
    .post(createImageCard);

//= created at middleware
app.use((req: any, res: Response, next: NextFunction) => {
    req.requestTime = new Date().toLocaleString();
    next();
});


//= Get a single image card
app.get('/app/v1/gallery-images/:id', (req: any, res: Response): void => {
    console.log(req.requestTime)
    const singleImages = images.find((el: any): boolean => el.id === req.params.id);
    if (!singleImages) {
        res.status(404).json({
            status: 'fail',
            message: 'ID can not find!'
        });
    } else {
        res.status(200).json({
            status: 'success',
            data: singleImages
        });
    }
});

//= update a single image card
app.patch('/app/v1/gallery-images/:id', (req: Request, res: Response): void => {
    const updateSingleCard = images.findIndex((obj: any) => obj.id === req.params.id);
    console.log(images[updateSingleCard].title = 'ovi');
    // if (Number(req.params.id) > images.length) {
    //     res.status(404).json({
    //         status: 'fail',
    //         message: 'ID can not find!'
    //     });
    // } else {
    //     res.status(200).json({
    //         status: 'success',
    //         message: 'update single image card successfully'
    //     });
    // }

    res.end('done!');
});

//= delete a single image card
app.delete('/app/v1/gallery-images/:id', (req: Request, res: Response): void => {
    const singleImagesDelete = images.filter((el: any): boolean => el.id !== req.params.id);
    if (Number(req.params.id) > images.length) {
        res.status(404).json({
            status: 'fail',
            message: 'ID can not find!'
        });
    } else {
        res.status(200).json({
            status: 'success',
            message: 'delete single image card successfully',
            data: {singleImagesDelete}
        });
    }
});


app.listen(4200, () => {
    console.log(`server is listening http://localhost:4200`);
});

export default app;
