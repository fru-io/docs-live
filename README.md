FRU.io Documentation
======================
https://fru.ddev.com

## Contributions
Edits, additions, corrections, etc are most welcome. Our docs live in the `docs` folder and are written in [Markdown](https://daringfireball.net/projects/markdown/).

## Development

### Prereqs
 - A system capable of running [Docker](https://www.docker.com/)

### Clone the repo
```bash
git@github.com:drud/docs.git
```

### Build and run the container
```bash
docker build -t ddev-mkdocs .
docker run -it --rm -p 8000:8000 ddev-mkdocs
```

### Workflow
 - Edit docs as you see fit
 - Build and run the container
 - View your changes in the local environment at `http://localhost:8000`
 - Submit a pull request to this repository

#### Note
The workflow above can be made simpler/faster by running `mkdocs` locally or by mounting a volume to the running container
