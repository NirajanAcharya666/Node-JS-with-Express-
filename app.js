const express = require('express');
const fs = require('fs');
let app = express();

const port = 8000;



const logger = function(req,res, next){
    console.log("custom middleware is called");
    next()
}
// Middleware to parse JSON bodies
app.use(express.json());
//custom middleware 
app.use(logger)
app.use((req,res,next)=>{
req.requestedAt= new Date().toISOString();
next ();
})

let movies = JSON.parse(fs.readFileSync('./data/movies.json'));

//route parameter function 
const getAllMovies= (req, res) => {
    res.status(200).json({
        status: "success",
        requestedAt: req.requestedAt,
        length: movies.length,
        
        data: {
            movies: movies
        }
    });
}

const getMovie=(req, res) => {
    let id = +req.params.id;
    let movie = movies.find(el => el.id === id);

    if (!movie) {
        return res.status(404).json({
            status: "error",
            message: "Movie with the id " + id + " is not found"
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            movie: movie
        }
    });
}

const createMovie= (req, res) => {
    const newID = movies[movies.length - 1].id + 1;
    const newMovie = Object.assign({ id: newID }, req.body);
    movies.push(newMovie);
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to write file'
            });
        }
        res.status(201).json({
            status: 'success',
            data: {
                movie: newMovie
            }
        });
    });
}

const updateMovie=(req, res) => {
    let id = +req.params.id;
    let movieToUpdate = movies.find(el => el.id === id);

    if (!movieToUpdate) {
        return res.status(404).json({
            status: "error",
            message: "Movie with the id " + id + " is not found"
        });
    }

    Object.assign(movieToUpdate, req.body);
    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to write file'
            });
        }
        res.status(200).json({
            status: "success",
            data: {
                movie: movieToUpdate
            }
        });
    });
}

const deleteMovie=(req,res)=>{
    let id =+req.params.id;
    let movieToDelete= movies.find(el=>el.id===id)
    if(!movieToDelete){
        res.status(404).json({
            state:"error",
            message:"There is no name of "+ id + "is available there"
        })
    }
    let index = movies.indexOf(movieToDelete);
    movies.splice(index,1);
    fs.writeFile('./data/movies.json',JSON.stringify(movies), (err)=>{
        res.status(202).json({
            status:"success",
            data:{
                movie:null
            }
        })
    })
}


app.get('/api/v1/movies', getAllMovies);
app.get('/api/v1/movies/:id',getMovie);
app.post('/api/v1/movies',createMovie);
app.put('/api/v1/movies/:id',updateMovie );
app.delete('/api/v1/movies/:id',deleteMovie);

app.route('/api/v1/movies')
        .get(getAllMovies)
        .post(createMovie)

app.route('/api/v1/movies/:id')
    .get(getMovie)
    .put(updateMovie)
    .delete(deleteMovie)

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
