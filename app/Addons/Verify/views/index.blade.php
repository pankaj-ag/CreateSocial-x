<div class="page-content container">
    <div class="box" style="margin-top: 50px">
        <div class="box-title">Get Verified Badge Now</div>
        <div class="box-content">
            @if($message)
                <div class="alert alert-warning">{{$message}}</div>
            @endif
            <form action="" method="post">
                <label>Your purchase code</label>
                <input type="text" name="code" class="form-control" placeholder="Your Purchase code.."/>
                <br/>
                <br/>
                <button class="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
</div>