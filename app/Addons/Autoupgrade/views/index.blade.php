@if($repository->needUpdate())
    <div class="box">
        <div class="box-title">New Update is Available <span style="color: red;font-weight:bold">New!!</span></div>
    </div>
@endif

<div class="alert alert-danger">
    WARNING: The upgrade process will affect all files and folders included in the main crea8SOCIAL installation.
    If you have made any modifications to those files,your changes will be lost.<br/>
    <strong>BACKUP THE FOLLOWING FOLDERS</strong><br/>
    <li>app/config/</li>
    <li>app/lang/en/</li>
    <li>themes/frontend/</li><br/>
    <li>app/views/</li>

    <strong>Files That Will Not Be Updated/Overwrite are:</strong>

    <li>themes/frontend/default/asset/css/custom.css</li>
    <li>Your new languages at app/lang/</li>
    <li>Your stored Database Details</li>

    <br/><br/>

    Also your website will be set to maintenance mode, after successfully upgrade go to <strong>admincp->configurations -> general</strong>

    to disable maintenance mode

    <br/><br/>
    <strong>Also Remove /update.zip file that is just added to prevent error in future updates</strong>
</div>

<div class="box">
    <div class="box-title">Upgrade Now</div>
    <div class="box-content">
        @if($message)
            <div class="alert alert-warning">{{$message}}</div>
        @endif
        <form action="" method="post">

            <div class="alert alert-info">
                Please provide your crea8social purchase code to continue
            </div>

            <input class="form-control" type="text" name="code" placeholder="Purchase code"/><br/><br/>

            <button class="btn btn-danger">Start Now</button>
        </form>
    </div>
</div>