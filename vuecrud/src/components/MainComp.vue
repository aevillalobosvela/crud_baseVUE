<template lang="">
    <div id="carouselExampleCaptions" class="carousel slide mb-5 mt-5">
        <div class="carousel-indicators">
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
            ></button>
            <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
            ></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://picsum.photos/2601/800" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://picsum.photos/2600/801" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src="https://picsum.photos/2600/799" class="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- Marketing messaging and featurettes
================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing mt-4">
        <!-- Three columns of text below the carousel -->
        <div class="row">
            <div class="col-lg-4 text-center">
                <img src="https://picsum.photos/1500" class="rounded-circle w-50" alt="..." />
                <h2 class="fw-normal">Heading</h2>
                <p>
                    Some representative placeholder content for the three columns of text below the
                    carousel. This is the first column.
                </p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <!-- /.col-lg-4 -->
            <div class="col-lg-4 text-center">
                <img src="https://picsum.photos/1502" class="rounded-circle w-50" alt="..." />
                <h2 class="fw-normal">Heading</h2>
                <p>
                    Another exciting bit of representative placeholder content. This time, we've
                    moved on to the second column.
                </p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <!-- /.col-lg-4 -->
            <div class="col-lg-4 text-center">
                <img src="https://picsum.photos/1501" class="rounded-circle w-50" alt="..." />
                <h2 class="fw-normal">Heading</h2>
                <p>And lastly this, the third column of representative placeholder content.</p>
                <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider" />

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">
                    First featurette heading.
                    <span class="text-body-secondary">It’ll blow your mind.</span>
                </h2>
                <p class="lead">
                    Some great placeholder content for the first featurette here. Imagine some
                    exciting prose here.
                </p>
            </div>
            <div class="col-md-5">
                <img src="https://picsum.photos/2501" class="d-block w-100" alt="..." />
            </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading fw-normal lh-1">
                    Oh yeah, it’s that good.
                    <span class="text-body-secondary">See for yourself.</span>
                </h2>
                <p class="lead">
                    Another featurette? Of course. More placeholder content here to give you an idea
                    of how this layout would work with some actual real-world content in place.
                </p>
            </div>
            <div class="col-md-5 order-md-1">
                <img src="https://picsum.photos/2502" class="d-block w-100" alt="..." />
            </div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">
                    And lastly, this one. <span class="text-body-secondary">Checkmate.</span>
                </h2>
                <p class="lead">
                    And yes, this is the last block of representative placeholder content. Again,
                    not really intended to be actually read, simply here to give you a better view
                    of what this would look like with some actual content. Your content.
                </p>
            </div>
            <div class="col-md-5">
                <img src="https://picsum.photos/2500" class="d-block w-100" alt="..." />
            </div>
        </div>

        <hr class="featurette-divider" />

        <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->

    <!-- FOOTER -->
    <footer class="container">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>
            &copy; 2017–2024 Company, Inc. &middot; <a href="#">Privacy</a> &middot;
            <a href="#">Terms</a>
        </p>
    </footer>
</template>
<script>
export default {};
</script>
<style lang=""></style>
