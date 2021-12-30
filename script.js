<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet" type="text/css" />
    <title>Document</title>
</head>

<body>
    <br>
    <h1>countries list </h1>
    <br>

    <form id="main-form">
        <button class="btn btn-primary ml-3" id="load-all-countries">load all countries</button>
        <br>
        <hr><br>
        <label for="">search by name</label>
        <br>
        <input class="form-control" type="text" id="post-name-input" placeholder="post name">
        <br>
        <button id="post-name-search">search countries</button>
        <br>
        <hr>
    </form>


    <div id="list-results-input" placeholder="name">
    </div>
    <div class="form-control" type="text" id="list-table1-body">table1</div>
    <div class="form-control" type="text" id="list-table2-body">table2</div>


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
    <script src="script.js"></script>
</body>

</html>